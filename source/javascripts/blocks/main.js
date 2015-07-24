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
    $(full_review).slideToggle();
    $(this).children().toggle();
    $(this).parent().first().children().siblings().next('.arrow').toggle();
    $(this).parent().first().children().siblings().first().toggle();
  });

  $('.a, .b').click(function() {
    var sub_full_review_left = $(this).parents().parents().parents().next().first()
    $(sub_full_review_left).slideToggle();
  });

  // $('.b').click(function() {
  //   var sub_full_review_right = $(this).parents().parents().parents().next().first()
  //   $(sub_full_review_right).slideToggle();

  // })
});




