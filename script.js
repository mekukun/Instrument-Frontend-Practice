const hamburger = document.querySelector(".nav-section-small");
const navSmallMenu = document.querySelector(".nav-small-open");

hamburger.addEventListener("click", () => {
  document.getElementById("hamburger").toggleAttribute("hidden");
  document.getElementById("cross").toggleAttribute("hidden");
  navSmallMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navSmallMenu.classList.remove("active");
  })
);
