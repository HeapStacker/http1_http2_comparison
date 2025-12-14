// handle button click to show load time
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('measureBtn');
  const out = document.getElementById('loadTime');
  btn.addEventListener('click', () => {
    const t = window.metrics.measure();
    out.textContent = `Load event: ${t.toFixed(1)} ms`;
    out.classList.add('metric-pill','good');
  });
});
