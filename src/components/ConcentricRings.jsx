import React from 'react';

export default function ConcentricRings({ position = 'top-right' }) {
  if (position === 'top-right') {
    return (
      <>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-180px',
            right: '-160px',
            width: '560px',
            height: '560px',
            border: '1px solid var(--theme-ring)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-70px',
            right: '-70px',
            width: '220px',
            height: '220px',
            border: '1px solid var(--theme-ring)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      </>
    );
  }

  if (position === 'bottom-left') {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-260px',
          left: '-200px',
          width: '560px',
          height: '560px',
          border: '1px solid var(--theme-ring)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
    );
  }

  if (position === 'about-right') {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-220px',
          width: '640px',
          height: '640px',
          border: '1px solid var(--theme-ring)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
    );
  }

  return null;
}
