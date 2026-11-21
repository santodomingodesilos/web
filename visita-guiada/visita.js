/* Visita guiada: visor de fotos a pantalla completa (web y punto de información) */
(function () {
  var visor = document.querySelector('.vg-visor');
  if (!visor) return;
  var img = visor.querySelector('img');
  var pie = visor.querySelector('p');

  function cerrar() { visor.hidden = true; img.removeAttribute('src'); }

  document.addEventListener('click', function (ev) {
    var foto = ev.target.closest('.vg-foto');
    if (foto) {
      var original = foto.querySelector('img');
      img.src = original.src;
      img.alt = original.alt;
      var cap = foto.querySelector('figcaption');
      pie.textContent = cap ? cap.textContent : '';
      visor.hidden = false;
      return;
    }
    if (ev.target.closest('.vg-visor')) cerrar();
  });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') cerrar(); });
  window.vgCerrarVisor = cerrar;
}());
