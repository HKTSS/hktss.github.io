$(document).ready(function(){
	"use strict";
	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);
	
	//----- Dynamic Window resize -----//
	window.addEventListener("resize", setWindowSize); //Register event on window resize
	function setWindowSize() {
		window_width 	     = $(window).width(),
		window_height 		 = window.innerHeight,
		header_height 		 = $(".default-header").height(),
		header_height_static = $(".site-header.static").outerHeight(),
		fitscreen 			 = window_height - header_height;
		$(".fullscreen").css("height", window_height)
		$(".fitscreen").css("height", fitscreen);
	}
	

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});
     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });
	$(window).load(function () {
		$('#preload').fadeOut();
	});
	
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-gallery').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 6,
            }

        }
    });

$('.active-blog-slider').owlCarousel({
        nav: false,
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      })
	  
    // Select all links with hashes
    $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click',function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
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

// When the user clicks anywhere outside of the modal, close it
// Unefficent shit bc the OR operator doesn't work, I sad
window.onclick = function(event) {
	switch(event.target.id)
	{
		case "705-modal":
			event.target.style.display = "none";
		case "p4-modal":
			event.target.style.display = "none";
		case "p3-modal":
			event.target.style.display = "none";
		case "ctrain-modal":
			event.target.style.display = "none";
		case "twltex-modal":
			event.target.style.display = "none";
		case "msound-modal":
			event.target.style.display = "none";
		case "284-hof-modal":
			event.target.style.display = "none";
		default:
			break;
	}
}
//
		$(document).ready(function() {
			$('#mc_embed_signup').find('form').ajaxChimp();
		});   

 });
