import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>🚀 Nicolette Mashaba</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#06b6d4' }}>AI Engineer Portfolio</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Portfolio is loading successfully!</p>
      <button 
        onClick={() => alert('React is working perfectly!')}
        style={{
          background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '8px',
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}
      >
        Test Button
      </button>
    </div>
  );
};

export default App;
