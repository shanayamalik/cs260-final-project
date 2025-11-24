import React from 'react';
import Button from '../components/common/Button';

export default function HomePage() {
  return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1rem' }}>Welcome to SilverGuide</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Connecting seniors with friendly volunteers for conversation, hobbies, and help.
      </p>
      
      {/* --- BUTTON PREVIEW SECTION --- */}
      <section style={{ marginBottom: '4rem', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ marginBottom: '2rem' }}>Button Component Preview</h2>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#666' }}>1. New Color Scheme (Blue & Lilac)</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary (Blue)</Button>
            <Button variant="secondary">Secondary (Lilac)</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#666' }}>2. Updated Sizes</h3>
          <p style={{ marginBottom: '1rem', fontSize: '14px', color: '#888' }}>Large is now slightly smaller (54px height) but still accessible.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="small" variant="primary">Small</Button>
            <Button size="medium" variant="primary">Medium</Button>
            <Button size="large" variant="primary">Large (Default)</Button>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#666' }}>3. Selected Corner Radius</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary">Rounded (20px)</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

