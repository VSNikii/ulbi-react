import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { router} from './route/Routes.tsx';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundaries.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </RouterProvider>
  </React.StrictMode>,
);
