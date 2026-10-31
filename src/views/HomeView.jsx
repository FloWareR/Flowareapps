import React from 'react';
import ConcentricRings from '../components/ConcentricRings';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ExperienceList from '../components/ExperienceList';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import {
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  EDUCATION,
  CERTIFICATIONS,
  TOOLS
} from '../data/portfolioData';

const PAD_X = 'clamp(20px, 4vw, 56px)';

const sectionHeading = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 'clamp(24px, 2.6vw, 34px)',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
  color: 'var(--theme-fg)'
};

const ruledList = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  borderTop: '1px solid var(--theme-line)'
};

const ruledRow = {
  padding: '16px 0',
  borderBottom: '1px solid var(--theme-line)'
};

const metaText = {
  fontFamily: 'var(--font-mono)',
  fontSize: '12px',
  color: 'var(--theme-muted)'
};

const SOCIAL_LINKS = [
  { label: 'GitHub', href: PERSONAL_INFO.links.github },
  { label: 'LinkedIn', href: PERSONAL_INFO.links.linkedin },
  { label: 'itch.io', href: PERSONAL_INFO.links.itch },
  { label: 'Email', href: `mailto:${PERSONAL_INFO.email}` }
];

export default function HomeView({ onNavigate, onSelectProject }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ConcentricRings position="top-right" />

      {/* Screen-reader accessible title */}
      <h1 className="sr-only">
        {PERSONAL_INFO.heroPreTitle}
      </h1>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          position: 'relative',
          padding: `clamp(32px, 4.5vw, 64px) ${PAD_X} 0`
        }}
      >
        <div
          aria-hidden="true"
          style={{
            borderTop: '1px solid var(--theme-line)',
            paddingTop: 'clamp(28px, 4vw, 56px)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 'clamp(40px, 8.2vw, 128px)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--theme-fg)'
          }}
        >
          <div>Game Dev</div>
          <div style={{ textAlign: 'right' }}>&amp; Full-stack</div>
        </div>

        {/* Bio, actions & links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '28px 40px',
            marginTop: 'clamp(24px, 3vw, 40px)'
          }}
        >
          <div
            style={{
              flex: '1 1 320px',
              maxWidth: '540px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {PERSONAL_INFO.bio.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    margin: 0,
                    color: idx === 0 ? 'var(--theme-fg)' : 'var(--theme-muted)',
                    fontSize: idx === 0 ? '17px' : '15px',
                    lineHeight: 1.55
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Rafael_Flores_CV.pdf"
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
                  fontSize: '14px',
                  fontWeight: 600
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
                    strokeWidth: 1.8,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round'
                  }}
                >
                  <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
                </svg>
                Download CV
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '999px',
                  border: '1px solid var(--theme-line)',
                  color: 'var(--theme-fg)',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                See projects
              </button>
            </div>
          </div>

          <ul
            aria-label="Social links"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px'
            }}
          >
            {SOCIAL_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  style={{ color: 'var(--theme-fg)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PROJECTS CAROUSEL */}
      <FeaturedCarousel
        onSelectProject={onSelectProject}
        onShowAllProjects={() => onNavigate('projects')}
      />

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        aria-labelledby="about-title"
        style={{
          position: 'relative',
          padding: `0 ${PAD_X}`
        }}
      >
        <ConcentricRings position="about-right" />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'flex-start'
          }}
        >
          <div
            style={{
              flex: '1 1 520px',
              maxWidth: '680px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px'
            }}
          >
            <h2 id="about-title" style={sectionHeading}>About</h2>

            <p
              style={{
                margin: 0,
                fontSize: 'clamp(17px, 1.6vw, 20px)',
                lineHeight: 1.5,
                color: 'var(--theme-muted)'
              }}
            >
              I'm Rafael Flores, a{' '}
              <span style={{ color: 'var(--theme-fg)' }}>
                junior full-stack and game developer
              </span>{' '}
              based in Guadalajara, Mexico, with {PERSONAL_INFO.experienceTotal} of
              experience: Unity (C#) for mobile and PC, REST APIs in Go, enterprise
              applications with React, and cloud deployments on Google Cloud.
            </p>

            {/* Skills */}
            <dl style={ruledList}>
              {SKILL_CATEGORIES.map(cat => (
                <div
                  key={cat.id}
                  style={{
                    ...ruledRow,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px'
                  }}
                >
                  <dt
                    style={{
                      flex: '0 0 150px',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: cat.isAccent ? 'var(--theme-accent)' : 'var(--theme-fg)'
                    }}
                  >
                    {cat.title}
                  </dt>
                  <dd
                    style={{
                      flex: '1 1 260px',
                      margin: 0,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      lineHeight: 1.7,
                      color: 'var(--theme-fg)'
                    }}
                  >
                    {cat.skills}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo Column */}
          <figure
            style={{
              flex: '1 1 280px',
              maxWidth: '380px',
              margin: '0 0 0 auto'
            }}
          >
            <div
              className="pattern-striped"
              style={{
                aspectRatio: '4 / 5',
                borderRadius: '28px',
                border: '1px solid var(--theme-line)',
                overflow: 'hidden'
              }}
            >
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Rafael Flores"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.15)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </figure>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <ExperienceList />

      {/* EDUCATION & CERTIFICATIONS SECTION */}
      <section
        style={{
          position: 'relative',
          padding: `clamp(64px, 8vw, 112px) ${PAD_X} 0`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px 64px'
        }}
      >
        {/* Education */}
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 style={sectionHeading}>Education</h2>

          <ul style={ruledList}>
            {EDUCATION.map((edu, idx) => (
              <li
                key={idx}
                style={{
                  ...ruledRow,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  gap: '4px 16px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>{edu.degree}</span>
                  <span style={{ fontSize: '13px', color: 'var(--theme-muted)' }}>{edu.institution}</span>
                </div>
                <span style={{ ...metaText, whiteSpace: 'nowrap' }}>{edu.period}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 style={sectionHeading}>Certifications</h2>

          <ul style={ruledList}>
            {CERTIFICATIONS.map((cert, idx) => (
              <li
                key={idx}
                style={{
                  ...ruledRow,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '4px 16px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>{cert.name}</span>
                  <span style={{ fontSize: '13px', color: 'var(--theme-muted)' }}>
                    {cert.issuer}
                    {cert.expires && `, expires ${cert.expires}`}
                  </span>
                  {cert.credentialId && (
                    <span style={{ ...metaText, fontSize: '11px' }}>
                      ID {cert.credentialId}
                    </span>
                  )}
                </div>
                <span style={{ ...metaText, whiteSpace: 'nowrap' }}>
                  {cert.issued || cert.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section
        aria-labelledby="tools-title"
        style={{
          position: 'relative',
          padding: `clamp(64px, 8vw, 112px) ${PAD_X} 0`
        }}
      >
        <h2 id="tools-title" style={{ ...sectionHeading, marginBottom: '24px' }}>
          Tools I use daily
        </h2>

        <ul
          style={{
            ...ruledList,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            columnGap: '40px'
          }}
        >
          {TOOLS.map((tool) => (
            <li key={tool.id} style={ruledRow}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700 }}>
                {tool.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--theme-muted)', marginTop: '2px' }}>
                {tool.description}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer onScrollTop={() => scrollToSection('home')} />
    </div>
  );
}
