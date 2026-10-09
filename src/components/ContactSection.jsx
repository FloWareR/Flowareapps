import React, { useState } from 'react';
import ConcentricRings from './ConcentricRings';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection({ style = {} }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="ct-title"
      style={{
        position: 'relative',
        marginTop: 'clamp(80px, 10vw, 140px)',
        padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 56px) 0',
        borderTop: '1px solid var(--theme-line)',
        ...style
      }}
    >
      <ConcentricRings position="bottom-left" />

      <p
        style={{
          position: 'relative',
          margin: '0 0 20px',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          fontSize: '13px',
          color: 'var(--theme-fg)'
        }}
      >
        ... /Contact ...
      </p>

      <h2
        id="ct-title"
        style={{
          position: 'relative',
          margin: 0,
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: 'clamp(36px, 6vw, 92px)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          maxWidth: '20ch',
          color: 'var(--theme-fg)'
        }}
      >
        Let's get in touch
      </h2>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '40px 64px',
          marginTop: '40px'
        }}
      >
        <div
          style={{
            flex: '1 1 320px',
            maxWidth: '440px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <p style={{ margin: 0, color: 'var(--theme-muted)', lineHeight: 1.55 }}>
            Open to{' '}
            <strong style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
              game development
            </strong>{' '}
            and{' '}
            <strong style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
              full-stack product
            </strong>{' '}
            opportunities, freelance or full-time. I reply within 48 hours.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '200px',
                height: '52px',
                padding: '0 28px',
                borderRadius: '999px',
                background: 'var(--theme-accent)',
                color: '#141414',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                transition: 'opacity 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get in touch
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send email"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--theme-accent)',
                color: '#141414',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                style={{
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 1.8,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round'
                }}
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>

        <ul
          aria-label="Contact details"
          style={{
            flex: '1 1 480px',
            maxWidth: '680px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            borderTop: '1px solid var(--theme-line)'
          }}
        >
          {/* Email */}
          <li>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '4px 24px',
                padding: '18px 0',
                borderBottom: '1px solid var(--theme-line)',
                color: 'var(--theme-fg)'
              }}
            >
              <span style={{ flex: '0 0 120px', fontSize: '13px', color: 'var(--theme-muted)' }}>
                Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                style={{
                  flex: '1 1 200px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '16px',
                  color: 'var(--theme-fg)',
                  textDecoration: 'none'
                }}
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: copied ? 'var(--theme-accent)' : 'var(--theme-muted)',
                  border: '1px solid var(--theme-line)',
                  borderRadius: '999px',
                  padding: '4px 12px',
                  cursor: 'pointer'
                }}
              >
                {copied ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>
          </li>

          {/* Teléfono / WhatsApp */}
          <li>
            <a
              href={PERSONAL_INFO.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '4px 24px',
                padding: '18px 0',
                borderBottom: '1px solid var(--theme-line)',
                color: 'var(--theme-fg)',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ flex: '0 0 120px', fontSize: '13px', color: 'var(--theme-muted)' }}>
                Phone
              </span>
              <span style={{ flex: '1 1 200px', fontFamily: 'var(--font-mono)', fontSize: '16px' }}>
                {PERSONAL_INFO.phoneDisplay}
              </span>
              <span aria-hidden="true" style={{ fontSize: '18px' }}>
                ↗
              </span>
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '4px 24px',
                padding: '18px 0',
                borderBottom: '1px solid var(--theme-line)',
                color: 'var(--theme-fg)',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ flex: '0 0 120px', fontSize: '13px', color: 'var(--theme-muted)' }}>
                LinkedIn
              </span>
              <span style={{ flex: '1 1 200px', fontFamily: 'var(--font-mono)', fontSize: '16px' }}>
                /in/rafael-flores
              </span>
              <span aria-hidden="true" style={{ fontSize: '18px' }}>
                ↗
              </span>
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '4px 24px',
                padding: '18px 0',
                borderBottom: '1px solid var(--theme-line)',
                color: 'var(--theme-fg)',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ flex: '0 0 120px', fontSize: '13px', color: 'var(--theme-muted)' }}>
                GitHub
              </span>
              <span style={{ flex: '1 1 200px', fontFamily: 'var(--font-mono)', fontSize: '16px' }}>
                @FloWareR
              </span>
              <span aria-hidden="true" style={{ fontSize: '18px' }}>
                ↗
              </span>
            </a>
          </li>

          {/* itch.io */}
          <li>
            <a
              href={PERSONAL_INFO.links.itch}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '4px 24px',
                padding: '18px 0',
                borderBottom: '1px solid var(--theme-line)',
                color: 'var(--theme-fg)',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ flex: '0 0 120px', fontSize: '13px', color: 'var(--theme-muted)' }}>
                itch.io
              </span>
              <span style={{ flex: '1 1 200px', fontFamily: 'var(--font-mono)', fontSize: '16px' }}>
                floware.itch.io
              </span>
              <span aria-hidden="true" style={{ fontSize: '18px' }}>
                ↗
              </span>
            </a>
          </li>


        </ul>
      </div>
    </section>
  );
}
