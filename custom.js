$(function() {
  $('.collapsible').accordion();
  $('#service-selection').selectmenu();

  // This IIFE toggles orange shadow on mouseover of h1,h2,h3
  (function() {
    $('body').on('mouseenter', 'h1, h2, h3', function() {
      $(this).addClass('mouseover');
    });
    $('body').on('mouseleave', 'h1, h2, h3', function() {
      $(this).removeClass('mouseover');
    });
  }());
});
