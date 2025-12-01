import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import { jsPDF } from "jspdf";

export default function VoiceInterviewPage() {
  const navigate = useNavigate();
  
  // Mock state
  const [transcript, setTranscript] = useState([
    { text: "Hi! I'm here to help match you with the right volunteer. Tell me a little about what you enjoy doing.", speaker: 'ai', timestamp: new Date().toISOString() }
  ]);
  const [interimText, setInterimText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const endRef = useRef(null);
  const interimTextRef = useRef('');
  const silenceTimerRef = useRef(null);

  // --- Progress Logic ---
  const [progress, setProgress] = useState(0);

  // Auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript, interimText, isProcessing]);

  // --- Analysis & Finish ---
  const handleFinishInterview = async () => {
    if (transcript.length < 2) {
      alert("Please have a short conversation first!");
      return;
    }
    
    setIsAnalyzing(true);
    try {
      const response = await fetch('/api/analyze-interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript })
      });
      
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server error: ${response.status} ${response.statusText}. Make sure the backend is running.`);
      }

      const data = await response.json();
      
      if (data.summaryMarkdown) {
        // Generate PDF with basic Markdown formatting
        const doc = new jsPDF();
        
        // Title
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("Volunteer Profile Summary", 20, 20);
        
        let yPos = 40;
        const pageWidth = 170; // mm
        
        // Split by lines to parse markdown headers
        const lines = data.summaryMarkdown.split('\n');
        
        lines.forEach(line => {
          // Check for page break
          if (yPos > 280) {
            doc.addPage();
            yPos = 20;
          }

          if (line.startsWith('# ')) {
            // H1
            doc.setFontSize(18);
            doc.setFont("helvetica", "bold");
            doc.text(line.replace('# ', ''), 20, yPos);
            yPos += 10;
          } else if (line.startsWith('## ')) {
            // H2
            doc.setFontSize(14);
            doc.setFont("helvetica", "bold");
            doc.text(line.replace('## ', ''), 20, yPos);
            yPos += 8;
          } else if (line.startsWith('### ')) {
            // H3
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(line.replace('### ', ''), 20, yPos);
            yPos += 7;
          } else if (line.trim() === '') {
            // Empty line
            yPos += 4;
          } else {
            // Body text
            doc.setFontSize(11);
            doc.setFont("helvetica", "normal");
            
            // Clean up bold markers for PDF (simple removal, real bolding is hard)
            const cleanLine = line.replace(/\*\*/g, '').replace(/__/g, '');
            
            const splitLines = doc.splitTextToSize(cleanLine, pageWidth);
            doc.text(splitLines, 20, yPos);
            yPos += (splitLines.length * 5);
          }
        });
        
        doc.save('interview_summary.pdf');
      } else if (data.summaryText) {
        // Fallback for plain text prompt
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text("Volunteer Profile Summary", 20, 20);
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(data.summaryText, 170);
        doc.text(splitText, 20, 40);
        doc.save('interview_summary.pdf');
      }

      // Navigate to Profile Creation with the data
      const analysisData = {
        summary: data.summaryMarkdown || data.summaryText,
        interests: data.structuredData?.interests || [],
        availability: data.structuredData?.availability || ''
      };

      // Small delay to allow the download to start before navigating
      setTimeout(() => {
        navigate('/profile-creation', { state: { analysisData } });
      }, 1000);

    } catch (error) {
      console.error("Analysis failed:", error);
      alert(`Failed to analyze interview: ${error.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // --- AI Integration ---
  useEffect(() => {
    const lastMessage = transcript[transcript.length - 1];
    
    // Only trigger if the last message was from the user and we aren't already thinking
    if (lastMessage?.speaker === 'user' && !isProcessing) {
      const fetchAIResponse = async () => {
        setIsProcessing(true);
        try {
          // Convert transcript to OpenAI format
          const apiMessages = transcript.map(t => ({
            role: t.speaker === 'user' ? 'user' : 'assistant',
            content: t.text
          }));

          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: apiMessages })
          });

          const data = await response.json();
          
          if (data.message) {
            setTranscript(prev => [...prev, {
              text: data.message,
              speaker: 'ai',
              timestamp: new Date().toISOString(),
              highlights: [] // add extraction logic later
            }]);
            
            // Update progress from backend analysis
            if (typeof data.progress === 'number') {
              setProgress(data.progress);
            }

            // TODO: (optional?) Text-to-Speech (TTS)
            // Implement window.speechSynthesis here to read 'data.message' aloud.
            // Ensure to handle voice selection (friendly tone) and visual sync.
          }
        } catch (error) {
          console.error("Error fetching AI response:", error);
          // Optional: Add an error message to the chat
        } finally {
          setIsProcessing(false);
        }
      };

      fetchAIResponse();
    }
  }, [transcript]);

  // Real Speech Recognition Logic
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let fullTranscript = '';
        
        // Accumulate all results from the current session
        for (let i = 0; i < event.results.length; ++i) {
          fullTranscript += event.results[i][0].transcript;
        }
        
        setInterimText(fullTranscript);
        interimTextRef.current = fullTranscript;

        // Reset silence timer on every new result
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = setTimeout(() => {
          recognition.stop(); // This triggers onend
        }, 1500); // 1.5 seconds of silence
      };

      recognition.onend = () => {
        setIsListening(false);
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

        // Commit the text when recognition stops (either manually or via timer)
        const finalText = interimTextRef.current;
        if (finalText.trim()) {
          setTranscript(prev => [...prev, { 
            text: finalText, 
            speaker: 'user', 
            timestamp: new Date().toISOString(),
            highlights: [] 
          }]);
          setInterimText('');
          interimTextRef.current = '';
        }
      };
      
      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    if (isListening) {
      // Manual Stop
      recognitionRef.current.stop();
      // onend will handle the state update and text commit
    } else {
      // Start
      try {
        setInterimText('');
        interimTextRef.current = '';
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error("Error starting recognition:", error);
      }
    }
  };

  // --- Shared Components ---

  const MicButton = ({ size = 'large', floating = false }) => (
    <button 
      onClick={toggleListening}
      style={{
        width: size === 'large' ? '64px' : '48px',
        height: size === 'large' ? '64px' : '48px',
        borderRadius: '50%',
        backgroundColor: isListening ? 'var(--color-error)' : 'var(--color-secondary)',
        color: isListening ? 'white' : '#333',
        border: '4px solid white',
        cursor: 'pointer',
        boxShadow: floating ? '0 8px 24px rgba(0,0,0,0.15)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        transform: isListening ? 'scale(1.1)' : 'scale(1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10
      }}
    >
      {isListening ? (
        // Stop Icon
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/>
        </svg>
      ) : (
        // Mic Icon
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14Z" fill="currentColor"/>
          <path d="M19 10V11C19 14.53 16.39 17.44 13 17.93V21H11V17.93C7.61 17.44 5 14.53 5 11V10H7V11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11V10H19Z" fill="currentColor"/>
        </svg>
      )}
    </button>
  );

  const HighlightText = ({ text, highlights = [] }) => {
    if (!highlights.length) return text;
    const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'));
    return parts.map((part, i) => {
      const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
      return isHighlight ? (
        <span key={i} style={{ 
          backgroundColor: 'var(--color-success)', 
          padding: '0 4px', 
          borderRadius: '4px',
          fontWeight: '700' 
        }}>{part}</span>
      ) : part;
    });
  };

  return (
    <div className="voice-interview-page" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-background)' }}>
      <Header title="Voice Interview" showBack showHome />
      
      <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto', width: '100%', overflowY: 'auto', paddingBottom: '120px' }}>
        {transcript.map((t, i) => (
          <div key={i} style={{
            width: '100%',
            backgroundColor: t.speaker === 'user' ? 'var(--color-primary-light)' : 'white',
            padding: '1rem 1.25rem',
            borderRadius: '16px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            border: t.speaker === 'ai' ? '1px solid var(--color-border)' : '1px solid var(--color-primary)',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', top: '-8px', left: '16px', 
              backgroundColor: t.speaker === 'user' ? 'var(--color-primary)' : 'var(--color-secondary)',
              color: t.speaker === 'user' ? '#000' : '#333',
              fontSize: '10px', fontWeight: '700', 
              padding: '2px 8px', borderRadius: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {t.speaker === 'ai' ? 'SilverGuide AI' : 'You'}
            </div>
            <div style={{ fontSize: '15px', marginTop: '6px', lineHeight: '1.5', color: '#333' }}>
              <HighlightText text={t.text} highlights={t.highlights} />
            </div>
          </div>
        ))}
        {interimText && (
          <div style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '16px', border: '1px dashed var(--color-primary)', backgroundColor: 'rgba(255,255,255,0.5)' }}>
            <div style={{ fontSize: '15px', color: '#666', fontStyle: 'italic' }}>{interimText}</div>
          </div>
        )}
        
        {/* AI Processing Indicator */}
        {isProcessing && (
          <div style={{ width: '100%', padding: '1rem 1.25rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', animation: 'pulse 1s infinite' }}></div>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></div>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></div>
            <span style={{ fontSize: '12px', color: '#999', marginLeft: '0.5rem' }}>SilverGuide is thinking...</span>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Fixed Controls Layer */}
      
      {/* Mic Button (Center) */}
      <div style={{ position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
        <MicButton size="large" floating />
      </div>

      {/* Generate Button (Right) */}
      {transcript.length > 0 && (
        <div style={{ position: 'fixed', bottom: '2.5rem', right: '2rem', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
          <button 
            onClick={handleFinishInterview}
            disabled={progress < 100 || isAnalyzing || isProcessing || isListening}
            style={{
              padding: '12px 28px',
              backgroundColor: progress >= 100 ? 'var(--color-secondary)' : '#F5F5F5',
              color: progress >= 100 ? '#333' : '#888',
              border: progress >= 100 ? 'none' : '1px solid #E0E0E0',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: progress >= 100 ? 'pointer' : 'default',
              boxShadow: progress >= 100 ? '0 4px 16px rgba(220, 208, 255, 0.6)' : 'none',
              display: 'flex', alignItems: 'center', gap: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: (isAnalyzing || isProcessing || isListening) ? 0.6 : 1,
              minWidth: '180px',
              justifyContent: 'center'
            }}
          >
            {progress < 100 ? (
              <>
                <div style={{ position: 'relative', width: '20px', height: '20px' }}>
                  {/* Background Circle */}
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="none" stroke="#C0C0C0" strokeWidth="3.5" />
                    {/* Progress Circle */}
                    <circle 
                      cx="10" cy="10" r="8" fill="none" stroke="#9370DB" strokeWidth="3.5" 
                      strokeDasharray="50.26" 
                      strokeDashoffset={50.26 * (1 - progress / 100)}
                      transform="rotate(-90 10 10)"
                      style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
                    />
                  </svg>
                </div>
                <span style={{ fontSize: '14px' }}>Gathering Info...</span>
              </>
            ) : (
              <>
                {isAnalyzing ? 'Generating...' : 'Generate My Profile'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
