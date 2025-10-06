import React, { useEffect } from 'react';
import '../assets/color-417-557.css';

/**
 * PUBLIC_INTERFACE
 * Color
 * A React component that renders the generated Color screen (screen id 417:557).
 * - Imports the screen-specific CSS for pixel-accurate styles.
 * - Executes minimal JS initialization logic from src/assets/color-417-557.js.
 * - Uses images served from public/assets/figmaimages paths.
 */
export default function Color() {
  useEffect(() => {
    // Equivalent to the IIFE in assets/color-417-557.js
    const init = () => {
      // Add loading="lazy" to all images and fade-in on load
      document.querySelectorAll('#screen-color-417-557 img').forEach(img => {
        img.loading = 'lazy';
        img.style.opacity = img.style.opacity || '1';
        img.addEventListener('load', () => {
          img.style.transition = 'opacity 200ms ease-out';
          img.style.opacity = '1';
        });
      });

      // Ensure swatch rectangles have role descriptions
      document.querySelectorAll('.swatch').forEach(swatch => {
        if (!swatch.getAttribute('role')) {
          swatch.setAttribute('role', 'img');
        }
        if (!swatch.getAttribute('aria-label')) {
          swatch.setAttribute('aria-label', 'Color swatch');
        }
      });
    };

    init();
  }, []);

  return (
    <main id="screen-color-417-557" className="screen" role="main" aria-label="Color">
      {/* Top Stripe */}
      <div id="node-417-606" className="rectangle stripe" aria-hidden="true"></div>

      {/* Studio Name */}
      <header id="node-444-24" className="container studio-name" role="group" aria-label="Studio Name">
        <div id="node-444-25" className="container text-group" role="group">
          <span id="node-444-26" className="text typo-54">Nam Design</span>
          <div id="node-444-27" className="container arrow-right" role="img" aria-label="arrow-right">
            <img
              id="node-444-28"
              className="icon"
              src="/assets/figmaimages/figma_image_444_28.png"
              alt="Arrow right"
              width="12"
              height="12"
            />
          </div>
          <span id="node-444-29" className="text typo-54">Color</span>
        </div>
        <span id="node-444-30" className="text typo-54">@namdesign</span>
      </header>

      {/* Number */}
      <section id="node-417-595" className="container number" role="group" aria-label="Section Number">
        <span id="node-417-596" className="text typo-59" aria-hidden="true">03</span>
        <span id="node-417-597" className="text typo-53">Color</span>
      </section>

      {/* Title */}
      <section id="node-417-590" className="container title" role="group" aria-label="Title Bar">
        <span id="node-417-591" className="text typo-51">Color Guide</span>
        <div id="node-417-592" className="container line" role="group" aria-label="Progress Line">
          <div id="node-417-593" className="rectangle" aria-hidden="true"></div>
          <div id="node-417-594" className="rectangle" aria-hidden="true"></div>
        </div>
      </section>

      {/* Colors heading */}
      <section id="node-417-588" className="container section-colors" role="group" aria-label="Colors">
        <span id="node-417-589" className="text typo-58">Colors</span>
      </section>

      {/* Shadow rectangles behind cards */}
      <div id="node-417-582" className="rectangle shadow" aria-hidden="true"></div>
      <div id="node-417-576" className="rectangle shadow" aria-hidden="true"></div>
      <div id="node-417-570" className="rectangle shadow" aria-hidden="true"></div>
      <div id="node-417-564" className="rectangle shadow" aria-hidden="true"></div>
      <div id="node-417-558" className="rectangle shadow" role="img" aria-label="Card shadow">
        <img
          src="/assets/figmaimages/figma_image_417_558.png"
          alt="Soft card shadow texture"
          width="148"
          height="116"
          style={{ width: '148px', height: '116px', opacity: 0, display: 'block' }}
        />
      </div>

      {/* Color Cards */}
      <section id="node-417-583" className="color-card" role="group" aria-label="Color Card 01">
        <div id="node-417-584" className="rectangle swatch" aria-label="Swatch #C67C4E" role="img"></div>
        <div id="node-417-585" className="container variable" role="group" aria-label="Values">
          <span id="node-417-586" className="text typo-56">01</span>
          <span id="node-417-587" className="text typo-57">#C67C4E</span>
        </div>
      </section>

      <section id="node-417-577" className="color-card" role="group" aria-label="Color Card 02">
        <div id="node-417-578" className="rectangle swatch" aria-label="Swatch #EDD6C8" role="img"></div>
        <div id="node-417-579" className="container variable" role="group" aria-label="Values">
          <span id="node-417-580" className="text typo-56">02</span>
          <span id="node-417-581" className="text typo-57">#EDD6C8</span>
        </div>
      </section>

      <section id="node-417-571" className="color-card" role="group" aria-label="Color Card 03">
        <div id="node-417-572" className="rectangle swatch" aria-label="Swatch #313131" role="img"></div>
        <div id="node-417-573" className="container variable" role="group" aria-label="Values">
          <span id="node-417-574" className="text typo-56">03</span>
          <span id="node-417-575" className="text typo-57">#313131</span>
        </div>
      </section>

      <section id="node-417-565" className="color-card" role="group" aria-label="Color Card 04">
        <div id="node-417-566" className="rectangle swatch" aria-label="Swatch #E3E3E3" role="img"></div>
        <div id="node-417-567" className="container variable" role="group" aria-label="Values">
          <span id="node-417-568" className="text typo-56">04</span>
          <span id="node-417-569" className="text typo-57">#E3E3E3</span>
        </div>
      </section>

      <section id="node-417-559" className="color-card" role="group" aria-label="Color Card 05">
        <div id="node-417-560" className="rectangle swatch" role="img" aria-label="Swatch #F9F2ED">
          <img
            src="/assets/figmaimages/figma_image_417_560.png"
            alt="Swatch texture #F9F2ED"
            width="196"
            height="159"
            style={{ width: '196px', height: '159px', borderRadius: '12px 12px 0 0', display: 'block', objectFit: 'cover' }}
          />
        </div>
        <div id="node-417-561" className="container variable" role="group" aria-label="Values">
          <span id="node-417-562" className="text typo-56">05</span>
          <span id="node-417-563" className="text typo-57">#F9F2ED</span>
        </div>
      </section>
    </main>
  );
}
