'use strict';

const navContainer = document.querySelector(".header .nav");

if (navContainer) {
    navContainer.addEventListener("click", function(event) {
        event.preventDefault();

        const target = event.target;
        const activeNavItem = navContainer.querySelector(".active");

        if (activeNavItem) {
            activeNavItem.classList.remove("active");
        }

        if (target.classList.contains("nav__link")) {
            target.classList.add("active");
        }
    })
}

const 