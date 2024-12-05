document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias por contactarnos! Nos comunicaremos contigo pronto.');
});

// Efecto de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
