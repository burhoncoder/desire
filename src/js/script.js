const burgerBtn = document.querySelector(".header__body svg");
const burger = document.querySelector(".burger");
const burgerClose = burger.querySelector("svg");
const overlay = document.querySelector(".overlay");
burgerBtn.addEventListener("click", (e) => {
  burger.classList.add("burger--active");
  overlay.classList.add("overlay--active");
});
burgerClose.addEventListener("click", (e) => {
  burger.classList.remove("burger--active");
  overlay.classList.remove("overlay--active");
});
overlay.addEventListener("click", (e) => {
  burger.classList.remove("burger--active");
  overlay.classList.remove("overlay--active");
});

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperProducts = new Swiper(".products-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 5,
    },
    767: {
      slidesPerView: 7,
    },
    991: {
      slidesPerView: 9,
    },
    1250: {
      slidesPerView: 10,
    },
  },
});

const tabBody = document.querySelectorAll(".tab__body");
const tabBtn = document.querySelectorAll(".tab__btn");
tabBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tabBtn.forEach((button) => {
      button.classList.remove("tab__btn--active");
    });
    btn.classList.add("tab__btn--active");
    tabBody.forEach((tabBody) => {
      tabBody.classList.remove("tab__body--active");
    });
    document
      .querySelector(`div[data-tab="${btn.dataset.tab}"]`)
      .classList.add("tab__body--active");
  });
});
