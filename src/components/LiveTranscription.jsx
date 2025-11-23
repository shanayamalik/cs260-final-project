// TODO: Create LiveTranscription component for DIFFICULT TASK
//
// Props to implement:
// - transcript: array of transcript lines
//   [{ text: string, confidence: number, timestamp: string }]
// - isListening: boolean (show live indicator)
//
// Features:
// - Display real-time speech-to-text output
// - Color-coded confidence levels:
//   - Green: high confidence (>0.8)
//   - Yellow: medium confidence (0.5-0.8)
//   - Red: low confidence (<0.5)
// - Auto-scroll to latest transcript
// - Clear visual indicator when actively listening
// - Scrollable history of conversation
// - Large, readable text (min 18px)
//
// Transcript line format:
// {
//   text: "I like gardening and reading",
//   confidence: 0.92,
//   timestamp: "10:30 AM",
//   speaker: "user" | "ai"
// }
//
// Design:
// - Different styling for user vs AI speech
// - Subtle background colors for each line
// - Timestamp in smaller, gray text
//
// Example usage:
// <LiveTranscription 
//   transcript={conversationHistory}
//   isListening={isRecording}
// />

export default function LiveTranscription() {
  return null;
}
