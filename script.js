document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".header nav");

    if (menu && nav) {

        menu.addEventListener("click", function () {

            nav.classList.toggle("open");

        });

    }

});