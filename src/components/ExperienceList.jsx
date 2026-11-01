import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';

export default function ExperienceList() {
  return (
    <section
      id="experience"
      aria-labelledby="exp-title"
      style={{
        position: 'relative',
        marginTop: 'clamp(64px, 8vw, 112px)'
      }}
    >
      <h2
        id="exp-title"
        style={{
          margin: 0,
          padding: '0 clamp(20px, 4vw, 56px) 20px',
          textAlign: 'right',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: 'clamp(44px, 7.4vw, 112px)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: 'var(--theme-fg)'
        }}
      >
        Experience
      </h2>

      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          borderTop: '1px solid var(--theme-line)'
        }}
      >
        {EXPERIENCE.map((exp, idx) => (
          <li
            key={exp.id}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: '16px 48px',
              padding: 'clamp(28px, 3.4vw, 44px) clamp(20px, 4vw, 56px)',
              borderBottom: '1px solid var(--theme-line)'
            }}
          >
            {/* Company carries the row; dates and place sit under it */}
            <div style={{ flex: '1 1 320px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 3.6vw, 52px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em'
                }}
              >
                {exp.company}
              </div>
              <div
                style={{
                  marginTop: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--theme-muted)'
                }}
              >
                {/* Accent dot marks the current role; orange text would fail contrast on the light theme */}
                {idx === 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      marginRight: '8px',
                      borderRadius: '50%',
                      background: 'var(--theme-accent)'
                    }}
                  />
                )}
                <span style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
                  {exp.period}
                </span>
                {' · '}
                {exp.duration}
                <br />
                {exp.location}
              </div>
            </div>

            {/* Role & Description */}
            <div style={{ flex: '1 1 420px', maxWidth: '62ch' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '15px',
                  fontWeight: 500
                }}
              >
                {exp.role}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--theme-muted)',
                  marginTop: '2px'
                }}
              >
                {exp.tech}
              </div>
              <p
                style={{
                  margin: '12px 0 0',
                  fontSize: '15px',
                  lineHeight: 1.55,
                  color: 'var(--theme-muted)'
                }}
              >
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

    </section>
  );
}
