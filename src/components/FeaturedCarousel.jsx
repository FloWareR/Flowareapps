import React, { useState, useRef, useLayoutEffect } from 'react';
import { PROJECTS } from '../data/portfolioData';

export default function FeaturedCarousel({ onSelectProject, onShowAllProjects }) {
  const featuredProjects = PROJECTS.filter(p => p.featured).length >= 3
    ? PROJECTS.filter(p => p.featured)
    : PROJECTS;
  const n = featuredProjects.length;
  const [active, setActive] = useState(0);
  const cardEls = useRef(new Map());
  const lastLefts = useRef(null);

  // FLIP: remember where each card was, then slide it from there to its new slot
  const step = delta => {
    lastLefts.current = new Map(
      [...cardEls.current].map(([id, el]) => [id, el.getBoundingClientRect().left])
    );
    setActive(curr => (curr + delta + n) % n);
  };
  const prev = () => step(-1);
  const next = () => step(1);

  useLayoutEffect(() => {
    const from = lastLefts.current;
    lastLefts.current = null;
    if (!from || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    cardEls.current.forEach((el, id) => {
      el.getAnimations().forEach(a => a.cancel());
      if (!from.has(id)) {
        el.animate([{ opacity: 0 }, {}], { duration: 300, easing: 'ease-out' });
        return;
      }
      const dx = from.get(id) - el.getBoundingClientRect().left;
      if (dx) {
        el.animate([{ transform: `translateX(${dx}px)` }, { transform: 'none' }], {
          duration: 450,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        });
      }
    });
  }, [active]);

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
              key={item.id}
              ref={el => (el ? cardEls.current.set(item.id, el) : cardEls.current.delete(item.id))}
              className="carousel-card"
              onClick={() => {
                if (!isCenter) {
                  if (k === 0) prev();
                  if (k === 2) next();
                }
              }}
              style={{
                flex: isCenter ? '0 0 min(720px, 86%)' : '0 0 min(520px, 70%)',
                opacity: isCenter ? 1 : 0.32,
                background: isCenter ? 'var(--theme-card)' : 'var(--theme-bg)',
                cursor: isCenter ? 'default' : 'pointer'
              }}
            >
              {/* Media preview column */}
              <div className="carousel-card-media pattern-striped">
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
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
              </div>

              {/* Info column */}
              <div className="carousel-card-info">
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

                <p className="carousel-card-blurb">
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
                    aria-label={`See project: ${item.title}`}
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
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    See project
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
            padding: '0 24px',
            borderRadius: '999px',
            border: '1px solid var(--theme-line)',
            color: 'var(--theme-fg)',
            background: 'var(--theme-bg)',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          View all projects
        </button>
      </div>
    </section>
  );
}
