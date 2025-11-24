import React from 'react';

export default function HomePage() {
  return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1rem' }}>Welcome to SilverGuide</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Connecting seniors with friendly volunteers for conversation, hobbies, and help.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-text-main)',
          border: 'none',
          borderRadius: 'var(--radius-lg)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-bold)',
          boxShadow: 'var(--shadow-md)'
        }}>
          Get Started
        </button>
        
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: 'white',
          color: 'var(--color-text-main)',
          border: '2px solid var(--color-secondary)',
          borderRadius: 'var(--radius-lg)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-bold)'
        }}>
          Learn More
        </button>
      </div>
    </div>
  );
}

