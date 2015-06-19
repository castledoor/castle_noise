$(document).ready(function() {
   pegasus_click_actions();
  $('.open_close').click(function(){
    $('.explore').toggleClass('open');
    $('.open_close p, .open_close img ').toggle();  
  });

  $('.inner').slick({
    dots: true,
    infinite: true,
  });

   //footer
function pegasus_click_actions() {
  $('.words-elite-footer').css("opacity", "1");
  $('.words-zoom-footer').css("opacity", "1");
  $('.words-peg-footer').css("opacity", "0");
  $('.overlay-2, .overlay-3').css("display", "block");
  $('.overlay-3').css("margin-top", "-43px");
  $('.overlay-2').css('margin-top', "-34px");
  $('.overlay-1').css("display", "none");
  $('.baby-carrot').css("margin-left", "-477px")
}

function elite_click_actions() {
  $('.words-zoom-footer').css("opacity", "1");
  $('.words-peg-footer').css("opacity", "1");
  $('.words-elite-footer').css("opacity", "0");
  $('.overlay-1, .overlay-3').css("display", "block");
  $('.overlay-2').css("display", "none");
  $('.overlay-3').css('margin-top', "-43px");
  $('.overlay-1').css('margin-top', "-34px");
  $('.baby-carrot').css("margin-left", "14px")
}

function zoom_click_actions() {
  $('.words-elite-footer').css("opacity", "1");
  $('.words-peg-footer').css("opacity", "1");
  $('.words-zoom-footer').css("opacity", "0");
  $('.overlay-2, .overlay-1').css("display", "block");
  $('.overlay-3').css("display", "none");
  $('.overlay-2').css('margin-top', "-43px");
  $('.overlay-1').css('margin-top', "-34px");
 
}


var slider_active_1 = $('.slick-slider').children().last().children().first()
var slider_active_2 = $('.slick-slider').children().last().children().first().next()
var slider_active_3 = $('.slick-slider').children().last().children().first().next().next()

   $(slider_active_1).on('click' ,function(e) {
     e.preventDefault();
     pegasus_click_actions();
   });

   $(slider_active_2).on('click', function(e) {
     e.preventDefault();
     elite_click_actions();
   });

   $(slider_active_3).click(function() {
      zoom_click_actions();
   });
});