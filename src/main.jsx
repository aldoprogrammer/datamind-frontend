import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import './index.css';

import { AldoAlertProvider } from 'aldo-alert';

// Use createRoot from react-dom/client
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AldoAlertProvider>
      <App />
    </AldoAlertProvider>
  </React.StrictMode>
);
