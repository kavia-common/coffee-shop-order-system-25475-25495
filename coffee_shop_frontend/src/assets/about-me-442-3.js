(function() {
  // Screen initialization for About Me Screen
  function init() {
    // Set up links
    const links = document.querySelectorAll('.coffee-link');
    links.forEach(link => {
      // Add aria attributes
      link.setAttribute('role', 'link');
      link.setAttribute('aria-label', 'Support me on Buy Me A Coffee');
      
      // Add hover effect
      link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
