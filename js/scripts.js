$(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    console.log("test")
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("p").click(function() {
    $("date1").removeClass();
    $("date1").addClass("date1");
  });

  $("p").click(function() {
    $("date2").removeClass();
    $("date2").addClass("date2");
  });
});
