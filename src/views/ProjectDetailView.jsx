import React from 'react';
import ConcentricRings from '../components/ConcentricRings';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectDetailView({ project, onNavigate, onSelectProject }) {
  // If no project selected, fallback to the first one (Argo In Delivery Protocol)
  const currentProject = project || PROJECTS[0];
  const details = currentProject.details || {};

  // Find next project in the list
  const currentIndex = PROJECTS.findIndex(p => p.id === currentProject.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

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
        <p
          style={{
            margin: '0 0 20px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            fontSize: '13px',
            color: 'var(--theme-fg)'
          }}
        >
          ... /{currentProject.projectNumber || 'Project'} ...
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px 48px'
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 'clamp(40px, 7.4vw, 116px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              maxWidth: '14ch',
              color: 'var(--theme-fg)'
            }}
          >
            {currentProject.title}
          </h1>

          <p
            style={{
              margin: 0,
              flex: '0 1 400px',
              color: 'var(--theme-muted)',
              fontSize: '17px',
              lineHeight: 1.55
            }}
          >
            {details.intro || currentProject.blurb}
          </p>
        </div>

        {/* METADATA GRID */}
        <dl
          style={{
            margin: 'clamp(40px, 5vw, 64px) 0 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            borderTop: '1px solid var(--theme-line)',
            borderBottom: '1px solid var(--theme-line)'
          }}
        >
          <div style={{ padding: '20px 20px 20px 0' }}>
            <dt style={{ fontSize: '12px', color: 'var(--theme-muted)' }}>Role</dt>
            <dd style={{ margin: '4px 0 0', fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--theme-fg)' }}>
              {details.role || 'Game Developer'}
            </dd>
          </div>

          <div style={{ padding: '20px 20px 20px 0' }}>
            <dt style={{ fontSize: '12px', color: 'var(--theme-muted)' }}>Engine / Stack</dt>
            <dd style={{ margin: '4px 0 0', fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--theme-fg)' }}>
              {details.engine || currentProject.stack}
            </dd>
          </div>

          <div style={{ padding: '20px 20px 20px 0' }}>
            <dt style={{ fontSize: '12px', color: 'var(--theme-muted)' }}>Duration</dt>
            <dd style={{ margin: '4px 0 0', fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--theme-fg)' }}>
              {details.duration || '3 months'}
            </dd>
          </div>

          <div style={{ padding: '20px 20px 20px 0' }}>
            <dt style={{ fontSize: '12px', color: 'var(--theme-muted)' }}>Platform</dt>
            <dd style={{ margin: '4px 0 0', fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--theme-fg)' }}>
              {details.platform || 'PC · Web'}
            </dd>
          </div>
        </dl>
      </section>

      {/* MAIN SHOWCASE / MEDIA SECTION */}
      <section
        aria-label="Main showcase"
        style={{
          padding: 'clamp(32px, 4vw, 56px) clamp(20px, 4vw, 56px) 0'
        }}
      >
        <div
          className="pattern-striped"
          role="img"
          aria-label={`Main preview of ${currentProject.title}`}
          style={{
            aspectRatio: '16 / 9',
            borderRadius: '28px',
            border: '1px solid var(--theme-line)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '24px',
            boxSizing: 'border-box',
            gap: '12px',
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {currentProject.image && (
            <img
              src={currentProject.image}
              alt={currentProject.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.95
              }}
            />
          )}

          <span
            style={{
              position: 'relative',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--theme-muted)',
              background: 'var(--theme-bg)',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--theme-line)',
              zIndex: 2
            }}
          >
            {currentProject.coverText || '[GAMEPLAY · 16:9 · DEMO OR VIDEO]'}
          </span>

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {details.demoUrl && (
              <a
                href={details.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '999px',
                  background: 'var(--theme-accent)',
                  color: '#141414',
                  textDecoration: 'none',
                  fontSize: '14px',
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
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'currentColor', stroke: 'none' }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
                {details.demoText || 'Play demo on itch.io'}
              </a>
            )}

            {details.videoUrl && (
              <a
                href={details.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '999px',
                  background: 'var(--theme-bg)',
                  border: '1px solid var(--theme-line)',
                  color: 'var(--theme-fg)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'border-color 0.2s ease, transform 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--theme-fg)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--theme-line)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'currentColor' }}>
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                Watch trailer
              </a>
            )}

            {details.sourceUrl && (
              <a
                href={details.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '999px',
                  background: 'var(--theme-bg)',
                  border: '1px solid var(--theme-line)',
                  color: 'var(--theme-fg)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--theme-fg)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--theme-line)')}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                </svg>
                {details.sourceText || 'View code'}
              </a>
            )}

            {details.clientSourceUrl && (
              <a
                href={details.clientSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '999px',
                  background: 'var(--theme-bg)',
                  border: '1px solid var(--theme-line)',
                  color: 'var(--theme-fg)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--theme-fg)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--theme-line)')}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                </svg>
                {details.clientSourceText || 'Frontend code'}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* THE CHALLENGE SECTION */}
      {details.challenge && (
        <section
          style={{
            padding: 'clamp(64px, 8vw, 104px) clamp(20px, 4vw, 56px) 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px 64px'
          }}
        >
          <h2
            style={{
              margin: 0,
              flex: '0 1 300px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              fontSize: '13px',
              color: 'var(--theme-fg)'
            }}
          >
            ... /The challenge ...
          </h2>
          <div
            style={{
              flex: '1 1 520px',
              maxWidth: '760px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(18px, 1.8vw, 22px)',
                lineHeight: 1.45,
                color: 'var(--theme-muted)'
              }}
            >
              {details.challenge}
            </p>
            {details.context && (
              <p style={{ margin: 0, color: 'var(--theme-muted)', lineHeight: 1.6 }}>
                {details.context}
              </p>
            )}
          </div>
        </section>
      )}

      {/* WHAT I BUILT SECTION */}
      {details.features && details.features.length > 0 && (
        <section
          style={{
            padding: 'clamp(56px, 7vw, 88px) clamp(20px, 4vw, 56px) 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px 64px'
          }}
        >
          <h2
            style={{
              margin: 0,
              flex: '0 1 300px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              fontSize: '13px',
              color: 'var(--theme-fg)'
            }}
          >
            ... /What I built ...
          </h2>

          <ol
            style={{
              flex: '1 1 520px',
              maxWidth: '760px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            {details.features.map((feat, idx) => (
              <li
                key={idx}
                style={{
                  border: '1px solid var(--theme-line)',
                  borderRadius: '24px',
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  transition: 'border-color 0.2s ease, transform 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--theme-accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--theme-line)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--theme-accent)',
                    fontWeight: 600
                  }}
                >
                  {feat.num}
                </span>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 500, color: 'var(--theme-fg)' }}>
                  {feat.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--theme-muted)', lineHeight: 1.5 }}>
                  {feat.desc}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* GALLERY SECTION */}
      {details.gallery && details.gallery.length > 0 && (
        <section
          aria-label="Gallery"
          style={{
            padding: 'clamp(56px, 7vw, 88px) clamp(20px, 4vw, 56px) 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}
        >
          {details.gallery.map((img, idx) => (
            <div
              key={idx}
              className="pattern-striped"
              role="img"
              aria-label={img.title || `Screenshot ${idx + 1}`}
              style={{
                aspectRatio: '4 / 3',
                borderRadius: '24px',
                border: '1px solid var(--theme-line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                padding: '16px',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {img.src && (
                <img
                  src={img.src}
                  alt={img.title || `Screenshot ${idx + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.92,
                    transition: 'transform 0.3s ease, opacity 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.opacity = '0.92';
                    e.currentTarget.style.transform = 'scale(1)';
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
                {img.label}
              </span>
            </div>
          ))}
        </section>
      )}

      {/* RESULTS SECTION */}
      {details.results && details.results.length > 0 && (
        <section
          style={{
            padding: 'clamp(56px, 7vw, 88px) clamp(20px, 4vw, 56px) 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px 64px'
          }}
        >
          <h2
            style={{
              margin: 0,
              flex: '0 1 300px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              fontSize: '13px',
              color: 'var(--theme-fg)'
            }}
          >
            ... /Results ...
          </h2>

          <div
            style={{
              flex: '1 1 520px',
              maxWidth: '760px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}
          >
            {details.results.map((res, idx) => (
              <div
                key={idx}
                style={{
                  background: res.isAccent ? 'var(--theme-accent)' : 'var(--theme-card)',
                  color: res.isAccent ? '#141414' : 'var(--theme-fg)',
                  border: res.isAccent ? 'none' : '1px solid var(--theme-line)',
                  borderRadius: '24px',
                  padding: '22px'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '32px',
                    fontWeight: 700
                  }}
                >
                  {res.metric}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: res.isAccent ? '#141414' : 'var(--theme-muted)',
                    marginTop: '4px'
                  }}
                >
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TECH STACK SECTION */}
      {details.stackTags && details.stackTags.length > 0 && (
        <section
          aria-label="Tech Stack"
          style={{
            padding: 'clamp(56px, 7vw, 88px) clamp(20px, 4vw, 56px) 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px 64px',
            alignItems: 'center'
          }}
        >
          <h2
            style={{
              margin: 0,
              flex: '0 1 300px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              fontSize: '13px',
              color: 'var(--theme-fg)'
            }}
          >
            ... /Tech Stack ...
          </h2>

          <ul
            style={{
              flex: '1 1 520px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            {details.stackTags.map((tag, idx) => (
              <li
                key={idx}
                style={{
                  padding: '10px 18px',
                  border: '1px solid var(--theme-line)',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--theme-fg)'
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* NEXT PROJECT BANNER */}
      {nextProject && (
        <div
          onClick={() => {
            onSelectProject(nextProject);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginTop: 'clamp(80px, 10vw, 120px)',
            padding: 'clamp(32px, 4vw, 48px) clamp(20px, 4vw, 56px)',
            borderTop: '1px solid var(--theme-line)',
            color: 'var(--theme-fg)',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--theme-card)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '13px', color: 'var(--theme-muted)' }}>Next project</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 4.4vw, 64px)',
                lineHeight: 1.05
              }}
            >
              {nextProject.title}
            </span>
          </span>

          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--theme-fg)',
              color: 'var(--theme-bg)',
              transition: 'transform 0.2s ease'
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
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
          </span>
        </div>
      )}

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer onScrollTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
