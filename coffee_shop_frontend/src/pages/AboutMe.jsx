import React, { useEffect } from 'react';
import '../assets/about-me-442-3.css';

/**
 * PUBLIC_INTERFACE
 * AboutMe
 * A React component that renders the generated About Me screen (screen id 442:3).
 * - Imports the screen-specific CSS for precise styling.
 * - Executes minimal JS initialization logic from src/assets/about-me-442-3.js.
 * - Uses images served from public/assets/figmaimages paths.
 */
// PUBLIC_INTERFACE
export default function AboutMe() {
  useEffect(() => {
    // Initialize behaviors converted from assets/about-me-442-3.js
    const init = () => {
      const links = document.querySelectorAll('.coffee-link');
      links.forEach(link => {
        link.setAttribute('role', 'link');
        link.setAttribute('aria-label', 'Support me on Buy Me A Coffee');
        link.addEventListener('mouseenter', () => {
          link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseleave', () => {
          link.style.textDecoration = 'none';
        });
      });
    };

    // Expose optional shared initializer similar to assets/app.js if available
    if (typeof window !== 'undefined' && window.app && typeof window.app.initializeScreen === 'function') {
      try { window.app.initializeScreen(); } catch (e) { /* noop */ }
    }

    init();
  }, []);

  return (
    <main id="screen-about-me-442-3" className="screen" role="main" aria-label="About Me">
      {/* Top stripe */}
      <div id="stripe" className="rectangle" aria-hidden="true"></div>

      {/* Studio name section */}
      <header id="studio-name" className="container" role="group" aria-label="Studio Name">
        <div id="studio-text" role="group" aria-label="Title">
          <span className="text typo-97">Nam Design</span>
          <div id="arrow-right" role="img" aria-label="arrow-right">
            <img
              src="/assets/figmaimages/figma_image_442_32.png"
              alt="Arrow right"
              width="12"
              height="12"
            />
          </div>
          <span className="text typo-97">About Me</span>
        </div>
        <span className="text typo-97">@namdesign</span>
      </header>

      {/* Headline and logo section */}
      <section id="headline-logo" className="container" role="group" aria-label="Headline and Logo">
        <div id="headline-text" role="group">
          <h1 className="text typo-103">About Me</h1>
          <p className="text typo-100">
            Hi, my name is B, and I am a product designer at NAM Design. I have been working in this field for more than four years, and I hope that my resources can help you with your design process. Cheers!
          </p>
        </div>
        <img
          id="logo-nam-design"
          className="rectangle logo"
          src="/assets/figmaimages/figma_image_442_27.png"
          alt="NAM Design Logo"
          width="84"
          height="84"
        />
      </section>

      {/* Support section */}
      <section id="support-us" className="container" role="group" aria-label="Support Me">
        <div id="support-text" role="group">
          <h2 className="text typo-99">Ways to Support Me</h2>
          <p className="text typo-100">If you appreciate my work, please consider supporting me below.</p>
        </div>

        <div id="buy-coffee" role="group" aria-label="Buy Me A Coffee">
          <div id="coffee-logo" role="img" aria-label="Coffee Logo Background">
            <img
              id="coffee-icon"
              className="rectangle"
              src="/assets/figmaimages/figma_image_442_17.png"
              alt="Coffee icon"
              width="54"
              height="54"
            />
          </div>
          <div id="coffee-detail" role="group" aria-label="Support Details">
            <div id="coffee-text" role="group">
              <span className="text typo-101">Buy Me A Coffee</span>
              <span className="text typo-101" aria-hidden="true">👇</span>
            </div>
            <a
              href="https://www.buymeacoffee.com/namdesign"
              className="text typo-102 coffee-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.buymeacoffee.com/namdesign
            </a>
          </div>
        </div>
      </section>

      {/* Main image */}
      <div id="main-image" className="container" role="img" aria-label="Designer illustration">
        <img
          src="/assets/figmaimages/figma_image_442_9.png"
          alt="Designer illustration"
          width="576"
          height="576"
        />
      </div>

      {/* Footer */}
      <footer id="created-by" className="container" role="group" aria-label="Created by">
        <span className="text typo-97">Create with</span>
        <span className="text typo-98" aria-hidden="true">🖤</span>
        <span className="text typo-97">by NAM Design</span>
      </footer>
    </main>
  );
}
