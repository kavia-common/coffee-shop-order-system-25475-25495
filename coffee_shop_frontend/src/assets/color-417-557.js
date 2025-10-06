(function() {
  function init() {
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
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();
