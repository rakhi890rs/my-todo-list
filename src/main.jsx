import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#e0e0e0' }}>
      <App />
    </div>
  </StrictMode>
);
