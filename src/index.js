import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'
import { ThemeProvider } from '@emotion/react'
import { portfolioTheme } from './styles/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={portfolioTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)