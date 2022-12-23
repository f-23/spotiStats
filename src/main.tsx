import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="w-screen h-screen">
    <Router />
  </div>,
);
