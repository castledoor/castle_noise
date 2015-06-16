$(document).ready(function() {
  $('.pegasus-tool-1').mouseenter(function() {
    $('.pegasus-dialog-1, .pd-tool').css("display", "block");
  });
  $('.pegasus-tool-1').mouseleave(function() {
    $('.pegasus-dialog-1, .pd-tool').css("display", "none");
  });

  $('.pegasus-tool-2').mouseenter(function() {
    $('.pegasus-dialog-2, .pd-tool').css("display", "block");
  });
  $('.pegasus-tool-2').mouseleave(function() {
    $('.pegasus-dialog-2, .pd-tool').css("display", "none");
  });

  $('.pegasus-tool-3').mouseenter(function() {
    $('.pegasus-dialog-3, .pd-tool').css("display", "block");
  });
  $('.pegasus-tool-3').mouseleave(function() {
    $('.pegasus-dialog-3, .pd-tool').css("display", "none");
  });
});