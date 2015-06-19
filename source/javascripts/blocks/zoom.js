$(document).ready(function() {
  // $("[class^=zoom-family-tool]").each(function () {
  //   $(this).mouseenter(function() {
  //     $(this).parent().parent().siblings().next().next().next().children().children().children()

  //     console.log("wat");
  //   })
  // })
  $('.zoom-family-tool-1').mouseenter(function() {
    $('.zoom-family-dialog-1, .pd-tool').css("display", "block");
  });
  $('.zoom-family-tool-1').mouseleave(function() {
    $('.zoom-family-dialog-1, .pd-tool').css("display", "none");
  });

  $('.zoom-family-tool-2').mouseenter(function() {
    $('.zoom-family-dialog-2, .pd-tool').css("display", "block");
  });
  $('.zoom-family-tool-2').mouseleave(function() {
    $('.zoom-family-dialog-2, .pd-tool').css("display", "none");
  });

  $('.zoom-family-tool-3').mouseenter(function() {
    $('.zoom-family-dialog-3, .pd-tool').css("display", "block");
  });
  $('.zoom-family-tool-3').mouseleave(function() {
    $('.zoom-family-dialog-3, .pd-tool').css("display", "none");
  });

  $('.zoom-family-tool-4').mouseenter(function() {
    $('.zoom-family-dialog-4, .pd-tool').css("display", "block");
  });
  $('.zoom-family-tool-4').mouseleave(function() {
    $('.zoom-family-dialog-4, .pd-tool').css("display", "none");
  });
});