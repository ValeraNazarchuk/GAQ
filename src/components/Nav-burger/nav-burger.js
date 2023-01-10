//---------------Бургер на jquery-------------
$('.nav__burger').on('click', function () {
  $('.nav__burger').toggleClass('nav__burger--active')
  $('.nav__list').toggleClass('nav__list--active')
})

//При нажаті на силку шоб вікно header закривалось/пропадало
$('.nav__list-item').on('click', function () {
  $('.nav__burger').removeClass('nav__burger--active')
  $('.nav__list').removeClass('nav__list--active')
})
