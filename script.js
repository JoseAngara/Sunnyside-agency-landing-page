const menuButton = document.querySelector(".navbar__menu-button");
const dropdownMenu = document.querySelector(".navbar__menu");

if (window.innerWidth >= 768) {
    dropdownMenu.classList.remove("navbar__menu--hide");
}

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle("navbar__menu--hide");
});

window.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !menuButton.contains(e.target)) {
        dropdownMenu.classList.add("navbar__menu--hide");
    }
});