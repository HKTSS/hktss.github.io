$(document).ready(function() {
	"use strict";
	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);
	
	/* ----- Dynamic Window resize ----- */
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
	

  /* -------- Active Sticky ---------- */
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
	

/* When the user clicks anywhere outside of the modal, close it */
window.onclick = function(event) {
	if(event.target.id == "705-modal" || event.target.id == "p4-modal" || event.target.id == "p3-modal" || event.target.id == "twltex-modal" || event.target.id == "ctrain-modal" || event.target.id == "msound-modal" || event.target.id == "284-hof-modal") {
		$("#" + event.target.id).fadeOut("fast", function() { event.target.style.display = "none"; });
	}
}

/* 13-2-2022 Update: Remove the mc_signup form or whatever that's called, does nothing. */
$(document).ready(function() {
        let selectedTab = "notice";

        $('.filter-btn').click(function() {
            /* Get the button value */
            let val = $(this).attr("value");

            /* Remove .selected from all elements with class filter-btn */
            $(".filter-btn").removeClass("selected")
            $(this).addClass("selected")
            
            var list = document.getElementsByClassName("dlsection");
            for (var i = 0; i < list.length; i++) {
                var elements = list.item(i)

                if(!elements.classList.contains(val) && val != "null") {
                    $(elements).fadeOut(300)
                } else {
                    $(elements).fadeIn(500)
                }
            }
        })

        $('.tab-btn').click(function() {
            /* Get the button value */
            selectedTab = $(this).attr("value");
            $(".tab-btn").removeClass("selected")
            $(`.tab-btn`).each(function() {
                var value = $(this).val();
                if(value == selectedTab) $(this).addClass('selected')
            });
            
            var list = document.getElementsByClassName("modalbody");
            for (var i = 0; i < list.length; i++) {
                var elements = list.item(i)

                if(!elements.classList.contains(selectedTab)) {
                    $(elements).hide()
                } else {
                    $(elements).show()
                }
            }
        })
	});   
});
