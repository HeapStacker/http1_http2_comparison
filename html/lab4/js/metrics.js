const measure = () => {
  const timing = performance.timing;
  const total = timing.loadEventEnd - timing.navigationStart;
  return total > 0 ? total : performance.now();
};
window.metrics = { measure };
