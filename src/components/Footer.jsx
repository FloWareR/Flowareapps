import React from 'react';

export default function Footer({ onScrollTop }) {
  const handleTopClick = (e) => {
    e.preventDefault();
    if (onScrollTop) {
      onScrollTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px 24px',
        marginTop: 'clamp(64px, 8vw, 104px)',
        padding: '24px clamp(20px, 4vw, 56px) 32px',
        borderTop: '1px solid var(--theme-line)',
        fontSize: '13px',
        color: 'var(--theme-muted)'
      }}
    >
      <span>© 2026 Rafael Flores</span>
      <span>Made in Mexico · Game &amp; Full-stack Developer</span>
      <a
        href="#home"
        onClick={handleTopClick}
        style={{
          color: 'var(--theme-fg)',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'color 0.2s ease'
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--theme-accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--theme-fg)')}
      >
        Back to top ↑
      </a>
    </footer>
  );
}
