import './index.scss';

$('#menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.scroll_menu').toggleClass('scroll_menu_active');
    $('body').toggleClass('body_active');
    $('.nav_menu__block').toggleClass('nav_menu__block_active');
    $('.header_logos').toggleClass('header_logos_active');


    $('.scroll_top__block').toggleClass('scroll_top__block_active');
    $('.scroll_bottom__block').toggleClass('scroll_bottom__block_active');
    if ($('.logo__wrap').hasClass('logo_wrap_active')) {
        $('.logo__wrap').removeClass('logo_wrap_active');
        $('.logo__wrap').addClass('logo_wrap_native');
    } else {
        $('.logo__wrap').addClass('logo_wrap_active');
        $('.logo__wrap').removeClass('logo_wrap_native');
    }
    
        
  })
$('.modal_search').on('click', function() {
    $('.search_menu').toggleClass('search_menu_active');
    $('body').toggleClass('body_active');
});

$('.modal_basket').on('click', function() {
    $('.basket_menu').toggleClass('basket_menu_active');
    $('.black_bg').toggleClass('black_bg_active');
    $('body').toggleClass('body_active');

    
    if ($('.basket_content__block')[0].childElementCount == 1) {
        $('.none_content_send').text('Ваша корзина порожня');
        $('.none_content_send').addClass('none_content_send_active');
      } else {
        $('.none_content_send').text('');
        $('.none_content_send').removeClass('none_content_send_active');
      }
});

// корзина ===========+>


$('.basket_input').on('blur', basket_blur);
function basket_blur() {
    let curr_user_num = $(this);
    let quantity_id;
    if (curr_user_num.val() >= 0) {
      
    } else {
        $(curr_user_num).val(1);
    }
      let item_id = $(this).attr('data-quantity_item_id');
      quantity_id = $(this).val();
      console.log('quantity_id: ', quantity_id);
      
    //   fetch(`/api/cart_item/${Number(item_id)}/`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({
    //       quantity: Number(quantity_id),
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //   })
    //     .then(data => {
    //       return data.json();
    //     })
    //     .then(data => {
    //       var old_price = $('.summ_cart').text();
    //       var old_item_price = $(this).parents('.basket_card').find('.all_items_price');
    //       number_to(".summ_cart", Number(old_price), data.cart_total_price, 200);
    //       number_to(old_item_price, Number(old_item_price.text()), data.cart_item_total_price, 200);

    //     });
    
}


  $('.basket_prep').on('click', basket_minus);
  function basket_minus() {
    var current_basket_input = $(this).parents('.basket_counter').find('.basket_input').val();
    if (current_basket_input == 1) {
      console.log('меньше не може бути');
    } else {
      $(this).parents('.basket_counter').find('.basket_input').val(Number(current_basket_input) - 1);
      let item_id = $(this).attr('data-quantity_item_id');
      let quantity_id = $(this).parents('.basket_counter').find('.basket_input').val();
      console.log('quantity_id: ', quantity_id);
      
    //   fetch(`/api/cart_item/${Number(item_id)}/`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({
    //       quantity: Number(quantity_id),
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //   })
    //     .then(data => {
    //       return data.json();
    //     })
    //     .then(data => {
    //       var old_price = $('.summ_cart').text();
    //       var old_item_price = $(this).parents('.basket_card').find('.all_items_price');
    //       number_to(".summ_cart", Number(old_price), data.cart_total_price, 200);
    //       number_to(old_item_price, Number(old_item_price.text()), data.cart_item_total_price, 200);

    //     });

      // generate_api_move(this, 'data-quantity_item_id', '/api/change_cart_item_amount/', '?cart_item_id=', this);
    } 
  }

  $('.basket_next').on('click', basket_plus);
  function basket_plus() {
    var current_basket_input = $(this).parents('.basket_counter').find('.basket_input').val();

    if (current_basket_input == 99999) {
      console.log('більше не може бути');
    } else {
      $(this).parents('.basket_counter').find('.basket_input').val(Number(current_basket_input) + 1);

      let item_id = $(this).attr('data-quantity_item_id');
      let quantity_id = $(this).parents('.basket_counter').find('.basket_input').val();
      console.log('quantity_id: ', quantity_id);
      
    //   fetch(`/api/cart_item/${Number(item_id)}/`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({
    //       quantity: Number(quantity_id),
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //   })
    //     .then(data => {
    //       return data.json();
    //     })
    //     .then(data => {
    //       var old_price = $('.summ_cart').text();
    //       var old_item_price = $(this).parents('.basket_card').find('.all_items_price');
    //       number_to(".summ_cart", Number(old_price), data.cart_total_price, 200);
    //       number_to(old_item_price, Number(old_item_price.text()), data.cart_item_total_price, 200);

    //     });
    } 
  }
  $('.basket_del').on('click', basket_delete);
  function basket_delete() {
    let wrap = $(this).parents('.basket_content_profile');
    $(wrap).css("right", '-100vw');
    $(wrap).css("max-height", '0px');
    setTimeout(() => {
        $(wrap).remove();

        if ($('.basket_content__block')[0].childElementCount == 1) {
            $('.none_content_send').text('Ваша корзина порожня');
            $('.none_content_send').addClass('none_content_send_active');
          } else {
            $('.none_content_send').text('');
            $('.none_content_send').removeClass('none_content_send_active');
          }
    }, 300);
    
  }
  
  function number_to(id, from, to, duration) {

    var element = id;
    var start = new Date().getTime();
    setTimeout(function () {
      var now = (new Date().getTime()) - start;
      var progress = now / duration;
      var result = Math.floor((to - from) * progress + from);
      var test = from;
      test = progress < 1 ? result : to;
      if (test == 'NaN') {
        element.text(Math.floor((to - from) * progress + from));

      } else {
        element.text(test);
      }
      if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
  }

  let card_json = {
    img_src: './static/source/img/index/lite.png',
    name_basket: 'Вилка VEPR-H123',
    quantity: '1',
    price: '2500',
  }
  for (let index = 0; index < 5; index++) {
    $('.basket_content__block')[0].appendChild(create_basket_card(card_json));
  }
  

function create_basket_card(content) {
        let basket_content_profile = document.createElement('div');
        basket_content_profile.classList.add('basket_content_profile');
        
        let basket_profile_img = document.createElement('div');
        basket_profile_img.classList.add('basket_profile_img');

        let profile_img = document.createElement('img');
        profile_img.classList.add('basket_profile_img');
        profile_img.setAttribute(`src`, content.img_src);

        let basket_right_content = document.createElement('div');
        basket_right_content.classList.add('basket_right_content');
        
        let basket_title__block = document.createElement('div');
        basket_title__block.classList.add('basket_title__block');

        let basket_title = document.createElement('div');
        basket_title.classList.add('basket_title', 'main__title', 'main__title_5');
        basket_title.textContent = content.name_basket;

        let basket_del = document.createElement('img');
        basket_del.classList.add('basket_del');
        basket_del.setAttribute(`src`, './static/source/img/index/trash.svg');

        let basket_bottom__wrap = document.createElement('div');
        basket_bottom__wrap.classList.add('basket_bottom__wrap');

        let basket_counter__block = document.createElement('div');
        basket_counter__block.classList.add('basket_counter__block');

        let basket_text = document.createElement('div');
        basket_text.classList.add('basket_text', 'sub_title', 'sub_title_2');
        basket_text.textContent = 'Кількість';

        let basket_counter = document.createElement('div');
        basket_counter.classList.add('basket_counter');

        let basket_prep = document.createElement('div');
        basket_prep.classList.add('basket_prep', 'basket_count', 'sub_title', 'sub_title_21');
        basket_prep.textContent = '-';

        let basket_input = document.createElement('input');
        basket_input.setAttribute(`type`, 'number');
        basket_input.setAttribute(`value`, content.quantity);
        basket_input.classList.add('basket_input', 'basket_count', 'main__title', 'main__title_5');

        let basket_next = document.createElement('div');
        basket_next.classList.add('basket_next', 'basket_count', 'sub_title', 'sub_title_21');
        basket_next.textContent = '+';

        let basket_sum__block = document.createElement('div');
        basket_sum__block.classList.add('basket_sum__block');

        let basket_price_title = document.createElement('div');
        basket_price_title.classList.add('basket_text', 'sub_title', 'sub_title_2');
        basket_price_title.textContent = 'Ціна';

        let basket_summ = document.createElement('div');
        basket_summ.classList.add('basket_summ', 'main__title', 'main__title_5');
        basket_summ.textContent = content.price + ' ' +'грн.';


        basket_content_profile.appendChild(basket_profile_img);
        basket_profile_img.appendChild(profile_img);
        basket_content_profile.appendChild(basket_right_content);
        basket_right_content.appendChild(basket_title__block);
        basket_title__block.appendChild(basket_title);
        basket_title__block.appendChild(basket_del);
        basket_right_content.appendChild(basket_bottom__wrap);
        basket_bottom__wrap.appendChild(basket_counter__block);
        basket_counter__block.appendChild(basket_text);
        basket_counter__block.appendChild(basket_counter);
        basket_counter.appendChild(basket_prep);
        basket_counter.appendChild(basket_input);
        basket_counter.appendChild(basket_next);
        basket_bottom__wrap.appendChild(basket_sum__block);
        basket_sum__block.appendChild(basket_price_title);
        basket_sum__block.appendChild(basket_summ);

        $(basket_del).on('click', basket_delete);
        $(basket_next).on('click', basket_plus);
        $(basket_prep).on('click', basket_minus);
        $(basket_input).on('blur', basket_blur);


        

        return basket_content_profile;
}

