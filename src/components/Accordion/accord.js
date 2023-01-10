//----------Акордион на jquery---------------

$('.accord__item-title').on('click', function(){
  $('.accord__item').removeClass('accord__item--active');
  $(this).parent().addClass('accord__item--active');
})