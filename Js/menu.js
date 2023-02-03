const menuBtn = document.querySelector(".menu-container");


menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {

    const menuLines = document.querySelectorAll(".menu-line");

    menuLines.forEach(line=> {
        line.classList.toggle("toggle-menu");
    });

    const headerNav = document.querySelector(".header-nav");

    headerNav.classList.toggle("toggle-menu");

    document.querySelector("main").classList.toggle("toggle-menu");

}