"use strict";

var menuButton = document.querySelector(".navbar__menu-button");
var dropdownMenu = document.querySelector(".navbar__menu");

if (window.innerWidth >= 768) {
  dropdownMenu.classList.remove("navbar__menu--hide");
}

menuButton.addEventListener('click', function () {
  dropdownMenu.classList.toggle("navbar__menu--hide");
});
window.addEventListener('click', function (e) {
  if (!dropdownMenu.contains(e.target) && !menuButton.contains(e.target)) {
    dropdownMenu.classList.add("navbar__menu--hide");
  }
});