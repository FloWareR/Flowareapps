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

export default function HomeView({ onNavigate, onSelectProject }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
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
          padding: 'clamp(32px, 4.5vw, 64px) clamp(20px, 4vw, 56px) 0'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px 32px',
            borderTop: '1px solid var(--theme-line)',
            paddingTop: 'clamp(28px, 4vw, 56px)'
          }}
        >
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 'clamp(40px, 8.2vw, 128px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--theme-fg)'
            }}
          >
            Game Dev
          </div>

          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 'clamp(40px, 8.2vw, 128px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginLeft: 'auto',
              textAlign: 'right',
              color: 'var(--theme-fg)'
            }}
          >
            &amp; Full-stack
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '200px',
                height: '48px',
                padding: '0 28px',
                borderRadius: '999px',
                background: 'var(--theme-inv)',
                color: 'var(--theme-inv-fg)',
                fontSize: '15px',
                fontStyle: 'italic',
                fontWeight: 500,
                cursor: 'pointer',
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
              View projects
            </button>

            <button
              type="button"
              aria-label="Go to projects"
              onClick={() => scrollToSection('projects')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--theme-inv)',
                color: 'var(--theme-inv-fg)',
                cursor: 'pointer',
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

        {/* Bio summary & Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap-reverse',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '28px 40px',
            marginTop: 'clamp(12px, 2vw, 24px)'
          }}
        >
          <div
            style={{
              flex: '1 1 320px',
              maxWidth: '520px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {PERSONAL_INFO.bio.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    margin: 0,
                    color: 'var(--theme-muted)',
                    fontSize: idx === 0 ? '16px' : '15px',
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
                onClick={() => scrollToSection('contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '999px',
                  border: '1px solid var(--theme-line)',
                  color: 'var(--theme-fg)',
                  fontSize: '14px',
                  cursor: 'pointer',
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
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Social networks pills */}
        <ul
          aria-label="Social links"
          style={{
            listStyle: 'none',
            margin: 'clamp(40px, 5vw, 64px) 0 0',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <li>
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '44px',
                padding: '0 20px',
                border: '1px solid var(--theme-line)',
                borderRadius: '999px',
                color: 'var(--theme-fg)',
                fontSize: '13px',
                fontStyle: 'italic',
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
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
              </svg>
              GitHub
            </a>
          </li>

          <li>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '44px',
                padding: '0 20px',
                border: '1px solid var(--theme-line)',
                borderRadius: '999px',
                color: 'var(--theme-fg)',
                fontSize: '13px',
                fontStyle: 'italic',
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
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M4 8h16v11H4zM9 8V5h6v3" />
              </svg>
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href={PERSONAL_INFO.links.itch}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '44px',
                padding: '0 20px',
                border: '1px solid var(--theme-line)',
                borderRadius: '999px',
                color: 'var(--theme-fg)',
                fontSize: '13px',
                fontStyle: 'italic',
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
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M6 9h12a3 3 0 0 1 3 3v2a3 3 0 0 1-5.2 2L14 14h-4l-1.8 2A3 3 0 0 1 3 14v-2a3 3 0 0 1 3-3zM8 11v2M7 12h2M16 12h.01" />
              </svg>
              itch.io
            </a>
          </li>



          <li>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '44px',
                padding: '0 20px',
                border: '1px solid var(--theme-line)',
                borderRadius: '999px',
                color: 'var(--theme-fg)',
                fontSize: '13px',
                fontStyle: 'italic',
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
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M3 6h18v12H3zM3 7l9 6 9-6" />
              </svg>
              Email
            </a>
          </li>
        </ul>
      </section>

      {/* FEATURED PROJECTS CAROUSEL */}
      <FeaturedCarousel
        onSelectProject={onSelectProject}
        onShowAllProjects={() => onNavigate('projects')}
      />

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        style={{
          position: 'relative',
          padding: '0 clamp(20px, 4vw, 56px)'
        }}
      >
        <ConcentricRings position="about-right" />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px 40px',
            justifyContent: 'space-between'
          }}
        >
          <h2
            style={{
              margin: 0,
              flex: '0 1 380px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              fontSize: '13px',
              color: 'var(--theme-fg)'
            }}
          >
            ... /About me ...
          </h2>
          <p
            style={{
              margin: 0,
              flex: '1 1 360px',
              maxWidth: '520px',
              fontSize: 'clamp(17px, 1.6vw, 20px)',
              lineHeight: 1.45,
              color: 'var(--theme-muted)'
            }}
          >
            Hi! I'm Rafael Flores,{' '}
            <strong style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
              Jr. Fullstack &amp; Game Developer
            </strong>{' '}
            based in Guadalajara, Mexico.{' '}
            <strong style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
              {PERSONAL_INFO.experienceTotal}
            </strong>{' '}
            of experience: Unity (C#) for mobile and PC, REST APIs in Go, enterprise applications with React, and cloud deployments on Google Cloud (GCP).
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            marginTop: 'clamp(48px, 6vw, 88px)',
            alignItems: 'flex-start'
          }}
        >
          {/* Skill Blocks */}
          <div
            style={{
              flex: '1 1 520px',
              maxWidth: '640px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {/* Game Dev card - Accent */}
            <div
              style={{
                background: 'var(--theme-accent)',
                color: '#141414',
                borderRadius: '24px',
                padding: '20px 22px',
                boxShadow: '0 8px 24px rgba(255,106,26,0.15)'
              }}
            >
              <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 600 }}>Game Dev</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.8 }}>
                {SKILL_CATEGORIES[0].skills}
              </p>
            </div>

            {/* Front-end */}
            <div
              style={{
                border: '1px solid var(--theme-line)',
                borderRadius: '24px',
                padding: '20px 22px'
              }}
            >
              <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 500 }}>Front-end</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.8, color: 'var(--theme-fg)' }}>
                {SKILL_CATEGORIES[1].skills}
              </p>
            </div>

            {/* Back-end */}
            <div
              style={{
                border: '1px solid var(--theme-line)',
                borderRadius: '24px',
                padding: '20px 22px'
              }}
            >
              <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 500 }}>Back-end</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.8, color: 'var(--theme-fg)' }}>
                {SKILL_CATEGORIES[2].skills}
              </p>
            </div>

            {/* DevOps & tools + quick circles */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'stretch'
              }}
            >
              <div
                style={{
                  flex: '1 1 260px',
                  border: '1px solid var(--theme-line)',
                  borderRadius: '24px',
                  padding: '20px 22px'
                }}
              >
                <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 500 }}>DevOps &amp; Tools</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.8, color: 'var(--theme-fg)' }}>
                  {SKILL_CATEGORIES[3].skills}
                </p>
              </div>

              {/* Quick action badges */}
              <div
                style={{
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 8px'
                }}
              >
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '1px solid var(--theme-line)',
                    color: 'var(--theme-fg)',
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
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                  </svg>
                </a>

                <button
                  type="button"
                  aria-label="View projects"
                  onClick={() => onNavigate('projects')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '52px',
                    marginLeft: '-12px',
                    borderRadius: '50%',
                    background: 'var(--theme-inv)',
                    color: 'var(--theme-inv-fg)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Photo Column */}
          <figure
            style={{
              flex: '1 1 300px',
              maxWidth: '400px',
              margin: '0 0 0 auto'
            }}
          >
            <div
              className="pattern-striped"
              style={{
                aspectRatio: '4 / 5',
                borderRadius: '28px',
                border: '1px solid var(--theme-line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Rafael Flores"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.15)',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'grayscale(100%) contrast(1.15)';
                  e.currentTarget.style.transform = 'scale(1)';
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
        aria-label="Education &amp; Certifications"
        style={{
          position: 'relative',
          padding: 'clamp(64px, 8vw, 112px) clamp(20px, 4vw, 56px) 0',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px 64px'
        }}
      >
        {/* Education */}
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '13px', color: 'var(--theme-fg)' }}>
            ... /Education ...
          </h2>

          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid var(--theme-line)',
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '17px', fontWeight: 500 }}>{edu.degree}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--theme-muted)' }}>
                  {edu.period}
                </span>
              </div>
              <span style={{ fontSize: '14px', color: 'var(--theme-muted)' }}>{edu.institution}</span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '13px', color: 'var(--theme-fg)' }}>
            ... /Certifications ...
          </h2>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--theme-line)' }}>
            {CERTIFICATIONS.map((cert, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '6px 16px',
                  padding: '16px 0',
                  borderBottom: '1px solid var(--theme-line)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>{cert.name}</span>
                  {cert.credentialId && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--theme-muted)' }}>
                      Credential ID: {cert.credentialId}
                    </span>
                  )}
                  {cert.expires && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--theme-muted)' }}>
                      Expires: {cert.expires}
                    </span>
                  )}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--theme-muted)', whiteSpace: 'nowrap' }}>
                  {cert.issuer} · {cert.issued || cert.year}
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
          padding: 'clamp(64px, 8vw, 112px) clamp(20px, 4vw, 56px) 0'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '12px 32px',
            marginBottom: '24px'
          }}
        >
          <h2
            id="tools-title"
            style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              fontSize: '13px',
              color: 'var(--theme-fg)'
            }}
          >
            ... /Tools ...
          </h2>
          <span style={{ fontSize: '13px', color: 'var(--theme-muted)' }}>
            What I open{' '}
            <strong style={{ color: 'var(--theme-fg)', fontWeight: 500 }}>
              every day
            </strong>
          </span>
        </div>

        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '16px'
          }}
        >
          {TOOLS.map((tool) => (
            <li
              key={tool.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: '1px solid var(--theme-line)',
                borderRadius: '20px',
                padding: '16px'
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: '0 0 auto',
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--theme-inv)',
                  color: 'var(--theme-inv-fg)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  fontWeight: 700
                }}
              >
                {tool.badge}
              </span>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500 }}>{tool.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--theme-muted)' }}>{tool.description}</div>
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
