import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header({ currentView, onNavigate }) {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetView, hash) => {
    e.preventDefault();
    if (currentView !== targetView) {
      onNavigate(targetView, hash);
    } else if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px 32px',
        padding: '28px clamp(20px, 4vw, 56px) 0',
        zIndex: 10
      }}
    >
      <a
        href="#home"
        onClick={e => handleNavClick(e, 'home', '#home')}
        style={{
          textDecoration: 'none',
          color: 'var(--theme-fg)',
          fontSize: '15px',
          lineHeight: '1.25',
          fontWeight: 500,
          whiteSpace: 'pre-line',
          letterSpacing: '-0.01em'
        }}
      >
        Rafael{'\n'}Flores
      </a>

      {currentView === 'project' && (
        <button
          type="button"
          onClick={e => handleNavClick(e, 'projects', null)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            height: '44px',
            padding: '0 20px',
            border: '1px solid var(--theme-line)',
            borderRadius: '999px',
            color: 'var(--theme-fg)',
            fontSize: '13px',
            fontStyle: 'italic',
            transition: 'border-color 0.2s ease, background-color 0.2s ease'
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--theme-fg)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--theme-line)')}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          All Projects
        </button>
      )}

      {/* Main Nav */}
      <nav
        aria-label="Main"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '4px 28px',
          fontSize: '13px'
        }}
      >
        <a
          href="#about"
          onClick={e => handleNavClick(e, 'home', '#about')}
          style={{
            color: 'var(--theme-fg)',
            textDecoration: 'none',
            padding: '12px 0',
            opacity: 0.9,
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.9')}
        >
          About
        </a>

        <a
          href="#projects"
          onClick={e => handleNavClick(e, 'projects', null)}
          style={{
            color: 'var(--theme-fg)',
            padding: '12px 0',
            textDecoration: currentView === 'projects' ? 'underline' : 'none',
            textDecorationColor: 'var(--theme-accent)',
            textDecorationThickness: '2px',
            textUnderlineOffset: '6px',
            fontWeight: currentView === 'projects' ? 600 : 400,
            transition: 'opacity 0.2s ease'
          }}
        >
          Projects
        </a>

        <a
          href="#experience"
          onClick={e => handleNavClick(e, 'home', '#experience')}
          style={{
            color: 'var(--theme-fg)',
            textDecoration: 'none',
            padding: '12px 0',
            opacity: 0.9,
            transition: 'opacity 0.2s ease'
          }}
        >
          Experience
        </a>

        <a
          href="#contact"
          onClick={e => handleNavClick(e, currentView, '#contact')}
          style={{
            color: 'var(--theme-fg)',
            textDecoration: 'none',
            padding: '12px 0',
            opacity: 0.9,
            transition: 'opacity 0.2s ease'
          }}
        >
          Contact
        </a>
      </nav>

      {/* Controls: Theme Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          title={isDark ? 'Light theme' : 'Dark theme'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid var(--theme-line)',
            background: 'var(--theme-bg)',
            color: 'var(--theme-fg)',
            cursor: 'pointer',
            padding: 0,
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--theme-accent)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--theme-line)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isDark ? (
            /* Sun Icon */
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
              style={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 1.6,
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              }}
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            /* Moon Icon */
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
              style={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 1.6,
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              }}
            >
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
