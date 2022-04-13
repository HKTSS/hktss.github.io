$(document).ready(function() {
    "use strict";
    var window_width = $(window).width()
    var window_height = window.innerHeight
    var header_height = $(".default-header").height()
    var header_height_static = $(".site-header.static").outerHeight()
    var fitscreen = window_height - header_height;
    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    /* ----- Dynamic Window resize ----- */
    // window.addEventListener("resize", setWindowSize); //Register event on window resize
    // function setWindowSize() {
    //     window_width = $(window).width(),
    //         window_height = window.innerHeight,
    //         header_height = $(".default-header").height(),
    //         header_height_static = $(".site-header.static").outerHeight(),
    //         fitscreen = window_height - header_height;
    //     $(".fullscreen").css("height", window_height)
    //     $(".fitscreen").css("height", fitscreen);
    // }


    /* -------- Active Sticky ---------- */
    $(".default-header").sticky({ topSpacing: 0 });

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $(window).load(function() {
        $('#preload').fadeOut();
    });

    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    if ($('.active-works-carousel').length) {
        $('.active-works-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 100,
            dots: true,
            autoplay: true,
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
    }


    if ($('.active-gallery').length) {
        $('.active-gallery').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            nav: true,
            navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"],
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
    }

    if ($('.active-blog-slider').length) {
        $('.active-blog-slider').owlCarousel({
            nav: false,
            loop: true,
            dots: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            animateOut: 'fadeOut',
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        });
    }

    // Select all links with hashes
    $('.navbar-nav a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function(event) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });


    /* When the user clicks anywhere outside of the modal, close it */
    window.onclick = function(event) {
        if (event.target.id == "705-modal" || event.target.id == "p4-modal" || event.target.id == "p3-modal" || event.target.id == "twltex-modal" || event.target.id == "ctrain-modal" || event.target.id == "msound-modal" || event.target.id == "284-hof-modal") {
            $("#" + event.target.id).fadeOut("fast", function() { event.target.style.display = "none"; });
        }
    }

    /* 13-2-2022 Update: Remove the mc_signup form or whatever that's called, does nothing. */
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

            if (!elements.classList.contains(val) && val != "null") {
                $(elements).fadeOut(300)
            } else {
                $(elements).fadeIn(500)
            }
        }
    })

    $('.dlbutton').click(function() {
        let url = $(this).attr("url")
        let checkBoxTarget = $(this).attr("check")
        if (url == undefined || url.length == 0) {
            return;
        }

        if (!document.getElementById(checkBoxTarget).checked) {
            alert('你必須同意以上事項，才能下載本檔案。');
            return;
        }

        window.open(url, "_blank").focus();
    });

    $('#scrolltop').click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $('.tab-btn').click(function() {
        /* Get the button value */
        selectedTab = $(this).attr("value");
        $(".tab-btn").removeClass("selected")
        $(`.tab-btn`).each(function() {
            var value = $(this).val();
            if (value == selectedTab) $(this).addClass('selected')
        });

        var list = document.getElementsByClassName("modalbody");
        for (var i = 0; i < list.length; i++) {
            var elements = list.item(i)

            if (!elements.classList.contains(selectedTab)) {
                $(elements).hide()
            } else {
                $(elements).show()
            }
        }
    })

    /* Looped every 100ms or 0.1 second */
    setInterval(() => {
        if ($(window).scrollTop() <= 10) {
            $('#scrolltop').css('opacity', '0.0');
        } else {
            $('#scrolltop').css('opacity', '1.0');
        }
    }, 100);
});