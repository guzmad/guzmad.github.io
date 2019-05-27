$(window).scroll(function(){
  if($(document).scrolling() > 50){
    $('nav').addClass('shrink');
  }else{
    $('nav').removeClass('shrink');
  }
});
