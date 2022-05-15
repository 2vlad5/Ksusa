$(window).scroll(function() {
  var height = $(window).scrollTop();
  $(".p-ClassRus").css("opacity", (100 - height/10)/10); 
});
