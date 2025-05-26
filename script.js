document.querySelector("#close").addEventListener("click", () => {
  window.windowControls.close();
});
document.querySelector("#minimize").addEventListener("click", () => {
  window.windowControls.minimize();
});
document.querySelector("#maximize").addEventListener("click", () => {
  window.windowControls.maximize();
});
