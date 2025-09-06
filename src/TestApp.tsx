import React from 'react';

const TestApp: React.FC = () => {
  console.log('TestApp rendering...');
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1e3a8a, #7c3aed)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>🎉 Portfolio is Working!</h1>
        <p>If you can see this, the React app is loading correctly.</p>
        <p>Port: 3000</p>
      </div>
    </div>
  );
};

export default TestApp;
