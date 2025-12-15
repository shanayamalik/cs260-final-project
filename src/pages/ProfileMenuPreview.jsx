import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenuPreview() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('A');

  const user = {
    name: 'Eleanor Rodriguez',
    email: 'eleanor.r@email.com',
    avatar: '👵🏽',
    memberSince: 'January 2024'
  };

  // Option A: GitHub-Style Full Menu
  const OptionA = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '1rem', color: '#334155' }}>
            Option A: GitHub-Style Full Menu
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '2rem' }}>
            Comprehensive menu with grouped sections and dividers
          </p>

          {/* Mock header with profile button */}
          <div style={{
            backgroundColor: 'white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0d9488', margin: 0 }}>
              SilverLink
            </h3>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1e293b'
              }}
            >
              <span style={{ fontSize: '20px' }}>{user.avatar}</span>
              <span>{user.name.split(' ')[0]}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                right: 0,
                backgroundColor: 'white',
                zIndex: 10,
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: '1px solid #e2e8f0',
              width: '300px',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                padding: '16px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  fontSize: '32px',
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#f0fdfa',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {user.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>
                    {user.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {user.email}
                  </div>
                </div>
              </div>

              {/* Main Section */}
              <div style={{ padding: '8px 0' }}>
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>} text="My Profile" />
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>} text="My Schedule" />
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>} text="Messages" badge="3" />
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>} text="My Matches" />
              </div>

              <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '8px 0' }} />

              {/* Settings Section */}
              <div style={{ padding: '8px 0' }}>
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>} text="Settings" />
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>} text="Accessibility" />
              </div>

              <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '8px 0' }} />

              {/* Support Section */}
              <div style={{ padding: '8px 0' }}>
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>} text="Help & Support" />
              </div>

              <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '8px 0' }} />

              {/* Sign Out */}
              <div style={{ padding: '8px 0' }}>
                <MenuItem icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>} text="Sign Out" danger />
              </div>
            </div>
            )}
          </div>
          </div>
        </div>
      </div>
    );
  };

  // Option B: Banking-Style Clean Menu
  const OptionB = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '1rem', color: '#334155' }}>
            Option B: Banking-Style Clean Menu
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '2rem' }}>
            Simple, minimal menu with clear hierarchy
          </p>

          {/* Mock header */}
          <div style={{
            backgroundColor: 'white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0d9488', margin: 0 }}>
              SilverLink
            </h3>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              style={{
                padding: '8px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px'
              }}
            >
              {user.avatar}
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                right: 0,
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0',
                width: '280px',
                overflow: 'hidden',
                zIndex: 10
              }}>
              {/* Header */}
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                color: 'white'
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '8px'
                }}>
                  {user.avatar}
                </div>
                <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>
                  My Account
                </div>
                <div style={{ fontSize: '13px', opacity: 0.9 }}>
                  {user.name}
                </div>
              </div>

              {/* Menu Items */}
              <div style={{ padding: '12px' }}>
                <SimpleMenuItem text="Profile" />
                <SimpleMenuItem text="Schedule & Visits" />
                <SimpleMenuItem text="My Volunteers" />
                <SimpleMenuItem text="Messages" badge="3" />
                <SimpleMenuItem text="Preferences" />
                <SimpleMenuItem text="Settings" />
                <SimpleMenuItem text="Help Center" />
                <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '12px 0' }} />
                <SimpleMenuItem text="Log Out" />
              </div>
            </div>
            )}
          </div>
          </div>
        </div>
      </div>
    );
  };

  // Option C: Card-Based Menu
  const OptionC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '1rem', color: '#334155' }}>
            Option C: Card-Based Menu
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '2rem' }}>
            Visual card layout with icons and descriptions
          </p>

          {/* Mock header */}
          <div style={{
            backgroundColor: 'white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0d9488', margin: 0 }}>
              SilverLink
            </h3>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#0d9488',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              Account Menu
            </button>

            {/* Card Menu */}
            {showMenu && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                right: 0,
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0',
                minWidth: '420px',
                zIndex: 10
              }}>
              {/* Profile Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                backgroundColor: '#f0fdfa',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  fontSize: '48px',
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #0d9488'
                }}>
                  {user.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>
                    {user.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>
                    {user.email}
                  </div>
                  <div style={{ fontSize: '12px', color: '#0d9488', fontWeight: '500' }}>
                    Member since {user.memberSince}
                  </div>
                </div>
              </div>

              {/* Grid of Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <CardMenuItem icon="📅" title="Schedule" desc="Manage visits" />
                <CardMenuItem icon="💬" title="Messages" desc="3 unread" badge />
                <CardMenuItem icon="❤️" title="Matches" desc="View volunteers" />
                <CardMenuItem icon="⚙️" title="Settings" desc="Preferences" />
              </div>

              <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '16px 0' }} />

              {/* Bottom Actions */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#475569',
                  cursor: 'pointer'
                }}>
                  Help Center
                </button>
                <button style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#fee2e2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#dc2626',
                  cursor: 'pointer'
                }}>
                  Sign Out
                </button>
              </div>
            </div>
            )}
          </div>
          </div>
        </div>
      </div>
    );
  };

  // Option D: Sidebar Panel
  const OptionD = () => {
    const [showPanel, setShowPanel] = useState(false);

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '1rem', color: '#334155' }}>
            Option D: Sidebar Panel
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '2rem' }}>
            Full-height side panel with expanded information
          </p>

          {/* Mock header */}
          <div style={{
            backgroundColor: 'white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0d9488', margin: 0 }}>
              SilverLink
            </h3>
            <button
              onClick={() => setShowPanel(!showPanel)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#0d9488',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              Toggle Panel
            </button>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #e2e8f0',
            minHeight: '400px'
          }}>
            <p style={{ color: '#64748b' }}>Main content area...</p>
          </div>
        </div>

        {/* Side Panel */}
        {showPanel && (
          <>
            {/* Overlay */}
            <div
              onClick={() => setShowPanel(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 100
              }}
            />

            {/* Panel */}
            <div style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '380px',
              backgroundColor: 'white',
              boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
              zIndex: 101,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto'
            }}>
              {/* Panel Header */}
              <div style={{
                padding: '24px',
                background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                color: 'white'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ fontSize: '48px' }}>{user.avatar}</div>
                  <button
                    onClick={() => setShowPanel(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      fontSize: '24px',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                  >
                    ×
                  </button>
                </div>
                <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px' }}>
                  {user.name}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  {user.email}
                </div>
              </div>

              {/* Panel Content */}
              <div style={{ flex: 1, padding: '24px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <SectionTitle text="Account" />
                  <PanelMenuItem icon="👤" text="My Profile" desc="View and edit profile" />
                  <PanelMenuItem icon="📅" text="Schedule" desc="Upcoming visits" />
                  <PanelMenuItem icon="💬" text="Messages" desc="3 new messages" badge />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <SectionTitle text="Connections" />
                  <PanelMenuItem icon="❤️" text="My Volunteers" desc="View matched volunteers" />
                  <PanelMenuItem icon="🔍" text="Find More" desc="Discover volunteers" />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <SectionTitle text="Settings" />
                  <PanelMenuItem icon="⚙️" text="Preferences" desc="Account settings" />
                  <PanelMenuItem icon="♿" text="Accessibility" desc="Display options" />
                  <PanelMenuItem icon="🔔" text="Notifications" desc="Manage alerts" />
                </div>

                <div>
                  <SectionTitle text="Support" />
                  <PanelMenuItem icon="❓" text="Help Center" desc="Get assistance" />
                  <PanelMenuItem icon="📞" text="Contact Us" desc="Reach support" />
                </div>
              </div>

              {/* Panel Footer */}
              <div style={{
                padding: '24px',
                borderTop: '1px solid #e2e8f0'
              }}>
                <button style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#fee2e2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#dc2626',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <span>🚪</span>
                  Sign Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  // Helper Components
  const MenuItem = ({ icon, text, badge, danger }) => (
    <button style={{
      width: '100%',
      padding: '10px 16px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '14px',
      fontWeight: '500',
      color: danger ? '#dc2626' : '#334155',
      textAlign: 'left',
      transition: 'background-color 0.2s'
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = danger ? '#fee2e2' : '#f8fafc'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <span style={{ display: 'flex', alignItems: 'center', color: danger ? '#dc2626' : '#64748b' }}>{icon}</span>
      <span style={{ flex: 1 }}>{text}</span>
      {badge && (
        <span style={{
          backgroundColor: '#ef4444',
          color: 'white',
          fontSize: '11px',
          fontWeight: '700',
          padding: '2px 6px',
          borderRadius: '10px',
          minWidth: '18px',
          textAlign: 'center'
        }}>
          {badge}
        </span>
      )}
    </button>
  );

  const SimpleMenuItem = ({ text, badge }) => (
    <button style={{
      width: '100%',
      padding: '12px 16px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px',
      fontWeight: '500',
      color: '#334155',
      textAlign: 'left',
      borderRadius: '8px',
      marginBottom: '4px',
      transition: 'background-color 0.2s'
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <span>{text}</span>
      {badge && (
        <span style={{
          backgroundColor: '#ef4444',
          color: 'white',
          fontSize: '11px',
          fontWeight: '700',
          padding: '3px 7px',
          borderRadius: '10px'
        }}>
          {badge}
        </span>
      )}
    </button>
  );

  const CardMenuItem = ({ icon, title, desc, badge }) => (
    <button style={{
      padding: '16px',
      border: '1px solid #e2e8f0',
      backgroundColor: 'white',
      borderRadius: '12px',
      cursor: 'pointer',
      textAlign: 'left',
      transition: 'all 0.2s',
      position: 'relative'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.borderColor = '#0d9488';
      e.currentTarget.style.backgroundColor = '#f0fdfa';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.borderColor = '#e2e8f0';
      e.currentTarget.style.backgroundColor = 'white';
    }}
    >
      {badge && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          width: '8px',
          height: '8px',
          backgroundColor: '#ef4444',
          borderRadius: '50%'
        }} />
      )}
      <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '2px' }}>
        {title}
      </div>
      <div style={{ fontSize: '12px', color: '#64748b' }}>
        {desc}
      </div>
    </button>
  );

  const PanelMenuItem = ({ icon, text, desc, badge }) => (
    <button style={{
      width: '100%',
      padding: '12px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textAlign: 'left',
      borderRadius: '8px',
      marginBottom: '8px',
      transition: 'background-color 0.2s'
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '2px' }}>
          {text}
        </div>
        <div style={{ fontSize: '12px', color: '#64748b' }}>
          {desc}
        </div>
      </div>
      {badge && (
        <span style={{
          backgroundColor: '#ef4444',
          color: 'white',
          fontSize: '11px',
          fontWeight: '700',
          padding: '3px 7px',
          borderRadius: '10px'
        }}>
          3
        </span>
      )}
    </button>
  );

  const SectionTitle = ({ text }) => (
    <div style={{
      fontSize: '11px',
      fontWeight: '700',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '12px'
    }}>
      {text}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '18px', fontWeight: '700', color: '#0d9488', margin: 0 }}>
            Profile Menu Options
          </h1>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#0d9488',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Option Tabs */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 2rem',
        position: 'sticky',
        top: '60px',
        zIndex: 99
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '2px' }}>
          {['A', 'B', 'C', 'D'].map(opt => (
            <button
              key={opt}
              onClick={() => setSelectedOption(opt)}
              style={{
                padding: '12px 24px',
                border: 'none',
                borderBottom: selectedOption === opt ? '3px solid #0d9488' : '3px solid transparent',
                backgroundColor: selectedOption === opt ? '#f0fdfa' : 'transparent',
                color: selectedOption === opt ? '#0d9488' : '#64748b',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              Option {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>
        {selectedOption === 'A' && <OptionA />}
        {selectedOption === 'B' && <OptionB />}
        {selectedOption === 'C' && <OptionC />}
        {selectedOption === 'D' && <OptionD />}
      </div>
    </div>
  );
}
