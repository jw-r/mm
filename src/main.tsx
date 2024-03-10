import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GoogleTagManager from './components/GoogleTagManager.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleTagManager gtmId={import.meta.env.VITE_GTM_ID} />
    <App />
  </React.StrictMode>,
);
