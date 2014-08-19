$(function() {
  $('.collapsible').accordion();
  $('#service-selection').selectmenu();

  $('.hidden').hide();

  $('select').on('click', 'option', function() {
    if ($(this).attr('id') == 'seo-select'){
      $('.seo').show();
    }
    else if ($(this).attr('id') == 'logodesign-select'){
      $('.logodesign').show();
    }
    else {
      $('.webdesign').show();
    }
  })
})
