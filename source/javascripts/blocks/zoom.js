$(document).ready(function() {
  $("[class^=zoom-family-tool]").each(function () {
    $(this).mouseenter(function() {
      dialog_num = $(this).parent().children().attr('class').slice(-7).charAt(0)
      $('.zoom-family-dialog-' +dialog_num).css("display", "block");
      $('.pd-tool').css("display", "block");
    });
    $(this).mouseleave(function() {
       dialog_num = $(this).parent().children().attr('class').slice(-7).charAt(0)
      $('.zoom-family-dialog-' +dialog_num).css("display", "none");
      $('.pd-tool').css("display", "none");
    });
  })
});