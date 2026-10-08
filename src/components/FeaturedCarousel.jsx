import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';

export default function FeaturedCarousel({ onSelectProject, onShowAllProjects }) {
  const featuredProjects = PROJECTS.filter(p => p.featured).length >= 3
    ? PROJECTS.filter(p => p.featured)
    : PROJECTS;
  const n = featuredProjects.length;
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive(curr => (curr - 1 + n) % n);
  };

  const next = () => {
    setActive(curr => (curr + 1) % n);
  };

  // 3-card sliding view: [prev, current, next]
  const order = [(active - 1 + n) % n, active, (active + 1) % n];

  return (
    <section
      id="projects"
      aria-label="Featured projects"
      style={{
        position: 'relative',
        marginTop: 'clamp(32px, 4vw, 48px)',
        padding: '0 0 clamp(64px, 8vw, 104px)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '16px',
          overflow: 'hidden',
          padding: '4px 0',
          position: 'relative'
        }}
      >
        {order.map((projIndex, k) => {
          const item = featuredProjects[projIndex];
          const isCenter = k === 1;

          return (
            <article
              key={`${item.id}-${k}`}
              onClick={() => {
                if (!isCenter) {
                  if (k === 0) prev();
                  if (k === 2) next();
                }
              }}
              style={{
                flex: isCenter ? '0 0 min(720px, 86%)' : '0 0 min(520px, 70%)',
                opacity: isCenter ? 1 : 0.32,
                display: 'flex',
                flexWrap: 'wrap',
                border: '1px solid var(--theme-line)',
                borderRadius: '24px',
                overflow: 'hidden',
                background: isCenter ? 'var(--theme-card)' : 'var(--theme-bg)',
                minHeight: '220px',
                cursor: isCenter ? 'default' : 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isCenter ? '0 12px 32px rgba(0,0,0,0.15)' : 'none'
              }}
            >
              {/* Media preview column */}
              <div
                className="pattern-striped"
                style={{
                  flex: '1 1 220px',
                  minHeight: '200px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                  boxSizing: 'border-box',
                  overflow: 'hidden'
                }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
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
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--theme-muted)',
                    background: 'var(--theme-bg)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: '1px solid var(--theme-line)',
                    zIndex: 2
                  }}
                >
                  {item.coverText}
                </span>
              </div>

              {/* Info column */}
              <div
                style={{
                  flex: '1 1 240px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxSizing: 'border-box'
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: '11px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#141414',
                    background: 'var(--theme-accent)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontWeight: 600
                  }}
                >
                  {item.badge}
                </span>

                <h2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: 1.25,
                    color: 'var(--theme-fg)'
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: 'var(--theme-muted)',
                    fontSize: '14px',
                    lineHeight: 1.5
                  }}
                >
                  {item.blurb}
                </p>

                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--theme-fg)'
                  }}
                >
                  {item.stack}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: 'auto',
                    paddingTop: '8px'
                  }}
                >
                  <button
                    type="button"
                    tabIndex={isCenter ? 0 : -1}
                    onClick={e => {
                      e.stopPropagation();
                      onSelectProject(item);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '44px',
                      padding: '0 28px',
                      borderRadius: '999px',
                      background: 'var(--theme-inv)',
                      color: 'var(--theme-inv-fg)',
                      fontSize: '13px',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, opacity 0.2s ease'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    View case study
                  </button>

                  <button
                    type="button"
                    tabIndex={isCenter ? 0 : -1}
                    aria-label={`Open case study ${item.title}`}
                    onClick={e => {
                      e.stopPropagation();
                      onSelectProject(item);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--theme-inv)',
                      color: 'var(--theme-inv-fg)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, opacity 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.opacity = '0.9';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
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
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '24px'
        }}
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: '1px solid var(--theme-line)',
            background: 'var(--theme-bg)',
            color: 'var(--theme-fg)',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease, transform 0.2s ease'
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
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
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
        </button>

        <span
          aria-live="polite"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--theme-muted)',
            minWidth: '72px',
            textAlign: 'center'
          }}
        >
          {`0${active + 1} / 0${n}`}
        </span>

        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: '1px solid var(--theme-line)',
            background: 'var(--theme-bg)',
            color: 'var(--theme-fg)',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease, transform 0.2s ease'
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
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
            style={{
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 1.6,
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            }}
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Button to View All Projects */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '28px'
        }}
      >
        <button
          type="button"
          onClick={onShowAllProjects}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            height: '48px',
            padding: '0 8px 0 24px',
            borderRadius: '999px',
            border: '1px solid var(--theme-line)',
            color: 'var(--theme-fg)',
            background: 'var(--theme-bg)',
            fontSize: '14px',
            fontStyle: 'italic',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease, background-color 0.2s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--theme-accent)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--theme-line)';
          }}
        >
          View all projects
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'var(--theme-accent)',
              color: '#141414'
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              style={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 1.8,
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              }}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
