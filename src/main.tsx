import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';

import 'normalize.css';
import './index.css';

console.log(`team-app version = 1.0.0`);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </React.StrictMode>
);
