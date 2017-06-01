$(document).ready(function() {
  $(".panel-body").click(function() {
    $("p", this).toggleClass("invisible");
    $("img", this).toggleClass("clicked");
  });
});
