 $(document).ready(function() {
  $('#listitems').paginate({itemsPerPage: 5});

  $(".triangle img").click(function(){
    $('.main').toggleClass("open");
    $('.main').toggleClass("slideLeft");
    $(".drawer-wrapper").css("display", "block");
    $(".triangle img").toggle();
  });

  $(".full-review-pull").click(function() {
    var full_review = $(this).parent().parent().parent().parent().next().children()
    $(full_review).toggle();
    $('.full-review-pull').toggle();
    $('.arrow').toggle();
  });
});




