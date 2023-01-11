// нада підключити через npm => mixitup

$(function(){
  var mixer = mixitup('.filter__body-list');

  $('.filter__btn-item').on('click', function () {
    $('.filter__btn-item').removeClass('filter__btn--active')
    $(this).addClass('filter__btn--active')
  })
})