(function ($) {
"use strict";


// Preloder
 $(window).load(function(){
	 $('.preloader').fadeOut(1000,function(){
		 $('body').removeClass(loading)
	 })
 });


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "767"
});

	// counterUp

			$('.counter').counterUp({
                delay: 10,
                time: 1000
            });
			
	// Click To Scroll down 
$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
 
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
      if (target.length) {
    
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
      
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });
	
			
// owlCarousel
$('.slider-active').owlCarousel({
    loop:true,
	items:1,
	navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})




// WOW active
new WOW({
	offset: 10, 
}).init();


})(jQuery);