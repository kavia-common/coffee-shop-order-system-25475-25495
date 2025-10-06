import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Router v6
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import ProductFeedback from './pages/ProductFeedback';
import Color from './pages/Color';
import License from './pages/License';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="App-header">
                  <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                  </button>

                  {/* Simple nav to make screens discoverable */}
                  <nav style={{ position: 'absolute', top: 20, left: 20, display: 'flex', gap: 12 }}>
                    <Link className="App-link" to="/product-feedback">Product Feedback</Link>
                    <Link className="App-link" to="/color">Color</Link>
                    <Link className="App-link" to="/license">License</Link>
                  </nav>

                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <p>
                    Current theme: <strong>{theme}</strong>
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </>
            }
          />
          <Route
            path="/product-feedback"
            element={
              // Full-bleed container without the default header
              <div
                style={{
                  minHeight: '100vh',
                  overflowX: 'auto',
                  overflowY: 'auto',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  background: 'var(--bg-primary, #ffffff)',
                }}
              >
                <ProductFeedback />
              </div>
            }
          />
          <Route
            path="/color"
            element={
              // Full-bleed container without the default header
              <div
                style={{
                  minHeight: '100vh',
                  overflowX: 'auto',
                  overflowY: 'auto',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  background: 'var(--bg-primary, #ffffff)',
                }}
              >
                <Color />
              </div>
            }
          />
          <Route
            path="/license"
            element={
              // Full-bleed container without the default header
              <div
                style={{
                  minHeight: '100vh',
                  overflowX: 'auto',
                  overflowY: 'auto',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  background: 'var(--bg-primary, #ffffff)',
                }}
              >
                <License />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
