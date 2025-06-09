document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});
