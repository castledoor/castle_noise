 $(document).ready(function() {
  $('#listitems').paginate({itemsPerPage: 5});

  $(".triangle img").click(function(){
    $('.main').toggleClass("open");
    $('.main').toggleClass("slideLeft");
    $(".drawer-wrapper").css("display", "block");
    $(".triangle img").toggle();
  });

  $(".review-pull-container").click(function() {
    var full_review = $(this).parent().parent().parent().parent().next().children()
    if($('.full_review') != full_review ){
      $('.full-review').not(full_review).slideUp();
    }
    $(full_review).slideToggle();
    $(this).children().toggle();
    $(this).parent().first().children().siblings().next('.arrow').toggle();
    $(this).parent().first().children().siblings().first().toggle();
  });

  $('.a, .b').click(function() {
    var sub_full_review_left = $(this).parents().parents().parents().next().first()
    $('.full-sub-review').not(sub_full_review_left).slideUp();
    $('.full-review').slideUp();
    $(sub_full_review_left).slideToggle();

  });

  $('#listitems li').mouseover(function() {
    $(this).children().siblings().next().next().show();
  });

  $('#listitems li').mouseleave(function() {
    $(this).children().siblings().next().next().hide();
  });

});




