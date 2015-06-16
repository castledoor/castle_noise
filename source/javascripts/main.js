$(document).ready(function() {
  $('.open_close').click(function(){
    $('.explore').toggleClass('open');
    $('.open_close p, .open_close img ').toggle();
  });
});