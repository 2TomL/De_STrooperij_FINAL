// Geavanceerde logo-animatie voor home desktop-logo
// Vereist: GSAP (TweenMax) of gebruik CSS voor fallback
// Dit script werkt op het .desktop-logo in de home-sectie

(function() {
  var logo = document.querySelector('.desktop-logo');
  if (!logo) return;

  // Alleen op desktop
  if (window.innerWidth < 767) return;

  // Voeg een wrapper toe voor overflow effect
  if (!logo.parentElement.classList.contains('desktop-logo-anim-wrapper')) {
    var wrapper = document.createElement('div');
    wrapper.className = 'desktop-logo-anim-wrapper';
    logo.parentElement.insertBefore(wrapper, logo);
    wrapper.appendChild(logo);
  }

  var wrapper = logo.parentElement;
  wrapper.style.overflow = 'visible';
  wrapper.style.display = 'inline-block';
  wrapper.style.position = 'relative';

  // ENTRY ANIMATION
  logo.style.transition = 'none';
  logo.style.opacity = '0';
  logo.style.transform = 'translateX(120vw) translateY(-80px) scale(1.2)';
  setTimeout(function() {
    logo.style.opacity = '1';
    logo.style.transition = 'transform 2.1s cubic-bezier(.22,1.5,.36,1), opacity 1.2s';
    logo.style.transform = 'translateX(0) translateY(0) scale(1)';
  }, 100);

  // Simuleer verticale bounce tijdens horizontale beweging
  // (CSS transition met cubic-bezier geeft een bounce, maar we voegen extra Y-animatie toe)
  setTimeout(function() {
    logo.style.transition = 'transform 0.35s cubic-bezier(.22,1.5,.36,1)';
    logo.style.transform = 'translateX(0) translateY(-32px) scale(1)';
    setTimeout(function() {
      logo.style.transition = 'transform 0.25s cubic-bezier(.22,1.5,.36,1)';
      logo.style.transform = 'translateX(0) translateY(0) scale(1)';
    }, 250);
  }, 2100);

  // Na de entry-animatie: activeer 3D effect
  setTimeout(function() {
    logo.style.transition = '';
    // 3D-animatie events
    wrapper.addEventListener('mousemove', function(e) {
      var rect = wrapper.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateY = (x - centerX) / centerX * 10; // max 10deg
      var rotateX = (centerY - y) / centerY * 10;
      logo.style.transition = 'transform 0.2s cubic-bezier(.68,-0.55,.27,1.55)';
      logo.style.transform = 'scale(1.08) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      logo.style.boxShadow = 'none';
      logo.style.background = 'none';
    });
    wrapper.addEventListener('mouseleave', function() {
      logo.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
      logo.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
      logo.style.boxShadow = 'none';
      logo.style.background = 'none';
    });
    wrapper.addEventListener('mouseenter', function() {
      logo.style.transition = 'transform 0.2s cubic-bezier(.68,-0.55,.27,1.55)';
      logo.style.transform = 'scale(1.08)';
      logo.style.boxShadow = 'none';
      logo.style.background = 'none';
    });
  }, 2500);
})();
