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
        <header className="App-header">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>

          {/* Simple nav to make Product Feedback discoverable */}
          <nav style={{ position: 'absolute', top: 20, left: 20 }}>
            <Link className="App-link" to="/product-feedback">Go to Product Feedback</Link>
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

        {/* Routes */}
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/product-feedback" element={<ProductFeedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
