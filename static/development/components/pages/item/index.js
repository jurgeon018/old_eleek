import './index.scss';

console.log(1);
let slickFinder0 = $('.item_slider__block').length;
  if (slickFinder0 >= 1) {
console.log(2);

    // $('.main_card_slider').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   asNavFor: '.mini_slider'
    // });

    // $('.mini_slider').slick({
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   vertical: true,
    //   verticalSwiping: true,
    //   focusOnSelect: true,
    //   asNavFor: '.main_card_slider',
    // });

    $('.main_card_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.mini_slider'
      });
      $('.mini_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main_card_slider',
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
      });
  }

  $('.color_change_btn').on('click', function() {
        let wrap_content = $(this).parents('.color_change__wrap').find('.color_change_content');

      if ($(this).hasClass('color_change_btn_active')) {
        $(this).removeClass('color_change_btn_active');
        $(wrap_content).removeClass('color_change_content_active');
      } else {
        $(this).addClass('color_change_btn_active');
        $(wrap_content).addClass('color_change_content_active');
      }
  })
  $('.color_change_select').on('click', function() {
      let wrap = $(this).parents('.color_change__wrap');
      let current_color = $(this).attr('data-color');

      if ($(this).hasClass('white_color_change_oval')) {
        $(wrap).find('.main_color_change_oval').addClass('border_for_oval');
      } else {
        $(wrap).find('.main_color_change_oval').removeClass('border_for_oval');
      }

      $(wrap).find('.main_color_change_oval').css('background', `${current_color}`);
      $(wrap).find('.main_color_change_oval').attr('data-color', `${current_color}`);
      $(wrap).find('.color_change_select').find('.success_color').removeClass('success_color_active');
      $(this).find('.success_color').addClass('success_color_active');


  });
$('.option_content_prof').on('click', function() {
    $(this).toggleClass('option_content_prof_active');
})


$(".item_tab_link").on("click", function(){
    ($(this)[0].dataset.tab);
    var className = ($(this)[0].dataset.tab);
    console.log(className);
    ($(".item_tab_link").removeClass("item_tab_link_active"));
     ($(this).addClass("item_tab_link_active"));
    ($(".item_tab_content").removeClass("item_tab_content_active"));
        ($("#"+$(this)[0].dataset.tab).addClass("item_tab_content_active"));

});

function check_item_comment() {
let item_wrap = $('.comment_profile__wrapper');
    if ($(item_wrap)[0].childElementCount == 0) {
        
        $('.none_comments_text').removeClass('none_comments_text_hidden');
        $('.comment_kredit__block').addClass('kredit__block_none');
    } else {
        $('.none_comments_text').addClass('none_comments_text_hidden');
        $('.comment_kredit__block').removeClass('kredit__block_none');
    }
}


$('.item_tab_link_3').on('click', function() {
    check_item_comment();
});
$('.add_comment_btn').on('click', function() {
    $.fancybox.open({
        src: '#comment_form',
        touch: false
    });
});
$('.modal_comm').on('click', function() {
    $.fancybox.close({
        src: '#comment_form',
    });
});

if ($('.rating_item').length > 0) {
   
    $('.rating_item')[0].addEventListener('mouseout', function() {
        $('.rating_item').removeClass('rating_item_hover');
    });
    $('.rating_item')[0].addEventListener('mouseover', function(event) {
        var target = event.target;
        console.log(target.tagName);
        if (target.tagName != "IMG") {
            console.log(1);
        } else {
            console.log(2);
        }
    });
}
    
// $('.comment_form').fancybox({
// 	touch: {
//         vertical: false, // Allow to drag content vertically
//         momentum: false // Continue movement after releasing mouse/touch when panning
//       },
// });

$('.modal-review__rating-order-wrap > span').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parent().attr('data-rating-value', $(this).data('rating-value'));
});
$('.rating_review').on('click', function() {
    let current_rating = $(this).attr('data-rating-value');
    $('.hidden_rating_review').val(current_rating);
});
$('.generate_comment').on('click', function() {
    let wrap = $(this).parents('.comment_form');
    let comment_name = $(wrap).find('.comment_name').val();
    let comment_email = $(wrap).find('.comment_email').val();
    let comment_send = $(wrap).find('.comment_send').val();
    let comment_rating = $(wrap).find('.hidden_rating_review').val();
    let comment_json = {
        name: comment_name,
        email: comment_email,
        send: comment_send,
        rating: comment_rating
    }
    console.log('comment_json: ', comment_json);
    $('.comment_profile__wrapper')[0].prepend(create_comment(comment_json));
});

function create_comment(content) {
    let comment_profile = document.createElement('div');
    comment_profile.classList.add('comment_profile');

        let comment_name__block = document.createElement('div');
        comment_name__block.classList.add('comment_name__block');

        let comment_name = document.createElement('div');
        comment_name.classList.add('comment_name', 'color_black', 'standart_title', 'standart_title_4');
        comment_name.textContent = content.name;

        let comment_star = document.createElement('div');
        comment_star.classList.add('comment_star');

        

        let comment_text = document.createElement('div');
        comment_text.classList.add('comment_text', 'color_black', 'sub_title', 'sub_title_2');
        comment_text.textContent = content.send;
        



        comment_profile.appendChild(comment_name__block);
        comment_name__block.appendChild(comment_name);
        comment_name__block.appendChild(comment_star);

        let active_star = content.rating;
        let passive_star = 5 - content.rating;
        for (let index = 0; index < active_star; index++) {
            var svg_wrap = document.createElement('div');
            svg_wrap.classList.add('svg_rating__wrap');
            svg_wrap.innerHTML = `
            <svg class="rating_svg rating_svg_active" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
                <path fill-rule="evenodd" d="M9 16.5L3.71 19.281 4.72 13.391 0.44 9.219 6.355 8.359 9 3 11.645 8.359 17.56 9.219 13.28 13.391 14.29 19.281z" transform="translate(0 -3)"/>
            </svg>                    
            `;         
            comment_star.appendChild(svg_wrap);
        }
        for (let index = 0; index < passive_star; index++) {
            var svg_wrap = document.createElement('div');
            svg_wrap.classList.add('svg_rating__wrap');
            svg_wrap.innerHTML = `
            <svg class="rating_svg" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
                <path fill-rule="evenodd" d="M9 16.5L3.71 19.281 4.72 13.391 0.44 9.219 6.355 8.359 9 3 11.645 8.359 17.56 9.219 13.28 13.391 14.29 19.281z" transform="translate(0 -3)"/>
            </svg>                    
            `;         
            comment_star.appendChild(svg_wrap);
        }
        comment_profile.appendChild(comment_text);


        
        return comment_profile;
}

$('.price_option').on('click', function() {
    let all_price__block = $('.additional_price');
    let all_summ = Number($(all_price__block).text());
    console.log('all_summ: ', all_summ);
    let current_sum = $(this).attr('data-price-option');
    console.log('current_sum: ', current_sum);
        if ($(this).hasClass('option_content_prof_active')) {
            $(all_price__block).text(all_summ - Number(current_sum));
        } else {
            $(all_price__block).text(all_summ + Number(current_sum));
        }
});

