$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.tenten').css({
    'transform' : 'translate(0px, -'+ wScroll /6 +'%)'
  });

  $('.kicker').css({
    'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
  });

  $(window).scroll(function(){
    $(".kicker").css("opacity", 1 - $(window).scrollTop() / 750);
  });
  $(window).scroll(function(){
    $(".tenten").css("opacity", 0 + $(window).scrollTop() / 550);
  });

});
