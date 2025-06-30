window.addEventListener('scroll', function() {
  const menu = document.querySelector('.menu-principal');
  if (window.scrollY > 50) {
    menu.style.background = 'rgba(0, 0, 0, 0.8)';
    menu.style.backdropFilter = 'blur(6px)';
  } else {
    menu.style.background = 'rgba(0, 0, 0, 0.2)';
    menu.style.backdropFilter = 'blur(3px)';
  }
});