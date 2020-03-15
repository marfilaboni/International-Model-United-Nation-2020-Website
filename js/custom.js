$(function(){
     var patsala = $(window);
    var page = $('html, body');
    
      /*--------------------------
    scroll to top active
    ---------------------------- */
    $(".scrolltop").on('click', function(){
        $("html,body").animate({
            scrollTop:0
        }, 1000)
    });

    /*--------------------------
     Menu Scroll Fix Function
    ---------------------------- */
    patsala.on('scroll',function(){
        if (patsala.scrollTop() > 100) {
             $('.menu_part').addClass('animated slideInDown fix')
          } else {
              $('.menu_part').removeClass('animated slideInDown fix')
          }
    })
    
    /* wow js*/
    new WOW().init();
    
    // slick js
    
    $('.gly_slide').slick({
      dots: false,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:true,
       prevArrow: '.prv-arrow',
       nextArrow: '.nxt-arrow',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    
})