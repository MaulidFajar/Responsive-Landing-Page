const logo = document.querySelector(".logo");
const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");

const handleBurgerBtn = () => {
  navbarList.classList.toggle("w-full");

  burgerBtn.src.includes("icon-hamburger")
    ? (burgerBtn.src = "assets/images/icon-close.svg")
    : (burgerBtn.src = "assets/images/icon-hamburger.svg");
};
