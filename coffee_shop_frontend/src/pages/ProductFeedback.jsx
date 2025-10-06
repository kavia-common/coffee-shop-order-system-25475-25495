import React, { useEffect } from 'react';
import '../assets/product-feedback-442-132.css';

/**
 * PUBLIC_INTERFACE
 * ProductFeedback
 * A React component that renders the generated Product Feedback screen.
 * - Imports the screen-specific CSS for pixel-accurate styles.
 * - Executes minimal JS initialization logic from assets/product-feedback-442-132.js.
 * - Uses images served from public/assets/figmaimages paths.
 */
export default function ProductFeedback() {
  useEffect(() => {
    // Execute the screen initialization script logic (converted from IIFE).
    // It only sets a role on the link element; safe to run in React effect.
    const init = () => {
      const link = document.getElementById('node-442-148');
      if (link) {
        link.setAttribute('role', 'link');
      }
    };
    init();
  }, []);

  return (
    <div id="screen-product-feedback-442-132" className="screen" role="main" aria-label="Product Feedback">
      {/* Stripe */}
      <div id="node-442-163" className="rectangle stripe" aria-hidden="true"></div>

      {/* Studio Name */}
      <div id="node-442-156" className="container studio-name" role="group" aria-label="Studio Name">
        <div id="node-442-157" className="container studio-text" role="group">
          <span id="node-442-158" className="text typo-97">Nam Design</span>
          <div id="node-442-159" className="container arrow-right" role="img" aria-label="arrow-right">
            <img
              id="node-442-160"
              className="icon"
              src="/assets/figmaimages/figma_image_442_160.png"
              alt="Vector"
              width="12"
              height="12"
            />
          </div>
          <span id="node-442-161" className="text typo-97">Feedback</span>
        </div>
        <span id="node-442-162" className="text typo-97">@namdesign</span>
      </div>

      {/* Headline & Logo */}
      <div id="node-442-151" className="container headline-logo" role="group" aria-label="Headline and Logo">
        <div id="node-442-152" className="container headline-text" role="group">
          <span id="node-442-153" className="text typo-103">Feedback</span>
          <p id="node-442-154" className="text typo-100">
            Thank you for downloading our digital product! We would love to hear your feedback so we can improve and
            create more products.
          </p>
        </div>
        <img
          id="node-442-155"
          className="rectangle logo"
          src="/assets/figmaimages/figma_image_442_155.png"
          alt="Logo NAM Design"
          width="84"
          height="84"
        />
      </div>

      {/* Image */}
      <div id="node-442-149" className="container image-wrap" role="img" aria-label="Saly Illustration">
        <img
          id="node-442-150"
          className="rectangle saly"
          src="/assets/figmaimages/figma_image_442_150.png"
          alt="Saly 11"
          width="576"
          height="576"
        />
      </div>

      {/* Detail */}
      <div id="node-442-137" className="container detail" role="group" aria-label="Detail">
        <span id="node-442-138" className="text typo-99">Give A Feedback</span>
        <div id="node-442-139" className="container form" role="group" aria-label="Form">
          <div id="node-442-140" className="container feedback-icon" role="img" aria-label="Feedback Icon">
            <div id="node-442-141" className="rectangle icon-bg" aria-hidden="true"></div>
            <div id="node-442-142" className="rectangle icon-image">
              <img
                src="/assets/figmaimages/figma_image_442_142.png"
                alt="icon"
                width="54"
                height="54"
              />
            </div>
            <img
              id="node-442-143"
              className="icon icon-overlay"
              src="/assets/figmaimages/figma_image_442_143.png"
              alt="icon overlay"
              width="54"
              height="54"
            />
          </div>
          <div id="node-442-144" className="container text-block" role="group">
            <div id="node-442-145" className="container text-row" role="group">
              <span id="node-442-146" className="text typo-101">Form</span>
              <span id="node-442-147" className="text typo-101" aria-hidden="true">👇</span>
            </div>
            <a
              id="node-442-148"
              className="text typo-97 link"
              href="https://wkf.ms/4awb2F6"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wkf.ms/4awb2F6
            </a>
          </div>
        </div>
      </div>

      {/* Created by */}
      <div id="node-442-133" className="container created-by" role="group" aria-label="Created by">
        <span id="node-442-134" className="text typo-97">Create with&nbsp;&nbsp;</span>
        <span id="node-442-135" className="text typo-98" aria-hidden="true">🖤</span>
        <span id="node-442-136" className="text typo-97">by NAM Design</span>
      </div>
    </div>
  );
}
