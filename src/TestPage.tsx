import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#0f172a',
      color: 'white',
      fontSize: '24px',
      fontFamily: 'sans-serif'
    }}>
      Minimal Test Page is Running
    </div>
  );
};

export default TestPage;
