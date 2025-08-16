import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const LightModeTest: React.FC = () => {
  const { theme, isLight } = useTheme();

  return (
    <div className="fixed top-20 right-4 z-50 p-4 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg">
      <h3 className="text-sm font-bold text-gray-800 mb-2">Theme Test</h3>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Current:</span>
          <span className={`px-2 py-1 rounded text-white ${
            isLight ? 'bg-blue-500' : 'bg-gray-800'
          }`}>
            {theme}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Mode:</span>
          <span className={`px-2 py-1 rounded text-white ${
            isLight ? 'bg-green-500' : 'bg-purple-500'
          }`}>
            {isLight ? 'Light' : 'Dark'}
          </span>
        </div>
        <div className="text-xs text-gray-500">
          CSS Variables:
        </div>
        <div className="text-xs space-y-1">
          <div>BG: <span className="text-blue-600">{getComputedStyle(document.documentElement).getPropertyValue('--bg-primary')}</span></div>
          <div>Text: <span className="text-green-600">{getComputedStyle(document.documentElement).getPropertyValue('--text-primary')}</span></div>
        </div>
      </div>
    </div>
  );
};

export default LightModeTest; 