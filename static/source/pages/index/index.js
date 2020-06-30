/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.footer_btn').on('click', function () {
  var wrap = $(this).parents('.footer_accordeon__block');

  if ($(this).hasClass('footer_btn_active')) {
    console.log(1);
    $(this).removeClass('footer_btn_active');
    $(wrap).find('.footer_accordeon_content').removeClass('footer_accordeon_content_active');
  } else {
    console.log(2);
    $(wrap).find('.footer_accordeon_content').addClass('footer_accordeon_content_active');
    $(this).addClass('footer_btn_active');
  }
});
var inputHasFocus = $('.input_focus');
inputHasFocus.on('focus', function () {
  var focusFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
  focusFinder.addClass('label__style_active');
});
inputHasFocus.on('blur', function () {
  if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
    var blurFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
    blurFinder.removeClass('label__style_active');
  }
});

/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener('DOMContentLoaded', function () {
  var arrow_1 = document.getElementById('arrow_1');
  var button_1 = document.getElementById('button_1');
  var arrow_2 = document.getElementById('arrow_2');
  var button_2 = document.getElementById('button_2');
  var arrow_3 = document.getElementById('arrow_3');
  var button_3 = document.getElementById('button_3');
  var arrow_4 = document.getElementById('arrow_4');
  var button_4 = document.getElementById('button_4');
  var arrow_5 = document.getElementById('arrow_5');
  var button_5 = document.getElementById('button_5');
  create_animation(arrow_1, button_1);
  create_animation(arrow_2, button_2);
  create_animation(arrow_3, button_3);
  create_animation(arrow_4, button_4);
  create_animation(arrow_5, button_5);
});

function create_animation(arrow, button) {
  var x;
  var y;
  document.addEventListener('mousemove', function (e) {
    x = e.clientX / 10;
    y = e.clientY / 10;
    arrow.setAttribute("style", "margin-top: ".concat(y, "px; margin-right: ").concat(x, "px;")); // arrow.style.top = y + 'px';
    // arrow.style.right = x + 'px';
  });
  button.addEventListener('mouseenter', function () {
    arrow.style.opacity = 1;
  });
  button.addEventListener('mouseleave', function () {
    arrow.style.opacity = 0;
  });
}

$('#menu-toggle').click(function () {
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
});
$('.modal_search').on('click', function () {
  $('.search_menu').toggleClass('search_menu_active');
  $('body').toggleClass('body_active');
});
$('.modal_basket').on('click', function () {
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
}); // корзина ===========+>

$('.basket_input').on('blur', basket_blur);

function basket_blur() {
  var curr_user_num = $(this);
  var quantity_id;

  if (curr_user_num.val() >= 0) {} else {
    $(curr_user_num).val(1);
  }

  var item_id = $(this).attr('data-quantity_item_id');
  quantity_id = $(this).val();
  console.log('quantity_id: ', quantity_id); //   fetch(`/api/cart_item/${Number(item_id)}/`, {
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
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.basket_input').val();
    console.log('quantity_id: ', quantity_id); //   fetch(`/api/cart_item/${Number(item_id)}/`, {
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
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.basket_input').val();
    console.log('quantity_id: ', quantity_id); //   fetch(`/api/cart_item/${Number(item_id)}/`, {
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
  var wrap = $(this).parents('.basket_content_profile');
  $(wrap).css("right", '-100vw');
  $(wrap).css("max-height", '0px');
  setTimeout(function () {
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
    var now = new Date().getTime() - start;
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

var card_json = {
  img_src: './static/source/img/index/lite.png',
  name_basket: 'Вилка VEPR-H123',
  quantity: '1',
  price: '2500'
};

for (var index = 0; index < 5; index++) {
  $('.basket_content__block')[0].appendChild(create_basket_card(card_json));
}

function create_basket_card(content) {
  var basket_content_profile = document.createElement('div');
  basket_content_profile.classList.add('basket_content_profile');
  var basket_profile_img = document.createElement('div');
  basket_profile_img.classList.add('basket_profile_img');
  var profile_img = document.createElement('img');
  profile_img.classList.add('basket_profile_img');
  profile_img.setAttribute("src", content.img_src);
  var basket_right_content = document.createElement('div');
  basket_right_content.classList.add('basket_right_content');
  var basket_title__block = document.createElement('div');
  basket_title__block.classList.add('basket_title__block');
  var basket_title = document.createElement('div');
  basket_title.classList.add('basket_title', 'main__title', 'main__title_5');
  basket_title.textContent = content.name_basket;
  var basket_del = document.createElement('img');
  basket_del.classList.add('basket_del');
  basket_del.setAttribute("src", './static/source/img/index/trash.svg');
  var basket_bottom__wrap = document.createElement('div');
  basket_bottom__wrap.classList.add('basket_bottom__wrap');
  var basket_counter__block = document.createElement('div');
  basket_counter__block.classList.add('basket_counter__block');
  var basket_text = document.createElement('div');
  basket_text.classList.add('basket_text', 'sub_title', 'sub_title_2');
  basket_text.textContent = 'Кількість';
  var basket_counter = document.createElement('div');
  basket_counter.classList.add('basket_counter');
  var basket_prep = document.createElement('div');
  basket_prep.classList.add('basket_prep', 'basket_count', 'sub_title', 'sub_title_21');
  basket_prep.textContent = '-';
  var basket_input = document.createElement('input');
  basket_input.setAttribute("type", 'number');
  basket_input.setAttribute("value", content.quantity);
  basket_input.classList.add('basket_input', 'basket_count', 'main__title', 'main__title_5');
  var basket_next = document.createElement('div');
  basket_next.classList.add('basket_next', 'basket_count', 'sub_title', 'sub_title_21');
  basket_next.textContent = '+';
  var basket_sum__block = document.createElement('div');
  basket_sum__block.classList.add('basket_sum__block');
  var basket_price_title = document.createElement('div');
  basket_price_title.classList.add('basket_text', 'sub_title', 'sub_title_2');
  basket_price_title.textContent = 'Ціна';
  var basket_summ = document.createElement('div');
  basket_summ.classList.add('basket_summ', 'main__title', 'main__title_5');
  basket_summ.textContent = content.price + ' ' + 'грн.';
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

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.btn-lean_more').on('mouseenter', function () {
  $(this).addClass('is-focus-over');
  $(this).removeClass('is-focus-out');
});
$('.btn-lean_more').on('mouseleave', function () {
  $(this).addClass('is-focus-out');
  $(this).removeClass('is-focus-over');
});

/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/form_errors/index.js":
/*!*************************************************!*\
  !*** ../components/module/form_errors/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/form_errors/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  Onload();
});
/**
 * valide_form - Валідація форм
 * @param {selector form} ID Форми на яку підвішують валідацію
 * @param {class name} class групи куди виводять помилки
 * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
 *
 **/

function Onload() {
  valide_form('.footer_form', '.inp-vak-wrap', true);
  valide_form('#comment_form', '.inp-vak-wrap', true);
  valide_form('.registery_form', '.inp-vak-wrap', false);
}

function location_leng() {
  return location.pathname.split('/')[1];
}

function valide_form(id_form, append_error_box, check_request) {
  var check_request = check_request;

  if ($(id_form).length > 0) {
    var lang_site;
    var errore_text = {};
    lang_site = location_leng();
    console.log(id_form);

    switch (lang_site) {
      case 'uk':
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.rating = 'Оцінка товару є обов\'язкова';
        break;

      case 'ru':
        errore_text.required = 'Поле обязательно для заполнения';
        errore_text.email = 'Поле должно содержать email';
        errore_text.rating = 'Оценка товара является обязательная';
        break;

      case 'en':
        errore_text.required = 'The field is required';
        errore_text.email = 'The field must contain an email';
        errore_text.rating = 'Evaluation of the goods is required';
        break;

      default:
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.rating = 'Оцінка товару є обов\'язкова';
    }

    $(id_form).validate({
      errorPlacement: function errorPlacement(event, validator) {
        $(validator).parents(append_error_box).append($(event));
        $(validator).parents(append_error_box).addClass('is-error');
      },
      ignore: "not:hidden.product_rating",
      rules: {
        name: {
          required: true
        },
        user_send: {
          required: true
        },
        password: {
          required: true
        },
        phone: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        email: {
          required: errore_text.required,
          email: errore_text.email
        },
        name: {
          required: errore_text.required
        },
        phone: {
          required: errore_text.required
        },
        password: {
          required: errore_text.required
        },
        user_send: {
          required: errore_text.required
        }
      },
      submitHandler: function submitHandler(form) {
        event.preventDefault();
        var data = formSerialize({
          'form': form
        }); // send_form({'form': form,'data':data});

        var all_form_input = form.querySelectorAll('input'); // const all_form_textaria = form.querySelectorAll('textarea');

        for (var key in all_form_input) {
          if (all_form_input.hasOwnProperty(key)) {
            var element = all_form_input[key];
            console.log(element.type);
            $.fancybox.close();
          }
        }

        function send_form(params) {
          var form = params.form;
          var form_data = params.data;
          var url_form = form.action;
          var form_json = {};

          if (url_form != '') {
            $('.loader_all').addClass('loader_all-active');
            var loader = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
            document.getElementById('loader_all__wrap').innerHTML = loader;
            fetch(url_form, {
              method: 'POST',
              body: form_data
            }).then(function (data) {
              return data.json();
            }).then(function (data) {
              $('.loader_all').removeClass('loader_all-active');

              if (data.status == 'OK' && typeof data['status'] !== "undefined") {
                if (typeof data['redirect_url'] !== "undefined" && data.redirect_url != '') {
                  clear_input();
                  location.href = data.redirect_url;
                } else {// sayHi();
                }
              }
            });
          } else {
            console.error("URL Form is #".concat(params.form.id, " not fond "));
          }
        }

        function clear_input() {
          var TYPE_INPUT = {
            TEXT: 'text',
            EMAIL: 'email',
            CHECKBOX: 'checkbox',
            HIDDEN: 'hidden',
            TEL: 'tel',
            FILE: 'file'
          };
          var all_form_input = form.querySelectorAll('input');
          var all_form_textaria = form.querySelectorAll('textarea');

          for (var _key in all_form_textaria) {
            if (all_form_textaria.hasOwnProperty(_key)) {
              var _element = all_form_textaria[_key];
              _element.value = '';
            }
          }

          for (var _key2 in all_form_input) {
            if (all_form_input.hasOwnProperty(_key2)) {
              var _element2 = all_form_input[_key2];
              console.log(_element2);

              switch (_element2.type) {
                case TYPE_INPUT.TEXT:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.EMAIL:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.TEL:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.HIDDEN:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.FILE:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.CHECKBOX:
                  $(_element2).prop("checked", false);
                  break;
              }
            }
          }
        }

        function formSerialize(params) {
          var form = params.form;
          var serialize = $(form).serializeArray();
          var data = {};
          data['inputs'] = [], data['item_category_ids'] = [], data['item_ids'] = [], data['inputs'] = [];
          var inputs_other = form.querySelectorAll('input[name=other]');
          Array.apply(null, inputs_other).map(function (item) {
            var categories_input = $(item).parents('.form_container__main').find('.form_box__header-input');
            data['inputs'].push({
              'item_category_id': categories_input[0].name,
              'text': item.value
            });
          });
          $(serialize).each(function (index, input) {
            if (input.value == 'category') {
              data['item_category_ids'].push(input.name);
            } else if (input.value == 'item') {
              data['item_ids'].push(input.name);
            } else {
              data[input.name] = input.value;
            }
          });
          var file_logo__life = form.querySelectorAll('#file_logo__life')[0];
          var Formdata = new FormData();

          if (file_logo__life != undefined) {
            if (file_logo__life.files[0] !== undefined) {
              Formdata.append('logo', file_logo__life.files[0]);
            }
          }

          Formdata.append('data', JSON.stringify(data));
          return Formdata;
        }
      }
    });
  }
}

/***/ }),

/***/ "../components/module/form_errors/index.scss":
/*!***************************************************!*\
  !*** ../components/module/form_errors/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/five_section.scss":
/*!***************************************************!*\
  !*** ../components/pages/index/five_section.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/four_section.scss":
/*!***************************************************!*\
  !*** ../components/pages/index/four_section.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/index.js":
/*!******************************************!*\
  !*** ../components/pages/index/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _second_section_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second_section.scss */ "../components/pages/index/second_section.scss");
/* harmony import */ var _second_section_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_second_section_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _three_section_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three_section.scss */ "../components/pages/index/three_section.scss");
/* harmony import */ var _three_section_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_three_section_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _four_section_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./four_section.scss */ "../components/pages/index/four_section.scss");
/* harmony import */ var _four_section_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_four_section_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _five_section_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./five_section.scss */ "../components/pages/index/five_section.scss");
/* harmony import */ var _five_section_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_five_section_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _six_section_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./six_section.scss */ "../components/pages/index/six_section.scss");
/* harmony import */ var _six_section_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_six_section_scss__WEBPACK_IMPORTED_MODULE_5__);






skrollr.init();
/** @preserve jQuery animateNumber plugin v0.0.14
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */
// ['...'] notation using to avoid names minification by Google Closure Compiler

(function ($) {
  var reverse = function reverse(value) {
    return value.split('').reverse().join('');
  };

  var defaults = {
    numberStep: function numberStep(now, tween) {
      var floored_number = Math.floor(now),
          target = $(tween.elem);
      target.text(floored_number);
    }
  };

  var handle = function handle(tween) {
    var elem = tween.elem;

    if (elem.nodeType && elem.parentNode) {
      var handler = elem._animateNumberSetter;

      if (!handler) {
        handler = defaults.numberStep;
      }

      handler(tween.now, tween);
    }
  };

  if (!$.Tween || !$.Tween.propHooks) {
    $.fx.step.number = handle;
  } else {
    $.Tween.propHooks.number = {
      set: handle
    };
  }

  var extract_number_parts = function extract_number_parts(separated_number, group_length) {
    var numbers = separated_number.split('').reverse(),
        number_parts = [],
        current_number_part,
        current_index,
        q;

    for (var i = 0, l = Math.ceil(separated_number.length / group_length); i < l; i++) {
      current_number_part = '';

      for (q = 0; q < group_length; q++) {
        current_index = i * group_length + q;

        if (current_index === separated_number.length) {
          break;
        }

        current_number_part = current_number_part + numbers[current_index];
      }

      number_parts.push(current_number_part);
    }

    return number_parts;
  };

  var remove_precending_zeros = function remove_precending_zeros(number_parts) {
    var last_index = number_parts.length - 1,
        last = reverse(number_parts[last_index]);
    number_parts[last_index] = reverse(parseInt(last, 10).toString());
    return number_parts;
  };

  $.animateNumber = {
    numberStepFactories: {
      /**
       * Creates numberStep handler, which appends string to floored animated number on each step.
       *
       * @example
       * // will animate to 100 with "1 %", "2 %", "3 %", ...
       * $('#someid').animateNumber({
       *   number: 100,
       *   numberStep: $.animateNumber.numberStepFactories.append(' %')
       * });
       *
       * @params {String} suffix string to append to animated number
       * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
       */
      append: function append(suffix) {
        return function (now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);
          target.prop('number', now).text(floored_number + suffix);
        };
      },

      /**
       * Creates numberStep handler, which format floored numbers by separating them to groups.
       *
       * @example
       * // will animate with 1 ... 217,980 ... 95,217,980 ... 7,095,217,980
       * $('#world-population').animateNumber({
       *    number: 7095217980,
       *    numberStep: $.animateNumber.numberStepFactories.separator(',')
       * });
       * @example
       * // will animate with 1% ... 217,980% ... 95,217,980% ... 7,095,217,980%
       * $('#salesIncrease').animateNumber({
       *   number: 7095217980,
       *   numberStep: $.animateNumber.numberStepFactories.separator(',', 3, '%')
       * });
       *
       * @params {String} [separator=' '] string to separate number groups
       * @params {String} [group_length=3] number group length
       * @params {String} [suffix=''] suffix to append to number
       * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
       */
      separator: function separator(_separator, group_length, suffix) {
        _separator = _separator || ' ';
        group_length = group_length || 3;
        suffix = suffix || '';
        return function (now, tween) {
          var negative = now < 0,
              floored_number = Math.floor((negative ? -1 : 1) * now),
              separated_number = floored_number.toString(),
              target = $(tween.elem);

          if (separated_number.length > group_length) {
            var number_parts = extract_number_parts(separated_number, group_length);
            separated_number = remove_precending_zeros(number_parts).join(_separator);
            separated_number = reverse(separated_number);
          }

          target.prop('number', now).text((negative ? '-' : '') + separated_number + suffix);
        };
      }
    }
  };

  $.fn.animateNumber = function () {
    var options = arguments[0],
        settings = $.extend({}, defaults, options),
        target = $(this),
        args = [settings];

    for (var i = 1, l = arguments.length; i < l; i++) {
      args.push(arguments[i]);
    } // needs of custom step function usage


    if (options.numberStep) {
      // assigns custom step functions
      var items = this.each(function () {
        this._animateNumberSetter = options.numberStep;
      }); // cleanup of custom step functions after animation

      var generic_complete = settings.complete;

      settings.complete = function () {
        items.each(function () {
          delete this._animateNumberSetter;
        });

        if (generic_complete) {
          generic_complete.apply(this, arguments);
        }
      };
    }

    return target.animate.apply(target, args);
  };
})(jQuery);

var slickFinder1 = $('.bike_trailer__block').length;

if (slickFinder1 >= 1) {
  $('.bike_trailer__block').on('init', function (event, slick) {
    $('.slick-active .slide-name').removeClass('anim_text');
    $('.slick-active .slide-img').removeClass('anim_img'); //applyHiddenClass();
  });
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
  $('.bike_trailer__block').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var count_cloned = $('.bike_trailer__block').find('.slick-cloned').length;
    var count_block = $('.bike_trailer__block').find('.slick-slide').length;
    var main_sum = count_block - count_cloned;
    var current_slide = currentSlide + 1;
    var one_slide = 100 / main_sum;
    var reuslt = one_slide * current_slide;
    $('.line_active').css('width', "".concat(reuslt, "%"));
  });
  $('.bike_trailer__block').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slide-name').css('left', '0%');
    $('.slick-active .slide-name').css('left', '-150%');
  }); //

  var currSlide = 0;
  var nextSlide = 0;

  function applyHiddenClass() {
    $.each($('.slick-slide'), function () {
      if ($(this).attr('aria-hidden') == 'true') {
        $(this).find('.slide-name').addClass('anim_text');
        $(this).find('.slide-img').addClass('anim_img');
      } else {
        $(this).find('.slide-name').removeClass('anim_text');
        $(this).find('.slide-img').removeClass('anim_img');
      }
    });
  }

  $('.bike_trailer__block').on('afterChange', function (event, slick, currentSlide) {
    nextSlide = currentSlide;

    if (nextSlide !== currSlide) {
      $('.slick-active .slide-name').removeClass('animated zoomIn');
      $('.slick-active .slide-name').addClass('anim_text');
      $('.slick-active .slide-img').addClass('anim_img');
    }
  });
  $('.bike_trailer__block').on('setPosition', function (event, slick, currentSlide) {
    if (nextSlide !== currSlide) {
      $('.slick-active .slide-name').removeClass('anim_text');
      $('.slick-active .slide-img').removeClass('anim_img');
      $('.slick-active .slide-name').addClass('animated zoomIn');
    }

    applyHiddenClass();
  });
  $('.bike_trailer__block').on('beforeChange', function (event, slick, currentSlide) {
    currSlide = currentSlide;
  }); //
}

function find_width_progress() {
  var count_cloned = $('.bike_trailer__block').find('.slick-cloned').length;
  var count_block = $('.bike_trailer__block').find('.slick-slide').length;
  var main_sum = count_block - count_cloned;
  var text_num;

  if (main_sum <= 9) {
    text_num = '0' + main_sum;
  } else {
    text_num = main_sum;
  }

  $('.last_click_num').text(text_num);
  $('.line_active').css('width', "".concat(100 / main_sum, "%"));
  return main_sum;
}

var slickFinder2 = $('.eleek_slider__wrap').length;

if (slickFinder2 >= 1) {
  function setSlideVisibility() {
    //Find the visible slides i.e. where aria-hidden="false"
    var visibleSlides = $('.eleek_prev_arrow').find('.slick-slideshow__slide[aria-hidden="false"]'); //Make sure all of the visible slides have an opacity of 1

    $(visibleSlides).each(function () {
      $(this).css('opacity', 1);
    }); //Set the opacity of the first and last partial slides.

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
    responsive: [{
      breakpoint: 1710,
      settings: {
        centerPadding: '250px'
      }
    }, {
      breakpoint: 1000,
      settings: {
        centerPadding: '150px'
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px'
      }
    }]
  });
  $('.eleek_slider__wrap').slick('slickGoTo', 1);
  setSlideVisibility();
  $('.eleek_slider__wrap').on('afterChange', function () {
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
    responsive: [{
      breakpoint: 934,
      settings: {
        centerPadding: '150px'
      }
    }, {
      breakpoint: 676,
      settings: {
        centerPadding: '100px'
      }
    }, {
      breakpoint: 419,
      settings: {
        slidesToShow: 2,
        centerPadding: '0'
      }
    }]
  });
  $('.complect__wrap').slick('slickGoTo', 1);
  setSlideVisibility();
  $('.complect__wrap').on('afterChange', function () {
    setSlideVisibility();
  });
}

var index_wow_1 = new WOW({
  boxClass: 'preferens__wrap',
  // animated element css class (default is wow)
  animateClass: 'preferens_anim',
  // animation css class (default is animated)
  offset: 85,
  // distance to the element when triggering the animation (default is 0)
  mobile: true,
  // trigger animations on mobile devices (default is true)
  live: true,
  // act on asynchronously loaded content (default is true)
  scrollContainer: null,
  // optional scroll container selector, otherwise use window,
  resetAnimation: true
});
index_wow_1.init();
var check_num = setInterval(function () {
  console.log(1);

  if ($('.preferens__wrap').hasClass('preferens_anim')) {
    console.log('!!!');
    $({
      blurRadius: 5
    }).animate({
      blurRadius: 0
    }, {
      duration: 2000,
      easing: "swing",
      step: function step() {
        $(".lines").css({
          "-webkit-filter": "blur(" + this.blurRadius + "px)",
          filter: "blur(" + this.blurRadius + "px)"
        });
      }
    });
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(" ");
    $(".lines").each(function () {
      var tcount = $(this).data("count");
      $(this).animateNumber({
        number: tcount,
        easing: "easeInQuad",
        // "font-size": "40px",
        numberStep: comma_separator_number_step
      }, 2000);
    });
    clearInterval(check_num);
  }
}, 500);
check_num; // var index_wow_1 = new WOW(
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

$(window).resize(function () {// create_slider();
}); // create_slider();
// function create_slider() {
//   let width = window.innerWidth;
//   console.log('width: ', width);
// }

/***/ }),

/***/ "../components/pages/index/index.scss":
/*!********************************************!*\
  !*** ../components/pages/index/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/second_section.scss":
/*!*****************************************************!*\
  !*** ../components/pages/index/second_section.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/six_section.scss":
/*!**************************************************!*\
  !*** ../components/pages/index/six_section.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/three_section.scss":
/*!****************************************************!*\
  !*** ../components/pages/index/three_section.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/interface/button */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_form_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/module/form_errors */ "../components/module/form_errors/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_index_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/pages/index/index */ "../components/pages/index/index.js");
// script interface


 // script common elements

 // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map