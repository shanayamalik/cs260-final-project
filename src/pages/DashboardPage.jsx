import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VolunteerCard from '../components/VolunteerCard';
import { mockVolunteers } from '../data/mockVolunteers';
import { matchVolunteers } from '../utils/matching';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [matches, setMatches] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      if (parsedUser.profile) {
        setMatches(matchVolunteers(mockVolunteers, parsedUser.profile, { maxResults: 3 }));
      }
    }
  }, []);

  const recentChats = [
    { id: 1, name: 'Maria Santos', date: 'Yesterday', message: 'That sounds like a lovely book!', avatar: '👩‍🏫' },
    { id: 2, name: 'Raj Patel', date: '2 days ago', message: 'We can try setting up the iPad on Tuesday.', avatar: '💻' },
    { id: 3, name: 'Sarah Jenkins', date: '3 days ago', message: 'I can bring the groceries.', avatar: '🥬' },
    { id: 4, name: 'David Kim', date: 'Last week', message: 'See you then!', avatar: '👋' }
  ];

  if (!user) return null;

  // --- Hybrid Layout Components ---

  const WelcomeBanner = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '0.5rem' }}>
        Welcome back, {user.name || 'Friend'}! 👋
      </h1>
      <p style={{ color: '#64748b', fontSize: '14px' }}>Here's what's happening today.</p>
    </div>
  );

  // Compact Style Stats Bar
  const StatsSection = () => {
    const stats = [
      { label: 'New Matches', value: matches.length, icon: '🤝' },
      { label: 'Unread Messages', value: '2', icon: '💬' },
      { label: 'Upcoming Visits', value: '0', icon: '📅' }
    ];

    return (
      <div style={{ 
        display: 'flex', 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        border: '1px solid #e2e8f0',
        marginBottom: '2rem',
        padding: '1rem 2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, justifyContent: i === 1 ? 'center' : (i === 2 ? 'flex-end' : 'flex-start') }}>
            <div style={{ fontSize: '20px', padding: '8px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>{stat.icon}</div>
            <div>
              <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '18px', lineHeight: '1.2' }}>{stat.value}</div>
              <div style={{ fontSize: '13px', color: '#64748b' }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Classic Grid Style Matches (Minimalist)
  const MatchesSection = () => (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '18px', color: '#334155', fontWeight: '600' }}>Your Top Matches</h2>
        <button onClick={() => navigate('/volunteers')} style={{ color: '#0d9488', background: 'none', border: 'none', fontWeight: '500', cursor: 'pointer', fontSize: '13px' }}>View All</button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {matches.map(volunteer => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} onViewProfile={() => navigate('/volunteers')} />
        ))}
      </div>
    </div>
  );

  // Compact Style Messages List
  const MessagesSection = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '18px', color: '#334155', fontWeight: '600' }}>Recent Messages</h2>
        <button style={{ color: '#0d9488', background: 'none', border: 'none', fontWeight: '500', cursor: 'pointer', fontSize: '13px' }}>View All</button>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        {recentChats.map((chat, i) => (
          <div key={chat.id} 
            onClick={() => navigate(`/chat/${chat.id}`, { state: { volunteer: { name: chat.name, avatar: chat.avatar } } })}
            style={{ 
              padding: '12px 16px', 
              borderBottom: i !== recentChats.length - 1 ? '1px solid #f1f5f9' : 'none',
              display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            <div style={{ 
              fontSize: '16px', 
              width: '36px', 
              height: '36px', 
              backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              {chat.avatar}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ fontWeight: '600', color: '#334155', fontSize: '13px' }}>{chat.name}</span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>{chat.date}</span>
              </div>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- Sidebar Styles (Classic Dark) ---
  const sidebarStyles = {
    width: '260px',
    padding: '1.5rem',
    bg: '#1e293b',
    text: 'white',
    itemPadding: '12px 16px',
    activeBg: '#0d9488',
    activeText: 'white'
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      {/* Sidebar */}
      <div style={{ 
        width: sidebarStyles.width, 
        padding: sidebarStyles.padding, 
        backgroundColor: sidebarStyles.bg,
        color: sidebarStyles.text,
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '24px' }}>👵</span> SilverGuide
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
            { id: 'matches', icon: '🤝', label: 'My Matches' },
            { id: 'messages', icon: '💬', label: 'Messages' },
            { id: 'profile', icon: '👤', label: 'Profile' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: sidebarStyles.itemPadding,
                border: 'none', borderRadius: '8px',
                cursor: 'pointer', textAlign: 'left', fontSize: '14px', fontWeight: activeTab === item.id ? '600' : '500',
                backgroundColor: activeTab === item.id ? sidebarStyles.activeBg : 'transparent',
                color: activeTab === item.id ? sidebarStyles.activeText : '#94a3b8',
                transition: 'all 0.2s',
                boxShadow: activeTab === item.id ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#334155' }}>
            <div style={{ fontSize: '12px', marginBottom: '4px', color: '#94a3b8' }}>Signed in as</div>
            <div style={{ fontWeight: '600', fontSize: '14px' }}>{user.name}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <WelcomeBanner />
          <StatsSection />
          
          {/* Hybrid Grid: Matches (Cards) + Messages (List) */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div><MatchesSection /></div>
            <div><MessagesSection /></div>
          </div>
        </div>
      </div>

    </div>
  );
}
