/*-- Smooth scroll --*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*-- Scroll CSS --*/
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 86) {
      $("#fixedbutton").css("display", "block");
    }else{
      $("#fixedbutton").css("display", "none");
    }
});
