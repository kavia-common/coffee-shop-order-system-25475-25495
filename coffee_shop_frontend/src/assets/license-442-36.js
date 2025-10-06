(function() {
  // Screen initialization for License Screen 442:36
  function init() {
    // Enhance accessibility for icons
    const arrowIcon = document.getElementById('node-442-82');
    if (arrowIcon) {
      arrowIcon.setAttribute('role', 'img');
      arrowIcon.setAttribute('aria-label', 'arrow-right');
    }

    // Ensure check and X icons are properly labeled for screen readers
    document.querySelectorAll('[id^="node-442-54"]').forEach(icon => {
      icon.setAttribute('role', 'img');
      icon.setAttribute('aria-label', 'check mark');
    });

    document.querySelectorAll('.x-icon').forEach(icon => {
      icon.setAttribute('role', 'img');
      icon.setAttribute('aria-label', 'not allowed');
    });

    // Set up sections for better document structure
    const detailAgreement = document.getElementById('node-442-43');
    if (detailAgreement) {
      detailAgreement.setAttribute('role', 'region');
      detailAgreement.setAttribute('aria-label', 'License Agreement Details');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
