import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HomeView from './views/HomeView';
import ProjectsView from './views/ProjectsView';
import ProjectDetailView from './views/ProjectDetailView';
import { PROJECTS } from './data/portfolioData';

function PortfolioApp() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'projects' | 'project'
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        const found = PROJECTS.find(p => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          setCurrentView('project');
        } else {
          setCurrentView('home');
        }
      } else if (hash === '#/projects') {
        setCurrentView('projects');
      } else {
        setCurrentView('home');
        if (hash && hash !== '#home' && hash !== '#') {
          setTimeout(() => {
            const el = document.getElementById(hash.replace('#', ''));
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view, hashTarget) => {
    setCurrentView(view);
    if (view === 'projects') {
      window.location.hash = '#/projects';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'home') {
      if (hashTarget) {
        window.location.hash = hashTarget;
        const el = document.getElementById(hashTarget.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentView('project');
    window.location.hash = `#/project/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '100vh',
        background: 'var(--theme-page)',
        padding: 'clamp(8px, 2.2vw, 40px)',
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        color: 'var(--theme-fg)',
        fontSize: '16px',
        lineHeight: 1.5,
        transition: 'background-color 0.25s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          background: 'var(--theme-bg)',
          border: '1px solid var(--theme-line)',
          borderRadius: 'clamp(20px, 3vw, 40px)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.25s ease, border-color 0.25s ease'
        }}
      >
        <Header currentView={currentView} onNavigate={handleNavigate} />

        <main id="main-content">
          {currentView === 'home' && (
            <HomeView
              onNavigate={handleNavigate}
              onSelectProject={handleSelectProject}
            />
          )}

          {currentView === 'projects' && (
            <ProjectsView
              onNavigate={handleNavigate}
              onSelectProject={handleSelectProject}
            />
          )}

          {currentView === 'project' && (
            <ProjectDetailView
              project={selectedProject}
              onNavigate={handleNavigate}
              onSelectProject={handleSelectProject}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
