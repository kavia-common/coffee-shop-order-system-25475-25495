(function() {
  function initializeScreen() {
    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('img').forEach(img => {
        if (img.dataset && img.dataset.src && !img.src) {
          img.src = img.dataset.src;
        }
      });
    }
  }
  window.app = window.app || {};
  window.app.initializeScreen = initializeScreen;
})();
