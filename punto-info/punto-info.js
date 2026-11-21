/* Punto de información (tablet de la entrada de la iglesia)
   · Vuelve a la portada tras 2 minutos sin tocar la pantalla.
   · Cuenta una visita cada vez que alguien empieza a usarlo (no cada página).
   · No deja salir de la visita: bloquea enlaces externos y el menú contextual. */
(function () {
  var REPOSO_MS = 2 * 60 * 1000;
  var CONTADOR = 'https://script.google.com/macros/s/AKfycbxmX2N3iTpNJNer5_p-226W2UHpmNsqxUz40Ru1Lw0PEJkwrsXwz8dOtSja-ixRZg20Tg/exec';
  var enPortada = /\/punto-info\/(index\.html)?$/.test(location.pathname);
  var temporizador = null;

  function leer(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function guardar(k, v) { try { if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch (e) {} }

  function reposo() {
    guardar('pi-sesion', null);           // la próxima persona cuenta como visita nueva
    if (window.vgCerrarVisor) window.vgCerrarVisor();
    if (enPortada) window.scrollTo(0, 0);
    else location.replace('index.html');
  }

  function actividad() {
    clearTimeout(temporizador);
    temporizador = setTimeout(reposo, REPOSO_MS);
  }

  function primerToque() {
    if (!/(^|\.)parroquiasantodomingo\.es$|^santodomingodesilos\.github\.io$/.test(location.hostname)) return;   // solo cuenta en la web publicada
    if (!leer('pi-sesion')) {
      guardar('pi-sesion', '1');
      try { fetch(CONTADOR + '?action=increment&pagina=punto-info', { mode: 'no-cors' }); } catch (e) {}
    }
  }

  ['pointerdown', 'touchstart', 'scroll', 'keydown', 'wheel'].forEach(function (ev) {
    window.addEventListener(ev, actividad, { passive: true });
  });
  window.addEventListener('pointerdown', primerToque, { once: true, passive: true });
  actividad();

  document.addEventListener('contextmenu', function (ev) { ev.preventDefault(); });
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('a[href]');
    if (a && (a.target || a.origin !== location.origin || a.pathname.indexOf('/punto-info/') === -1)) {
      ev.preventDefault();
    }
  });
}());
