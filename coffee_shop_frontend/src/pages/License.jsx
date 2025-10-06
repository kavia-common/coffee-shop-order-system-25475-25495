import React, { useEffect } from 'react';
import '../assets/license-442-36.css';

/**
 * PUBLIC_INTERFACE
 * License
 * A React component that renders the generated License screen (screen id 442:36).
 * - Imports the screen-specific CSS for precise styling.
 * - Executes minimal JS initialization logic similar to assets/license-442-36.js.
 * - Uses images served from public/assets/figmaimages paths.
 */
// PUBLIC_INTERFACE
export default function License() {
  useEffect(() => {
    // Initialize behaviors based on assets/license-442-36.js
    const init = () => {
      const arrowIcon = document.getElementById('node-442-82');
      if (arrowIcon) {
        arrowIcon.setAttribute('role', 'img');
        arrowIcon.setAttribute('aria-label', 'arrow-right');
      }

      // Label check icons
      document.querySelectorAll('[id^="node-442-54"]').forEach(icon => {
        icon.setAttribute('role', 'img');
        icon.setAttribute('aria-label', 'check mark');
      });

      // Label x icons
      document.querySelectorAll('.x-icon').forEach(icon => {
        icon.setAttribute('role', 'img');
        icon.setAttribute('aria-label', 'not allowed');
      });

      const detailAgreement = document.getElementById('node-442-43');
      if (detailAgreement) {
        detailAgreement.setAttribute('role', 'region');
        detailAgreement.setAttribute('aria-label', 'License Agreement Details');
      }

      // Also expose optional global initializer hook if present
      if (typeof window !== 'undefined' && typeof window.initLicenseScreen === 'function') {
        try { window.initLicenseScreen(); } catch (e) { /* noop */ }
      }
    };

    init();
  }, []);

  return (
    <div id="screen-license-442-36" className="screen" role="main" aria-label="License Agreement">
      {/* Stripe */}
      <div id="node-442-86" className="rectangle stripe" aria-hidden="true"></div>

      {/* Studio Name */}
      <div id="node-442-79" className="container studio-name" role="group" aria-label="Studio Name">
        <div id="node-442-80" className="container text" role="group">
          <span id="node-442-81" className="text typo-97">Nam Design</span>
          <div id="node-442-82" className="container arrow-right" role="img" aria-label="arrow-right">
            <img
              id="node-442-83"
              className="icon"
              src="/assets/figmaimages/figma_image_442_83.png"
              alt="Vector"
              width="12"
              height="12"
            />
          </div>
          <span id="node-442-84" className="text typo-97">License Agreement &amp; Terms of use</span>
        </div>
        <span id="node-442-85" className="text typo-97">@namdesign</span>
      </div>

      {/* Headline & Logo */}
      <div id="node-442-74" className="container headline-logo" role="group" aria-label="Headline and Logo">
        <div id="node-442-75" className="container text" role="group">
          <span id="node-442-76" className="text typo-103">License Agreement &amp; Terms of use</span>
          <p id="node-442-77" className="text typo-100">Please take the time to carefully read our Terms of Use.</p>
        </div>
        <img
          id="node-442-78"
          className="rectangle logo"
          src="/assets/figmaimages/figma_image_442_78.png"
          alt="Logo NAM Design"
          width="84"
          height="84"
        />
      </div>

      {/* Detail Agreement */}
      <div id="node-442-43" className="container detail-agreement" role="group" aria-label="Detail Agreement">
        <div id="node-442-44" className="container text" role="group">
          <span id="node-442-45" className="text typo-99">License Agreement</span>
          <p id="node-442-46" className="text typo-100">This standard license grant you permitted to,</p>
        </div>

        <div id="node-442-47" className="container points" role="group">
          {/* You can */}
          <div id="node-442-48" className="container you-can" role="group">
            <div id="node-442-49" className="container text" role="group">
              <span id="node-442-50" className="text typo-101">You can</span>
              <span id="node-442-51" className="text typo-101 header-emoji" aria-hidden="true">👇</span>
            </div>

            <div id="node-442-52" className="container point-list" role="group">
              <div id="node-442-53" className="container point" role="group">
                <img
                  id="node-442-54"
                  className="icon"
                  src="/assets/figmaimages/figma_image_442_54.png"
                  alt="Check mark"
                  width="24"
                  height="24"
                />
                <span id="node-442-55" className="text typo-102">Use this for any personal project or client purpose.</span>
              </div>
              <div id="node-442-56" className="container point" role="group">
                <img
                  id="node-442-57"
                  className="icon"
                  src="/assets/figmaimages/figma_image_442_54.png"
                  alt="Check mark"
                  width="24"
                  height="24"
                />
                <span id="node-442-58" className="text typo-102">Reproduced this design only for multimedia, presentation or video.</span>
              </div>
            </div>
          </div>

          {/* You can't */}
          <div id="node-442-59" className="container you-cant" role="group">
            <div id="node-442-60" className="container text" role="group">
              <span id="node-442-61" className="text typo-101">You Can't</span>
              <span id="node-442-62" className="text typo-101 header-emoji" aria-hidden="true">👇</span>
            </div>

            <div id="node-442-63" className="container point-list" role="group">
              <div id="node-442-64" className="container point" role="group">
                <div id="node-442-65" className="container x-icon" role="img" aria-label="not allowed">
                  <div id="node-442-66" className="icon-outline">
                    <img
                      id="node-442-67"
                      className="icon"
                      src="/assets/figmaimages/figma_image_442_67.png"
                      alt="X mark"
                      width="8"
                      height="8"
                    />
                  </div>
                </div>
                <span id="node-442-68" className="text typo-102">Selling or reselling this kit on the marketplace</span>
              </div>
              <div id="node-442-69" className="container point" role="group">
                <div id="node-442-70" className="container x-icon" role="img" aria-label="not allowed">
                  <div id="node-442-71" className="icon-outline">
                    <img
                      id="node-442-72"
                      className="icon"
                      src="/assets/figmaimages/figma_image_442_67.png"
                      alt="X mark"
                      width="8"
                      height="8"
                    />
                  </div>
                </div>
                <span id="node-442-73" className="text typo-102">Use in Paid UI KIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div id="node-442-41" className="container image" role="group" aria-label="Illustration">
        <img
          id="node-442-42"
          className="rectangle saly"
          src="/assets/figmaimages/figma_image_442_42.png"
          alt="Saly-10"
          width="576"
          height="576"
        />
      </div>

      {/* Created by */}
      <div id="node-442-37" className="container created-by" role="group" aria-label="Created by">
        <span id="node-442-38" className="text typo-97">Create with&nbsp;&nbsp;</span>
        <span id="node-442-39" className="text typo-98" aria-hidden="true">🖤</span>
        <span id="node-442-40" className="text typo-97">by NAM Design</span>
      </div>
    </div>
  );
}
