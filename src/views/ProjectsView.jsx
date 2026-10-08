import React, { useState } from 'react';
import ConcentricRings from '../components/ConcentricRings';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { PROJECTS, PROJECT_FILTERS } from '../data/portfolioData';

export default function ProjectsView({ onNavigate, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS.filter(p => {
    if (activeFilter === 'all') return true;
    return p.type === activeFilter;
  });

  return (
    <div className="animate-fade-in">
      <ConcentricRings position="top-right" />

      {/* HEADER SECTION */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(48px, 6vw, 88px) clamp(20px, 4vw, 56px) 0'
        }}
      >
        <button
          type="button"
          onClick={() => onNavigate('home')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            minHeight: '44px',
            color: 'var(--theme-muted)',
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--theme-fg)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--theme-muted)')}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            style={{
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 1.6,
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            }}
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Back to home
        </button>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px 48px',
            marginTop: '12px'
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 'clamp(44px, 8.2vw, 128px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--theme-fg)'
            }}
          >
            Projects
          </h1>
          <p
            style={{
              margin: 0,
              flex: '0 1 400px',
              color: 'var(--theme-muted)',
              fontSize: '16px',
              lineHeight: 1.55
            }}
          >
            Games,{' '}
            <strong style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
              game jams
            </strong>{' '}
            and{' '}
            <strong style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
              web products
            </strong>{' '}
            I've built from 2022 to present.
          </p>
        </div>

        {/* Filter pills and counter */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px 24px',
            marginTop: 'clamp(40px, 5vw, 64px)',
            paddingTop: '24px',
            borderTop: '1px solid var(--theme-line)'
          }}
        >
          <div
            role="group"
            aria-label="Filter projects"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
          >
            {PROJECT_FILTERS.map(f => {
              const isSelected = activeFilter === f.id;
              const count = f.id === 'all'
                ? PROJECTS.length
                : PROJECTS.filter(p => p.type === f.id).length;
              const countDisplay = count < 10 ? `0${count}` : `${count}`;

              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  aria-pressed={isSelected}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    height: '44px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    border: `1px solid ${isSelected ? 'var(--theme-inv)' : 'var(--theme-line)'}`,
                    background: isSelected ? 'var(--theme-inv)' : 'transparent',
                    color: isSelected ? 'var(--theme-inv-fg)' : 'var(--theme-fg)',
                    fontSize: '14px',
                    fontWeight: isSelected ? 500 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {f.label}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      opacity: 0.7
                    }}
                  >
                    {countDisplay}
                  </span>
                </button>
              );
            })}
          </div>

          <span
            aria-live="polite"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--theme-muted)'
            }}
          >
            {`Showing ${filteredProjects.length} of ${PROJECTS.length}`}
          </span>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section
        aria-label="Projects list"
        style={{
          padding: '32px clamp(20px, 4vw, 56px) clamp(80px, 10vw, 128px)'
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '40px 24px'
          }}
        >
          {filteredProjects.map(p => (
            <li key={p.id}>
              <div
                onClick={() => onSelectProject(p)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  color: 'var(--theme-fg)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Visual Thumbnail */}
                <div
                  className="pattern-striped"
                  role="img"
                  aria-label={`Image of ${p.title}`}
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    borderRadius: '24px',
                    border: '1px solid var(--theme-line)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '16px',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.85
                      }}
                    />
                  )}

                  <span
                    style={{
                      position: 'relative',
                      fontSize: '11px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: '#141414',
                      background: 'var(--theme-accent)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontWeight: 600,
                      zIndex: 2
                    }}
                  >
                    {p.cat}
                  </span>
                </div>

                {/* Info & Action button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 500 }}>{p.title}</div>
                    <div style={{ fontSize: '14px', color: 'var(--theme-muted)' }}>{p.kind}</div>
                  </div>

                  <span
                    aria-hidden="true"
                    style={{
                      flex: '0 0 auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '1px solid var(--theme-line)',
                      color: 'var(--theme-fg)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease'
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      style={{
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: 1.6,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                    >
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer onScrollTop={() => onNavigate('home')} />
    </div>
  );
}
