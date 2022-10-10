$(document).ready(function () {

    /***** PAGE PRELOADER *******/

    $('body').jpreLoader({

        showSplash: true,

        autoClose: true,

        splashID: "#preloader",

        showPercentage: true,

        splashFunction: function () {

        }

    });

    /***** END PAGE PRELOADER *******/

    /***** BACKGROUND-IMAGE ANIMATION  *******/
    var counter = 0;
    setInterval(function () {
        counter -= 1;
        $('.hero-section').css('background-position', counter + 'px 0');
    }, 50);

    var counter2 = 0;
    setInterval(function () {
        counter2 += 1;
        $('.villain-section').css('background-position', counter2 + 'px 0');
    }, 30);

    /***** END OF BACKGROUND-IMAGE ANIMATION  *******/


    /***** OPENING NAVIGATION MENU  *******/

    $('.menuOpener').click(openSiteMenu);

    function openSiteMenu() {

        $(this).fadeOut();

        $(".mainMenu").animate({
            'left': '0%'
        });

    }

    /***** CLOSING NAVIGATION MENU  *******/

    $(".mainMenu .menuCloser").click(closeMenu);

    function closeMenu() {

        $('.menuOpener').fadeIn();

        $(".mainMenu").animate({
                'left': '-100%'
            },
            1000,
            function () {});
    }

    /***** CHANGING BACKGROUND IMAGES ON HOVER  *******/

    $(".mainMenu .nav-links a").hover(transitionBackground, defaultBackground);

    var currentBackground = '';

    function transitionBackground() {

        currentBackground = $(this).data('background');

        console.log(currentBackground);

        $(".mainMenu .backgroundImage." + currentBackground).stop().fadeIn();

    }

    function defaultBackground() {

        console.log($(".mainMenu .backgroundImage").stop().fadeOut());

    }

    /***** ISOTOPE JS  *******/
    //initiate isotope
    var $grid = $('.grid').isotope({

        // options
        itemSelector: '.character-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }

    });

    $grid.imagesLoaded().progress(
        function () {
            $grid.isotope('layout');
        }
    );


    // filter characters on button click
    $('.filter-button-group').on('click', '.button', function () {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });

        // change is-checked class on buttons
        $('.filter-button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

    });

    /***** END OF ISOTOPE JS  *******/

    /***** HORIZONTAL ON SCROLL PROGRESS BAR   *******/

    var bar_bg = $("#scrollbar-bg");
    bar_bg.css("min-width", $(document).width() + "px");

    $(window).resize(function () {
        bar_bg.css("min-width", $(document).width() + "px");
    });

    $(window).scroll(function (e) {
        // Change the width of the progress bar
        var bar = $("#scrollbar"),
            dw = $(document).width(),
            dh = $(document).height(),
            wh = $(window).height(),
            pos = $(document).scrollTop(),
            bw = ((pos / (dh - wh)) * 100);

        bar.css("width", bw + "%");
    });

    /***** END OF HORIZONTAL ON SCROLL PROGRESS BAR  *******/

    /***** SCROLLSPY FOR THE MINI NAVIGATION MENU  *******/

    //add smooth scrolling 
    $(".mini-navigation .nav-section .nav-list .list a").on('click', function (event) {

        //prevent default anchor click behavoir
        event.preventDefault();

        //ensure that this.hash has a value
        if (this.hash !== "") {

            //store hash
            var hash = this.hash;

            //smooth scroll effect
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 700, function () {});

        }
    });

    /***** END OF SCROLLSPY FOR THE MINI NAVIGATION MENU  *******/

    /***** SCROLLSPY FOR THE MINI NAVIGATION MENU  *******/

    //add smooth scrolling 
    $(".scrollup").on('click', function (event) {

        //prevent default anchor click behavoir
        event.preventDefault();

        //ensure that this.hash has a value
        if (this.hash !== "") {

            //store hash
            var hash = this.hash;

            //smooth scroll effect
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 700, function () {});

        }
    });

    /***** END OF SCROLLSPY FOR THE MINI NAVIGATION MENU  *******/

    /** SCROLL UP ICON **/
    $(document).bind('scroll', function () {

        var $scrollUp= $(".scrollup");
        $scrollUp.toggleClass('scrollup-visible', $(this).scrollTop() > $scrollUp.height());
     
    });
    /** END OF SCROLL UP ICON **/

    //slideListContainer section
    $('.slideListContainer').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });

});