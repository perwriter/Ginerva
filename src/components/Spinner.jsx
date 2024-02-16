import React from 'react';
import Curve from '../curve.svg'; // Update the import path
import '../index.css'; // Import your CSS file

const Spinner = () => {
  return (
    <div className='h-screen bg-slate-550' style={{ position: 'relative' }}>
      <div
        style={{
          zIndex: 999,
          opacity: 1,
          animation: 'fadeOut 1s ease-in-out forwards',
          position: 'absolute',
          right: 180,
          top: 160,
          margin: '-42px 0 0 -42px',
          animationDelay: '1.5s',
          animationFillMode: 'forwards',
        }}
      >
        <div
          className="banner-container"
          style={{
            backgroundImage: `url(${Curve})`,
            width: '400px',
            height: '360px',
            backgroundSize: 'contain',
            animation: 'rotate 30s linear infinite',
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default Spinner;
