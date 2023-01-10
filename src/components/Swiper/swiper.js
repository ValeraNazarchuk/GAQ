const swiper = new Swiper('.Section-Name', {
  loop: true, //Включити безкінечний режим
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: true, // Автовисота
  speed: 500, // Скорість прокрутки слайдів
  slidesPerView: 1, // Кількість слайдів які буде показувати
  spaceBetween: 25, //отступ між слайдами
  breakpoints: {
    //робить як min-width
    1100: {
      slidesPerView: 3,
      spaceBetween: 42,
    },
    750: {
      slidesPerView: 2,
    },
  },
})
