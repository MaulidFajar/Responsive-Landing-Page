const logo = document.querySelector(".logo");
const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".nav_list");

burgerBtn.addEventListener("click", handleBurgerBtn);

function handleBurgerBtn() {
  navbarList.classList.toggle("w-full");
  logo.classList.toggle("fixed");
  burgerBtn.classList.toggle("fixed");

  burgerBtn.src.includes("icon-hamburger")
    ? (burgerBtn.src = "assets/images/icon-close.svg")
    : (burgerBtn.src = "assets/images/icon-hamburger.svg");
}
