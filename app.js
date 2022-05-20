const btnMenu = document.querySelector(".menu__logo");
const menuNavigation = document.querySelector(".nav__liste");

btnMenu.addEventListener("click", () => {
  menuNavigation.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".nav__item");

allLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuNavigation.classList.toggle("active");
  });
});
