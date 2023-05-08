$(function () {
  // main swiper
  const swiper = new Swiper(".visual-swiper", {
    loop: true,

    pagination: {
      el: ".visual-swiper .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".visual-swiper .next",
      prevEl: ".visual-swiper .prev",
    },
    autoplay: {
      delay: 5000,
    },
  });

  // notice swiper
  const noticeSwiper = new Swiper(".notice-swiper", {
    slidesPerView: 2,
    navigation: {
      nextEl: ".notice-swiper .next",
      prevEl: ".notice-swiper .prev",
    },
    autoplay: false,
    spaceBetween: 50,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
    },
  });
});