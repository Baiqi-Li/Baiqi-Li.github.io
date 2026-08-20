/* Click a publication thumbnail to enlarge it; click again (or press Esc) to restore. */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.paper-box-image img').forEach(function (img) {
    img.classList.add('pub-zoomable');
    img.addEventListener('click', function () {
      var overlay = document.createElement('div');
      overlay.className = 'pub-lightbox';
      var big = document.createElement('img');
      big.src = img.src;
      big.alt = img.alt || '';
      overlay.appendChild(big);

      function close() {
        overlay.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
      }
      function onKey(e) {
        if (e.key === 'Escape') close();
      }

      overlay.addEventListener('click', close);
      document.addEventListener('keydown', onKey);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';
    });
  });
});
