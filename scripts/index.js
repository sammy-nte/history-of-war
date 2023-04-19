document.querySelector("#menu-open").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.add("show-menu");
});

document.querySelector("#menu-close").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.remove("show-menu");
});
