const menuMobile = () => {
    const btnMenu = document.querySelector(".header__btn-mobile");
    const iconMenu = document.querySelector(".header__icon-mobile");
    const listMenu = document.querySelector(".header__list");

    btnMenu.addEventListener("click", () => {
        btnMenu.classList.toggle("header__btn-show");
        iconMenu.classList.toggle("fa-bars");
        iconMenu.classList.toggle("fa-xmark");
        listMenu.classList.toggle("header__list-show");
    })
}

menuMobile();