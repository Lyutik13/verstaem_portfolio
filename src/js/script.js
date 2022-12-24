// hamburger
const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closse = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closse.addEventListener("click", () => {
  menu.classList.remove("active");
});
// hamburger end

// skills__stat %
var counters = document.querySelectorAll(".skills__stat-counter"),
  lines = document.querySelectorAll(".skills__stat-line span");

counters.forEach( (item, i) => {
  lines[i].style.width = item.innerHTML;
});
// skills__stat % end
