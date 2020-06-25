import './index.scss';
import './second_section.scss';
import './three_section.scss';
import './four_section.scss';
import './five_section.scss';
import './six_section.scss';


var slickFinder1 = $('.bike_trailer__block').length;
  if (slickFinder1 >= 1) {
    $('.bike_trailer__block').on('init', function(event, slick) {
      $('.slick-active .slide-name').removeClass('anim_text');
      $('.slick-active .slide-img').removeClass('anim_img');
      //applyHiddenClass();
    })
   
    $('.bike_trailer__block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '<div class="slick-first"><</div>',
        nextArrow: '<div class="slick-second">></div>',
        lazyLoad: "ondemand",
        speed: 1000,
        cssEase: 'linear',
        swipe: false
    });

    $('.slick-first').click(function () {
        $(".bike_trailer__block").slick('slickPrev');
      });
      $('.slick-second').click(function () {
        $(".bike_trailer__block").slick('slickNext');
      });

      find_width_progress();
      $('.bike_trailer__block').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let count_cloned = $('.bike_trailer__block').find('.slick-cloned').length;
        let count_block = $('.bike_trailer__block').find('.slick-slide').length;
        let main_sum = count_block - count_cloned;
        let current_slide = currentSlide + 1;
        let one_slide = 100 / main_sum;
        let reuslt = one_slide * current_slide;
        $('.line_active').css('width', `${reuslt}%`);

      });

      $('.bike_trailer__block').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.slide-name').css('left', '0%');
        $('.slick-active .slide-name').css('left', '-150%');
      });
      //
     
      
      var currSlide = 0;
      var nextSlide = 0;
      
      function applyHiddenClass() {
        $.each($('.slick-slide'), function() {
          if ($(this).attr('aria-hidden') == 'true') {
            $(this).find('.slide-name').addClass('anim_text');
            $(this).find('.slide-img').addClass('anim_img');

          } else {
            $(this).find('.slide-name').removeClass('anim_text');
            $(this).find('.slide-img').removeClass('anim_img');
          }
        });
      }
      
      $('.bike_trailer__block').on('afterChange', function(event, slick, currentSlide) {
        nextSlide = currentSlide;
        if (nextSlide !== currSlide) {
          $('.slick-active .slide-name').removeClass('animated zoomIn');
          $('.slick-active .slide-name').addClass('anim_text');
          $('.slick-active .slide-img').addClass('anim_img');
        }
      });
      
      $('.bike_trailer__block').on('setPosition', function(event, slick, currentSlide) {
        if (nextSlide !== currSlide) {
          $('.slick-active .slide-name').removeClass('anim_text');
          $('.slick-active .slide-img').removeClass('anim_img');
          $('.slick-active .slide-name').addClass('animated zoomIn');

        }
        applyHiddenClass();
      });
      
      $('.bike_trailer__block').on('beforeChange', function(event, slick, currentSlide) {
        currSlide = currentSlide;
      });
      
      //







        
  }

  function find_width_progress() {
      let count_cloned = $('.bike_trailer__block').find('.slick-cloned').length;
      let count_block = $('.bike_trailer__block').find('.slick-slide').length;
      let main_sum = count_block - count_cloned;
      let text_num;
        if (main_sum <= 9) {
          text_num = '0' + main_sum;
        } else {
          text_num = main_sum;
        }
      $('.last_click_num').text(text_num);
      $('.line_active').css('width', `${100 / main_sum}%`);
      return main_sum;
      
      
  }

  var slickFinder2 = $('.eleek_slider__wrap').length;
  if (slickFinder2 >= 1) {

      function setSlideVisibility() {
        //Find the visible slides i.e. where aria-hidden="false"
        var visibleSlides = $('.eleek_prev_arrow').find('.slick-slideshow__slide[aria-hidden="false"]');
        //Make sure all of the visible slides have an opacity of 1
        $(visibleSlides).each(function() {
          $(this).css('opacity', 1);
        });
      
        //Set the opacity of the first and last partial slides.
        $(visibleSlides).first().prev().css('opacity', 0);
      }
      
      $('.eleek_slider__wrap').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '450px',
        arrows: true,
        prevArrow: '<div class="eleek_prev_arrow"></div>',
        nextArrow: '<div class="eleek_next_arrow"></div>',
        lazyLoad: "ondemand",
        responsive: [
          {
              breakpoint: 1710,
              settings: {
                centerPadding: '250px',
              }
          },
          {
              breakpoint: 1000,
              settings: {
                centerPadding: '150px',
              }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              centerPadding: '0px',
            }
        },
      ]
      });
      $('.eleek_slider__wrap').slick('slickGoTo', 1);
      setSlideVisibility();
      
      $('.eleek_slider__wrap').on('afterChange', function() {
        setSlideVisibility();
      });


    $('.eleek_prev_arrow').click(function () {
      $(".eleek_slider__wrap").slick('slickPrev');
    });
    $('.eleek_next_arrow').click(function () {
      $(".eleek_slider__wrap").slick('slickNext');
    });


    $('.complect__wrap').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      centerPadding: '200px',
      // arrows: true,
      lazyLoad: "ondemand",
      responsive: [
        {
            breakpoint: 934,
            settings: {
              centerPadding: '150px',
            }
        },
        {
            breakpoint: 676,
            settings: {
              centerPadding: '100px',
            }
        },
        {
          breakpoint: 419,
          settings: {
            slidesToShow: 2,
            centerPadding: '0',
          }
      },
    ]

    });
    $('.complect__wrap').slick('slickGoTo', 1);
      setSlideVisibility();
      
      $('.complect__wrap').on('afterChange', function() {
        setSlideVisibility();
      });
  }


  // var index_wow_1 = new WOW(
  //   {
  //     boxClass:     'video_block',      // animated element css class (default is wow)
  //     animateClass: 'video_style', // animation css class (default is animated)
  //     offset:       85,          // distance to the element when triggering the animation (default is 0)
  //     mobile:       true,       // trigger animations on mobile devices (default is true)
  //     live:         true,       // act on asynchronously loaded content (default is true)
  //     scrollContainer: null,    // optional scroll container selector, otherwise use window,
  //     resetAnimation: true, 
  //   }
  // );
  // index_wow_1.init();

  // var animFinder = $('.first_section').length;
  // if (animFinder >= 1) {
  //   setInterval(() => {
  //     if ($('.eleek_video').hasClass('video_style')) {
  //       $('.eleek_video').attr('autoplay', 'autoplay');
  //     }
  //   }, 100);
  // }
  
  $(window).resize(function() {
    // create_slider();
  });
  // create_slider();
  // function create_slider() {
  //   let width = window.innerWidth;
  //   console.log('width: ', width);
    
  // }
    
  