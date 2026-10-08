import React, { useState } from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

export default function ExperienceList() {
  const [activeRow, setActiveRow] = useState(0);

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
        {EXPERIENCE.map((exp, index) => {
          const isActive = activeRow === index;
          return (
            <li
              key={exp.id}
              onMouseEnter={() => setActiveRow(index)}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px 32px',
                padding: '22px clamp(20px, 4vw, 56px)',
                borderBottom: '1px solid var(--theme-line)',
                background: isActive ? 'var(--theme-inv)' : 'transparent',
                color: isActive ? 'var(--theme-inv-fg)' : 'var(--theme-fg)',
                cursor: 'pointer',
                transition: 'background-color 0.25s ease, color 0.25s ease'
              }}
            >
              {/* Period */}
              <div style={{ flex: '0 0 140px' }}>
                <div style={{ fontSize: '15px', fontWeight: 500 }}>{exp.period}</div>
                <div
                  style={{
                    fontSize: '11px',
                    color: isActive ? 'var(--theme-inv-fg)' : 'var(--theme-muted)',
                    opacity: isActive ? 0.8 : 1
                  }}
                >
                  {exp.duration}
                </div>
              </div>

              {/* Company & Initials */}
              <div
                style={{
                  flex: '1 1 240px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: '0 0 auto',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    border: `1px solid ${isActive ? 'var(--theme-inv-fg)' : 'var(--theme-line)'}`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700
                  }}
                >
                  {exp.initials}
                </span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 500 }}>{exp.company}</div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: isActive ? 'var(--theme-inv-fg)' : 'var(--theme-muted)',
                      opacity: isActive ? 0.8 : 1
                    }}
                  >
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Role & Description */}
              <div style={{ flex: '1 1 380px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  {exp.role}{' '}
                  <span
                    style={{
                      color: isActive ? 'var(--theme-inv-fg)' : 'var(--theme-muted)',
                      opacity: isActive ? 0.6 : 1
                    }}
                  >
                    |
                  </span>{' '}
                  {exp.tech}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: isActive ? 'var(--theme-inv-fg)' : 'var(--theme-muted)',
                    marginTop: '4px',
                    lineHeight: 1.45,
                    opacity: isActive ? 0.9 : 1
                  }}
                >
                  {exp.description}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p
        style={{
          margin: 0,
          padding: '24px clamp(20px, 4vw, 56px) 0',
          textAlign: 'right',
          fontSize: '14px',
          color: 'var(--theme-muted)'
        }}
      >
        Total experience
        <br />
        <em
          style={{
            color: 'var(--theme-fg)',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600
          }}
        >
          {PERSONAL_INFO.experienceTotal}
        </em>
      </p>
    </section>
  );
}
