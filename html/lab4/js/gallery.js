// simple hover effect toggler for gallery
(() => {
  const imgs = document.querySelectorAll('.gallery img');
  imgs.forEach((img, idx) => {
    img.style.animationDelay = `${idx * 40}ms`;
    img.classList.add('fade-in');
  });
})();
