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
/******/ 	return __webpack_require__(__webpack_require__.s = "./constructor_setings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/admin_panel/index.js":
/*!************************************************************!*\
  !*** ../components/common_componentc/admin_panel/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/admin_panel/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

sessionStorage.setItem('admin_panell', 1);
console.log('finish'); // admin panel ============================>
// сторінка повина починатись по стандарту з admin_check = 1

var only_on_click = true;
var admin_panels = document.querySelectorAll('.db_content');
var admin_check = sessionStorage.getItem('admin_panell');
console.log('admin_check: ', admin_check);

if (admin_check == 0) {
  only_on_click = false;
  $('.admin_button').attr('data-title', 'Виключити редагування');
  $('.admin_checkbox').attr('checked', '');
  $('.db_content').addClass('db_content_active');
  admin_check = sessionStorage.getItem('admin_panell');
  admin_panels.forEach(function (item, index, array) {
    var link_adress = $(item).data('admin_url');
    var hidden_panel = document.createElement('div');
    hidden_panel.classList.add('db_hidden_content');
    var hidden_link = document.createElement('a');
    hidden_link.classList.add('db_hidden_link');
    hidden_link.setAttribute("href", link_adress);
    hidden_link.textContent = 'Редагувати';
    hidden_panel.appendChild(hidden_link);
    item.appendChild(hidden_panel);
  });
}

$('.svg_power').on('click', function () {
  admin_func();
});
$('.db_content').on('click', function () {
  if ($(this).hasClass('db_content_active')) {
    var current_url = $(this).attr('data-admin_url');
    window.open(current_url);
  }
});

function admin_func() {
  if (only_on_click) {
    only_on_click = false;
    $('.admin_button').attr('data-title', 'Виключити редагування');
    $('.db_content').addClass('db_content_active');
    sessionStorage.setItem('admin_panell', 0);
    admin_check = sessionStorage.getItem('admin_panell');
    admin_panels.forEach(function (item, index, array) {
      var link_adress = $(item).data('admin_url');
      var hidden_panel = document.createElement('div');
      hidden_panel.classList.add('db_hidden_content');
      var hidden_link = document.createElement('a');
      hidden_link.classList.add('db_hidden_link');
      hidden_link.setAttribute("href", link_adress);
      hidden_link.textContent = 'Редагувати';
      hidden_panel.appendChild(hidden_link);
      item.appendChild(hidden_panel);
    });
  } else {
    $('.admin_button').attr('data-title', 'Включити редагування');
    $('.db_content').removeClass('db_content_active');
    only_on_click = true;
    sessionStorage.setItem('admin_panell', 1);
    admin_check = sessionStorage.getItem('admin_panell');
    admin_panels.forEach(function (item, index, array) {
      $('.db_hidden_content').remove();
    });
  }
} // admin panel ============================>

/***/ }),

/***/ "../components/common_componentc/admin_panel/index.scss":
/*!**************************************************************!*\
  !*** ../components/common_componentc/admin_panel/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

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
  $('.basket_content__block').find('.basket_content_profile').remove();
  fetch("/api/cart_items/", {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    console.log('data: ', data);
    $('.basket_all_result').text("\u20B4 ".concat(Math.round(data.cart_total_price)));
    console.log('data: ', data.cart_items.length);
    var card_json = {
      img_src: '/static/source/img/index/lite.png',
      name_basket: 'Вилка VEPR-H123',
      quantity: '1',
      price: '2500'
    };

    for (var index = 0; index < data.cart_items.length; index++) {
      $('.basket_content__block')[0].appendChild(create_basket_card(card_json, data.cart_items[index]));
    }

    var checked = $('.basket_content__block').find('.basket_content_profile').length;
    console.log('checked: ', checked);

    if (checked == 0) {
      $('.none_content_send').text('Ваша корзина порожня');
      $('.none_content_send').addClass('none_content_send_active');
      $('.discount__block').css('opacity', '0');
      $('.basket_nobtn_wrap').css('display', 'block');
      $('.basket_btn_wrap').css('display', 'none');
    } else {
      $('.none_content_send').text('');
      $('.none_content_send').removeClass('none_content_send_active');
      $('.discount__block').css('opacity', '1');
      $('.basket_nobtn_wrap').css('display', 'none');
      $('.basket_btn_wrap').css('display', 'block');
    }
  });
}); // корзина ===========+>

$('.basket_input').on('blur', basket_blur);

function basket_blur() {
  var _this = this;

  var curr_user_num = $(this);
  var quantity_id;

  if (curr_user_num.val() > 0) {} else if (curr_user_num.val() <= 0 || curr_user_num.val() == '') {
    $(curr_user_num).val(1);
  }

  var item_id = $(this).attr('data-quantity_item_id');
  quantity_id = $(this).val();
  console.log('quantity_id: ', quantity_id);
  fetch("/api/cart_item/".concat(Number(item_id), "/"), {
    method: 'PATCH',
    body: JSON.stringify({
      quantity: Number(quantity_id)
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    console.log('data: ', data);
    $(_this).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
    $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
  });
}

$('.basket_del').on('click', basket_delete);

function basket_delete() {
  var _this2 = this;

  var wrap = $(this).parents('.basket_content_profile');
  $(wrap).css("right", '-100vw');
  $(wrap).css("max-height", '0px');
  setTimeout(function () {
    $(wrap).remove();

    if ($('.basket_content__block').find('.basket_content_profile').length == 0) {
      $('.none_content_send').text('Ваша корзина порожня');
      $('.none_content_send').addClass('none_content_send_active');
      $('.discount__block').css('opacity', '0');
      $('.basket_nobtn_wrap').css('display', 'block');
      $('.basket_btn_wrap').css('display', 'none');
    } else {
      $('.none_content_send').text('');
      $('.none_content_send').removeClass('none_content_send_active');
      $('.discount__block').css('opacity', '1');
      $('.basket_nobtn_wrap').css('display', 'none');
      $('.basket_btn_wrap').css('display', 'block');
    }
  }, 300);
  var item_id = $(this).attr('data-quantity_item_id');
  fetch("/api/cart_item/".concat(item_id), {
    method: 'DELETE'
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    console.log('data: ', data);
    $(_this2).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
    $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
  });
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

function create_basket_card(content, data) {
  console.log('data: ', data);
  var basket_content_profile = document.createElement('div');
  basket_content_profile.classList.add('basket_content_profile');
  var basket_profile_img = document.createElement('div');
  basket_profile_img.classList.add('basket_profile_img');
  var profile_img = document.createElement('img');
  profile_img.classList.add('basket_profile_img');
  profile_img.setAttribute("src", data.item.image_url);
  var basket_right_content = document.createElement('div');
  basket_right_content.classList.add('basket_right_content');
  var basket_title__block = document.createElement('div');
  basket_title__block.classList.add('basket_title__block');
  var basket_title = document.createElement('div');
  basket_title.classList.add('basket_title', 'main__title', 'main__title_5');
  basket_title.textContent = data.item.alt;
  var basket_del = document.createElement('img');
  basket_del.classList.add('basket_del', 'remove_prod_card');
  basket_del.setAttribute("data-quantity_item_id", data.id);
  basket_del.setAttribute("src", '/static/source/img/index/trash.svg');
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
  basket_prep.setAttribute("data-quantity_item_id", data.id);
  basket_prep.classList.add('basket_prep', 'basket_count', 'sub_title', 'sub_title_21');
  basket_prep.textContent = '-';
  var basket_input = document.createElement('input');
  basket_input.setAttribute("type", 'number');
  basket_input.setAttribute("value", data.quantity);
  basket_input.setAttribute("data-quantity_item_id", data.id);
  basket_input.classList.add('basket_input', 'basket_count', 'main__title', 'main__title_5', 'cart_counter', 'quan_cart_sum');
  var basket_next = document.createElement('div');
  basket_next.setAttribute("data-quantity_item_id", data.id);
  basket_next.classList.add('basket_next', 'basket_count', 'sub_title', 'sub_title_21');
  basket_next.textContent = '+';
  var basket_sum__block = document.createElement('div');
  basket_sum__block.classList.add('basket_sum__block');
  var basket_price_title = document.createElement('div');
  basket_price_title.classList.add('basket_text', 'sub_title', 'sub_title_2');
  basket_price_title.textContent = 'Ціна';
  var basket_summ = document.createElement('div');
  basket_summ.classList.add('basket_summ', 'main__title', 'main__title_5');
  basket_summ.textContent = data.item.price + ' ' + data.item.currency.code;
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

function counter_plus(name) {
  var count_var = $(name).text();
  count_num = Number(count_var);
  count_num++;
  $(name).text(count_num);
}

function counter_minus(name) {
  var count_var = $(name).text();
  count_num = Number(count_var);
  count_num--;
  $(name).text(count_num);
}

function basket_minus() {
  var _this3 = this;

  console.log(123);
  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();

  if (current_quan_sum == 1) {
    console.log('меньше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) - 1);
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
    console.log('quantity_id: ', quantity_id);
    fetch("/api/cart_item/".concat(Number(item_id), "/"), {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: Number(quantity_id)
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log('data: ', data);
      $(_this3).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
      $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
    });
  }
}

function basket_plus() {
  var _this4 = this;

  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
  console.log('current_quan_sum: ', current_quan_sum);

  if (current_quan_sum == 99999) {
    console.log('більше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) + 1);
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
    console.log('quantity_id: ', quantity_id);
    fetch("/api/cart_item/".concat(Number(item_id), "/"), {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: Number(quantity_id)
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log('data: ', data);
      $(_this4).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
      $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
    });
  }
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
$(".absolute_product_arrow").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});
$(".btn_standart_black").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});
$(".btn_standart_yellow").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});
$(".btn_standart_transparent").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
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

/***/ "../components/interface/form/elements/all_elements.js":
/*!*************************************************************!*\
  !*** ../components/interface/form/elements/all_elements.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../components/interface/form/elements/input/index.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea */ "../components/interface/form/elements/textarea/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio */ "../components/interface/form/elements/radio/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "../components/interface/form/elements/list/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color */ "../components/interface/form/elements/color/index.js");
/* harmony import */ var _radio_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio_v1 */ "../components/interface/form/elements/radio_v1/index.js");
// # import всіх елементів в формі:
// # INPUT "при наведені на текст він піднімається"
// # list список такий як в брифі
// # texaria 







/***/ }),

/***/ "../components/interface/form/elements/color/index.js":
/*!************************************************************!*\
  !*** ../components/interface/form/elements/color/index.js ***!
  \************************************************************/
/*! exports provided: form_color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form_color", function() { return form_color; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/color/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // let form__color = [...$(".form__color")];
// form__color.map((item) => {
//   const color = $(item).data("color");
//   switch (color) {
//     case "#ffffff":
//       $(item).css({ background: color, border: "1px solid #979797" });
//       break;
//     default:
//       $(item).css({ background: color });
//       break;
//   }
// });

function form_color(class_name) {
  var form__color = _toConsumableArray($(class_name));

  form__color.map(function (item) {
    var color = $(item).data("color");

    switch (color) {
      case "#ffffff":
        $(item).css({
          background: color,
          border: "1px solid #979797"
        });
        break;

      default:
        $(item).css({
          background: color
        });
        break;
    }
  });
}
form_color('.form__color');

/***/ }),

/***/ "../components/interface/form/elements/color/index.scss":
/*!**************************************************************!*\
  !*** ../components/interface/form/elements/color/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/input/index.js":
/*!************************************************************!*\
  !*** ../components/interface/form/elements/input/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/input/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var field_inputs = $('.input-field');

if (field_inputs.length > 0) {
  field_inputs.on('focus', function () {
    $(this).parents('.input').addClass('in-focus');
    $(this).parents('.input').removeClass('is-error');
  });
  field_inputs.on('blur', function () {
    if ($(this).val().length < 1 || $(this).val() == '+38(___) ___-____') {
      $(this).parents('.input').removeClass('in-focus');
    }
  });
  $('.form__group_label').on('click', function () {
    $(this).parents('.input').toggleClass('in-focus');
  });
  console.log(field_inputs);

  for (var key in field_inputs) {
    if (field_inputs.hasOwnProperty(key) && _typeof(field_inputs[key]) == 'object') {
      var input = field_inputs[key];
      console.log($(input).val().length);

      if ($(input).val().length > 1) {
        $(input).parents('.input').addClass('in-focus');
      } else {
        $(input).parents('.input').removeClass('in-focus');
      }
    }
  }
}

/***/ }),

/***/ "../components/interface/form/elements/input/index.scss":
/*!**************************************************************!*\
  !*** ../components/interface/form/elements/input/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/list/index.js":
/*!***********************************************************!*\
  !*** ../components/interface/form/elements/list/index.js ***!
  \***********************************************************/
/*! exports provided: onClickCheckboxOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClickCheckboxOptions", function() { return onClickCheckboxOptions; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/list/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

function onClickCheckboxOptions() {
  $(".form_box__item").on("click", function () {
    $(this).toggleClass("form_box__item-active");
    var item_input = $(this).find("input");

    if (item_input.prop("checked") == true) {
      item_input.prop("checked", false);
    } else {
      item_input.prop("checked", true);
    }
  });
}
$(".form_box__item").on("click", function () {
  $(this).toggleClass("form_box__item-active");
  var item_input = $(this).find("input");

  if (item_input.prop("checked") == true) {
    item_input.prop("checked", false);
  } else {
    item_input.prop("checked", true);
  }

  var form_box__header = $(this).parents(".form_box").find(".form_box__header");
  var box_item = $(this).parents(".form_box__main").find(".form_box__item");

  if (box_item.length > 0) {
    var count_item_active = 0;

    for (var key in box_item) {
      if (box_item.hasOwnProperty(key)) {
        if ($(box_item[key]).hasClass("form_box__item") && $(box_item[key]).hasClass("form_box__item-active")) {
          count_item_active++;
        }
      }
    }

    if (count_item_active == box_item.length) {
      form_box__header.addClass("form_box__header-active");
    } else {
      form_box__header.removeClass("form_box__header-active");
    }
  }
});
$(".form_box__header").on("click", function () {
  var this_box = $(this);
  $(this).toggleClass("form_box__header-active");
  var item_input = $(this).find(".form_box__header-input");

  if (item_input.length > 0) {
    if (item_input.prop("checked") == true) {
      item_input.prop("checked", false);
    } else {
      item_input.prop("checked", true);
    }

    var box_item = $(this).parents(".form_box").find(".form_box__main").find(".form_box__item");

    if (box_item.length > 0) {
      Object.values(box_item).reduce(function (previousValue, currentItem, index, arr) {
        if ($(currentItem).hasClass("form_box__item")) {
          if (this_box.hasClass("form_box__header-active")) {
            console.log("step1");

            if (!$(currentItem).hasClass("form_box__item-active")) {
              console.log("step1");
              $(currentItem).addClass("form_box__item-active");

              var _item_input = $(currentItem).find("input");

              _item_input.prop("checked", true);
            }
          } else {
            console.log("step2");

            if ($(currentItem).hasClass("form_box__item-active")) {
              console.log($(currentItem));
              $(currentItem).removeClass("form_box__item-active");

              var _item_input2 = $(currentItem).find("input");

              _item_input2.prop("checked", false);
            }
          }
        }
      }, 0);
    }
  }
});

/***/ }),

/***/ "../components/interface/form/elements/list/index.scss":
/*!*************************************************************!*\
  !*** ../components/interface/form/elements/list/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/radio/index.js":
/*!************************************************************!*\
  !*** ../components/interface/form/elements/radio/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/radio/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.radio_group__header').on('click', function () {
  delete_load_file();

  if (!$(this).parent('.radio_group-check').hasClass('is-active')) {
    var change_chack = $(this).parent('.radio_group-check').data('chenge');
    $('.change_chack').val(change_chack);
    $(this).parents('.form_container__main').find('.radio_group-check').removeClass('is-active');
    $(this).parent('.radio_group-check').addClass('is-active');
  }
});
$('.form_file_load').on('click', function () {
  event.preventDefault();
  $('#file_logo__life').trigger('click');
  var dropArea = event.target;
  ;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  } // начало перетаскивания


  ;
  ['dragenter', 'dragover'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, highlight, false);
  });
  ['dragleave', 'drop'].forEach(function (eventName) {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e) {
    dropArea.classList.add('highlight');
  }

  function unhighlight(e) {
    dropArea.classList.remove('highlight');
  } // конец перетаскивания
  // Загрузка файла


  dropArea.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;
    document.getElementById("file_logo__life").files = files;

    for (var i = 0; i < files.length; i++) {
      var file = files.item(i);
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        load_file(file.name);
      };
    }
  } // Кінець загрузки файла

});

if (document.getElementById('file_logo__life') != null) {
  document.getElementById('file_logo__life').addEventListener('change', function () {
    if (this.value) {
      load_file(this.files[0].name);
    }
  });
}

function load_file(fail_name) {
  var cout_cahr = 15;
  var checbox = document.getElementsByClassName('radio_group-check is-active');
  var form_file_load = checbox[0].querySelectorAll('.form_file_load');
  var form_file_downloads = checbox[0].querySelectorAll('.form_file_downloads');
  var name__file = form_file_downloads[0].querySelectorAll('.text');
  form_file_load[0].classList.add('hidden');
  fail_name = fail_name.length > cout_cahr ? "".concat(fail_name.slice(0, cout_cahr), "...") : fail_name;
  name__file[0].textContent = fail_name;
  form_file_downloads[0].classList.remove('hidden');
  form_file_downloads[0].addEventListener('click', function () {
    delete_load_file();
  });
}

function delete_load_file() {
  $('#file_logo__life').val('');
  var checbox = document.getElementsByClassName('radio_group-check is-active');
  var form_file_load = checbox[0].querySelectorAll('.form_file_load');
  var form_file_downloads = checbox[0].querySelectorAll('.form_file_downloads');

  if (form_file_downloads.length > 0) {
    form_file_downloads[0].classList.add('hidden');
    form_file_load[0].classList.remove('hidden');
  }
}

/***/ }),

/***/ "../components/interface/form/elements/radio/index.scss":
/*!**************************************************************!*\
  !*** ../components/interface/form/elements/radio/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/radio_v1/index.js":
/*!***************************************************************!*\
  !*** ../components/interface/form/elements/radio_v1/index.js ***!
  \***************************************************************/
/*! exports provided: onClickRadio_v1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClickRadio_v1", function() { return onClickRadio_v1; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/radio_v1/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

function onClickRadio_v1() {
  $(".form__radio").on("click", function () {
    if (!$(this).hasClass('form__radio-hiden')) {
      $(this).parents('.settings__box_main_content').find('.form__radio').removeClass("form__radio-active");
      $(this).addClass("form__radio-active");
    }
  });
}
onClickRadio_v1();

/***/ }),

/***/ "../components/interface/form/elements/radio_v1/index.scss":
/*!*****************************************************************!*\
  !*** ../components/interface/form/elements/radio_v1/index.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/elements/textarea/index.js":
/*!***************************************************************!*\
  !*** ../components/interface/form/elements/textarea/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/elements/textarea/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var field_inputs = $('.textarea-field');

if (field_inputs.length > 0) {
  field_inputs.on('focus', function () {
    $(this).parents('.textarea').addClass('in-focus');
    $(this).parents('.textarea').removeClass('is-error');
  });
  field_inputs.on('blur', function () {
    if ($(this).val().length < 1 || $(this).val() == '+38(___) ___-____') {
      $(this).parents('.textarea').removeClass('in-focus');
    }
  });
  $('.form__group_label').on('click', function () {
    $(this).parents('.textarea').toggleClass('in-focus');
  });
  console.log(field_inputs);

  for (var key in field_inputs) {
    if (field_inputs.hasOwnProperty(key) && _typeof(field_inputs[key]) == 'object') {
      var input = field_inputs[key];
      console.log($(input).val().length);

      if ($(input).val().length > 1) {
        $(input).parents('.textarea').addClass('in-focus');
      } else {
        $(input).parents('.textarea').removeClass('in-focus');
      }
    }
  }
}

/***/ }),

/***/ "../components/interface/form/elements/textarea/index.scss":
/*!*****************************************************************!*\
  !*** ../components/interface/form/elements/textarea/index.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/form_grid.scss":
/*!***************************************************!*\
  !*** ../components/interface/form/form_grid.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/index.js":
/*!*********************************************!*\
  !*** ../components/interface/form/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_all_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/all_elements */ "../components/interface/form/elements/all_elements.js");
/* harmony import */ var _form_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_grid.scss */ "../components/interface/form/form_grid.scss");
/* harmony import */ var _form_grid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_grid_scss__WEBPACK_IMPORTED_MODULE_2__);




if ($('input[type="tel"]').length > 0) {
  $('input[type="tel"]').mask("+38(999) 999-9999");
}

/***/ }),

/***/ "../components/interface/form/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/form/index.scss ***!
  \***********************************************/
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

/***/ "../components/module/constructor/default_value.js":
/*!*********************************************************!*\
  !*** ../components/module/constructor/default_value.js ***!
  \*********************************************************/
/*! exports provided: default_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default_value", function() { return default_value; });
var color_object = [{
  value_id: "blask",
  value: "#000000"
}, {
  value_id: "greey",
  value: "#919191"
}, {
  value_id: "yelow",
  value: "#ffff00"
}, {
  value_id: "yelow",
  value: "#bc0a0a"
}];
var default_value = {
  iframe: {
    name: "Тип рами",
    properties: [{
      name: "Ekroos",
      value: "ekroos",
      img_value: "./../../static/source/img/constructor/setings/frame_1.jpg"
    }, {
      name: "Lite",
      value: "lite",
      img_value: "./../../static/source/img/constructor/setings/frame_2.jpg"
    }, {
      name: "PozitiffMD",
      value: "PozitiffMD",
      img_value: "./../../static/source/img/constructor/setings/frame_3.jpg"
    }, {
      name: "NEO",
      value: "neo",
      img_value: "./../../static/source/img/constructor/setings/frame_4.jpg"
    }]
  },
  iframe_type: {
    Ekross: {
      properties: {
        tab_1: {
          iframe_color: color_object,
          group: [{
            name: "Бокові панелі",
            parameters: [{
              name: "Товщина",
              type: "radio_small",
              code: "side_panels",
              values: [{
                name: "120 мм",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "140 мм",
                price: "320 грн",
                value_id: "1"
              }, {
                name: "170 мм",
                price: "320 грн",
                value_id: "1"
              }]
            }, {
              name: "Колір панелей",
              type: "radio_color",
              code: "side_panels_colors",
              values: color_object
            }]
          }, {
            name: "Cидіння",
            parameters: [{
              name: "Тип сидіння",
              type: "radio_small",
              code: "seat_type",
              values: [{
                name: "Мото",
                price: "350 грн",
                value_id: "3211"
              }, {
                name: "Вело",
                price: "320 грн",
                value_id: "1123"
              }]
            }, {
              name: "Колір панелей",
              type: "radio_color",
              code: "seat_type_color",
              values: color_object
            }]
          }]
        },
        tab_2: {
          name_section: "Підвіска",
          group: [{
            name: "Вилки",
            parameters: [{
              name: "Тип вилки",
              type: "radio_img",
              code: "fork_type",
              values: [{
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "Сатурн",
                price: "350 грн",
                value_id: "1"
              }, {
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "Зум",
                price: "350 грн",
                value_id: "1"
              }, {
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "DNM",
                price: "350 грн",
                value_id: "1"
              }]
            }, {
              name: "Колір панелей",
              type: "radio_color",
              code: "fork_type_color",
              values: color_object
            }]
          }, {
            name: "Амортизатори",
            parameters: [{
              name: "Амортизатор",
              type: "radio_img",
              code: "shock_absorber",
              values: [{
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "Сатурн",
                price: "350 грн",
                value_id: "1"
              }, {
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "Зум",
                price: "350 грн",
                value_id: "1"
              }, {
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "DNM",
                price: "350 грн",
                value_id: "1"
              }]
            }, {
              name: "Колір амортизатора",
              type: "radio_color",
              code: "shock_absorber_color",
              values: color_object
            }]
          }, {
            name: "Колеса",
            parameters: [{
              name: "Розмір колеса",
              type: "radio_small",
              code: "wheel_size",
              values: [{
                name: '18"',
                price: "350 грн",
                value_id: "1"
              }, {
                name: '26"',
                price: "350 грн",
                value_id: "1"
              }]
            }, {
              name: "Колір колеса",
              type: "radio_color",
              code: "wheel_size_color",
              values: color_object
            }]
          }, {
            name: "Гальма",
            parameters: [{
              name: "Тип гальм",
              type: "radio_img",
              code: "brake_type",
              values: [{
                name: "Мото",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Вело",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }]
        },
        tab_3: {
          name_section: "Додаткові комплектуючі",
          group: [{
            name: "",
            parameters: [{
              name: "Мотор",
              type: "radio_small",
              code: "motor",
              values: [{
                name: "350 Вт",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "1000 Вт",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "5000 Вт",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "",
            parameters: [{
              name: "Контролер",
              type: "radio_small",
              code: "controller",
              values: [{
                name: "evel 48V 40A",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Kelly lks 7230s",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "",
            parameters: [{
              name: "Зірка задня",
              type: "radio_small",
              code: "rear_star",
              values: [{
                name: "41Т",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "50Т",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "60Т",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "Опції",
            type: "checkbox_options",
            parameters: [{
              // name: "Зірка задня",
              type: "checkbox_options",
              // code: "rear_star",
              values: [{
                name: "ПОВОРОТ",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "CИГНАЛІЗАЦІЯ",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "GPS трекер",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Дзеркала",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Педальний привід",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Підножка",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }]
        }
      }
    },
    Lite: {
      properties: {
        tab_1: {
          iframe_color: color_object,
          group: []
        },
        tab_2: {
          name_section: "Підвіска",
          group: [{
            name: "Вилки",
            parameters: [{
              name: "Тип вилки",
              type: "radio_img",
              code: "fork_type",
              values: [{
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "Сатурн",
                price: "350 грн",
                value_id: "SATURN",
                childrens_group: {
                  wheel_size: ['size_20', 'size_26']
                }
              }, {
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "Зум",
                price: "350 грн",
                value_id: "ZYM",
                childrens_group: {
                  wheel_size: ['size_18', 'size_20', 'size_24', 'size_26']
                }
              }, {
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "DNM",
                price: "350 грн",
                value_id: "DNM",
                childrens_group: {
                  wheel_size: ['size_18', 'size_20', 'size_24', 'size_26']
                }
              }, {
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "DNM FAT",
                price: "350 грн",
                value_id: "DNM_FAT_1",
                childrens_group: {
                  wheel_size: ['size_26_FAT']
                }
              }]
            }, {
              name: "Колір вилки",
              type: "radio_color",
              code: "fork_type_color",
              values: color_object
            }]
          }, {
            name: "Колеса",
            parameters: [{
              name: "Розмір колеса",
              type: "radio_small",
              code: "wheel_size",
              values: [{
                name: '18"',
                price: "350 грн",
                value_id: "size_18"
              }, {
                name: '20"',
                price: "350 грн",
                value_id: "size_20"
              }, {
                name: '24"',
                price: "350 грн",
                value_id: "size_24"
              }, {
                name: '26"',
                price: "350 грн",
                value_id: "size_26"
              }, {
                name: '26 FAT',
                price: "350 грн",
                value_id: "size_26_FAT"
              }]
            }, {
              name: "Колір колеса",
              type: "radio_color",
              code: "wheel_size_color",
              values: color_object
            }]
          }, {
            name: "Гальма",
            parameters: [{
              name: "Тип гальм",
              type: "radio_img",
              code: "brake_type",
              values: [{
                name: "Мото",
                price: "350 грн",
                value_id: "Moto"
              }, {
                name: "Вело",
                price: "350 грн",
                value_id: "Velo"
              }]
            }]
          }]
        },
        tab_3: {
          name_section: "Додаткові комплектуючі",
          group: [{
            name: "",
            parameters: [{
              name: "Мотор",
              type: "radio_small",
              code: "motor",
              values: [{
                name: "350 Вт",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "1000 Вт",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "5000 Вт",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "",
            parameters: [{
              name: "Контролер",
              type: "radio_small",
              code: "controller",
              values: [{
                name: "evel 48V 40A",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Kelly lks 7230s",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "",
            parameters: [{
              name: "Зірка задня",
              type: "radio_small",
              code: "rear_star",
              values: [{
                name: "41Т",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "50Т",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "60Т",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "Опції",
            type: "checkbox_options",
            parameters: [{
              // name: "Зірка задня",
              type: "checkbox_options",
              // code: "rear_star",
              values: [{
                name: "ПОВОРОТ",
                price: "350 грн",
                code: "turn"
              }, {
                name: "CИГНАЛІЗАЦІЯ",
                price: "350 грн",
                code: "signaking"
              }, {
                name: "GPS трекер",
                price: "350 грн",
                code: "gps_trecer"
              }, {
                name: "Дзеркала",
                price: "350 грн",
                code: "mirror"
              }, {
                name: "Педальний привід",
                price: "350 грн",
                code: "pedal drive"
              }, {
                name: "Підножка",
                price: "350 грн",
                code: "footboard"
              }, {
                name: "Багажник",
                price: "350 грн",
                code: "trunk"
              }]
            }]
          }]
        }
      }
    },
    Pozitiff: {
      properties: {
        tab_1: {
          iframe_color: color_object,
          group: []
        },
        tab_2: {
          name_section: "Підвіска",
          group: [{
            name: "Вилки",
            parameters: [{
              name: "Тип вилки",
              type: "radio_img",
              code: "fork_type",
              values: [{
                img_value: "./../../static/source/img/constructor/setings/frame_4.jpg",
                name: "DNM USD 8 ",
                price: "350 грн",
                value_id: "DNM_USD_8 "
              }]
            }, {
              name: "Колір вилки",
              type: "radio_color",
              code: "fork_type_color",
              values: color_object
            }]
          }, {
            name: "Колеса",
            parameters: [{
              name: "Розмір колеса",
              type: "radio_small",
              code: "wheel_size",
              values: [{
                name: 'переднє 19" - заднє 17"',
                price: "350 грн",
                value_id: "1"
              }]
            }, {
              name: "Колір колеса",
              type: "radio_color",
              code: "wheel_size_color",
              values: color_object
            }]
          }, {
            name: "Гальма",
            parameters: [{
              name: "Тип гальм",
              type: "radio_img",
              code: "brake_type",
              values: [{
                name: "Мото",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Вело",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }]
        },
        tab_3: {
          name_section: "Додаткові комплектуючі",
          group: [{
            name: "",
            parameters: [{
              name: "Мотор",
              type: "radio_small",
              code: "motor",
              values: [{
                name: "350 Вт",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "1000 Вт",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "5000 Вт",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "",
            parameters: [{
              name: "Контролер",
              type: "radio_small",
              code: "controller",
              values: [{
                name: "evel 48V 40A",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Kelly lks 7230s",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "",
            parameters: [{
              name: "Зірка задня",
              type: "radio_small",
              code: "rear_star",
              values: [{
                name: "41Т",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "50Т",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "60Т",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }, {
            name: "Опції",
            type: "checkbox_options",
            parameters: [{
              // name: "Зірка задня",
              type: "checkbox_options",
              // code: "rear_star",
              values: [{
                name: "ПОВОРОТ",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "CИГНАЛІЗАЦІЯ",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "GPS трекер",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Дзеркала",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Педальний привід",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Підножка",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "Багажник",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }]
        }
      }
    },
    Neo: {
      properties: {
        tab_1: {
          iframe_color: color_object,
          group: []
        },
        tab_2: {
          name_section: "Підвіска",
          group: [{
            name: "Колеса",
            parameters: [{
              name: "Тип колеса",
              type: "radio_small",
              code: "wheel_size",
              values: [{
                name: 'Слікові',
                price: "350 грн",
                value_id: "1"
              }, {
                name: 'Агресивні',
                price: "350 грн",
                value_id: "1"
              }]
            }, {
              name: "Колір колеса",
              type: "radio_color",
              code: "wheel_size_color",
              values: color_object
            }]
          }]
        },
        tab_3: {
          name_section: "Додаткові комплектуючі",
          group: [{
            name: "Опції",
            type: "checkbox_options",
            parameters: [{
              // name: "Зірка задня",
              type: "checkbox_options",
              // code: "rear_star",
              values: [{
                name: "ДОДАТКОВА БАТАРЕЯ",
                price: "350 грн",
                value_id: "1"
              }, {
                name: "БРИЗГОВИК",
                price: "350 грн",
                value_id: "1"
              }]
            }]
          }]
        }
      }
    }
  }
};

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

$('.mobile').mask("+38(999) 99 99 999");
var lang_site;
var curr_lang;
var curr_lang_length;
;
lang_site = location_leng();

switch (lang_site) {
  case 'uk':
    curr_lang = "Поле повинно містити лише букви";
    curr_lang_length = "Поле повинно містити більше 6 символів";
    break;

  case 'ru':
    curr_lang = 'Поле должно содержать только буквы';
    curr_lang_length = "Поле должно содержать более 6 символов";
    break;

  case 'en':
    curr_lang = 'The field must contain only letters';
    curr_lang_length = "Field must contain more than 6 characters";
    break;

  default:
    curr_lang = "Поле повинно містити лише букви.";
    curr_lang_length = "Поле повинно містити більше 6 символів";
}

jQuery.validator.addMethod("lettersonly", function (value, element) {
  return this.optional(element) || /[^0-9]+$/i.test(value);
}, curr_lang);
jQuery.validator.addMethod("minLength", function (value, element) {
  if (value.length <= 6) {
    return false;
  } else {
    return true;
  }
}, curr_lang_length);
$(function () {
  Onload();
}); // /**
//  * valide_form - Валідація форм
//  * @param {selector form} ID Форми на яку підвішують валідацію
//  * @param {class name} class групи куди виводять помилки
//  * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
//  *
//  **/

function Onload() {
  // var more_form = $('.mini-user-form');
  // for (var testz = 0; testz < more_form.length; testz++) {
  //     var tehas = more_form[testz];
  //     var dinamic_id = 'active_form' + testz;
  //     $(tehas).attr('id', dinamic_id);
  //     var dinamic_main_id = '#' + $(tehas).attr('id');
  //     console.log(dinamic_main_id);
  //     valide_form(dinamic_main_id, '.inp-mini-wrap', false);
  // }
  valide_form('.footer_form', '.inp-vak-wrap', true);
  valide_form('#comment_form', '.inp-vak-wrap', false);
  valide_form('.registery_form', '.inp-vak-wrap', false);
  valide_form('.drive__form_last', '.inp-vak-wrap', true);
  valide_form('.form_cons', '.inp-vak-wrap', true);
  valide_form('#form_qustion', '.inp-vak-wrap', true);
  valide_form('#form_cons', '.inp-vak-wrap', true);
}

function location_leng() {
  return location.pathname.split('/')[1];
}

function valide_form(id_form, error_inp_wrap, check_request) {
  var modal = false;
  var check_request = check_request;

  if ($(id_form).length > 0) {
    var lang_site;
    var error_text = {};
    lang_site = location_leng();

    switch (lang_site) {
      case 'uk':
        error_text.required = 'Поле обов\'язково для заповнення';
        error_text.email = 'Поле має містити email';
        break;

      case 'ru':
        error_text.required = 'Поле обязательно для заполнения';
        error_text.email = 'Поле должно содержать email';
        break;

      case 'en':
        error_text.required = 'The field is required';
        error_text.email = 'The field must contain an email';
        break;

      default:
        error_text.required = 'Поле обов\'язково для заповнення.';
        error_text.email = 'Поле має містити email.';
    }

    $(id_form).validate({
      errorPlacement: function errorPlacement(event, validator) {
        console.log(validator);
        $(validator).parents(error_inp_wrap).append($(event));
      },
      rules: {
        email: {
          required: true,
          email: true
        },
        name: {
          required: true,
          lettersonly: true
        },
        first_name: {
          required: true,
          lettersonly: true
        },
        contact_name: {
          required: true,
          lettersonly: true
        },
        username: {
          required: true
        },
        adress: {
          required: true
        },
        old_password: {
          required: true
        },
        pass1: {
          required: true,
          minLength: true
        },
        address: {
          required: true,
          lettersonly: true
        },
        phone_number: {
          required: true
        },
        phone: {
          required: true
        },
        password: {
          required: true
        },
        password2: {
          required: true,
          minLength: true
        },
        pas1: {
          required: true
        },
        pas2: {
          required: true
        }
      },
      messages: {
        email: {
          required: error_text.required,
          email: error_text.email
        },
        name: {
          required: error_text.required
        },
        first_name: {
          required: error_text.required
        },
        address: {
          required: error_text.required
        },
        adress: {
          required: error_text.required
        },
        old_password: {
          required: error_text.required
        },
        pass1: {
          required: error_text.required
        },
        username: {
          required: error_text.required
        },
        phone_number: {
          required: error_text.required
        },
        phone: {
          required: error_text.required
        },
        password: {
          required: error_text.required
        },
        password2: {
          required: error_text.required
        },
        pas1: {
          required: error_text.required
        },
        pas2: {
          required: error_text.required
        }
      },
      submitHandler: function submitHandler(form) {
        console.log('form: ', form);
        event.preventDefault();
        $('.load_spin').addClass('load_spin_active');
        var form_input = $(form).serializeArray();
        var url_form = form.action;
        var form_json = {};
        $(form_input).each(function (index, obj) {
          form_json[obj.name] = obj.value;
        });
        var pass_checked = true;
        var pass_finder = $('.login_pass2').length;

        if (pass_finder == 1) {
          var pass_1 = $('.login_pass').val();
          var pass_2 = $('.login_pass2').val();
          pass_checked = false;

          if (pass_1 == pass_2) {
            $('.pass_checked_error').text('');
            pass_checked = true;
          } else {
            pass_checked = false;
            event.preventDefault();
            $('.load_spin').removeClass('load_spin_active');
            $.fancybox.close();
            $('.pass_checked_error').text('паролі не співпадають');
          }
        }

        console.log(form_json);

        if (url_form != '' && pass_checked == true) {
          console.log('url_form: ', url_form);
          var current_method = 'POST';

          if ($(form).hasClass('PATCH')) {
            current_method = 'PATCH';
            modal = true;
          } else {
            current_method = 'POST';
            modal = false;
          }

          fetch(url_form, {
            method: current_method,
            body: new URLSearchParams($.param(form_json)) // headers: {
            //   "Content-Type": "application/json",
            //   "Accept": "application/json"
            // },

          }).then(function (data) {
            return data.json();
          }).then(function (data) {
            console.log('data: ', data);
            console.log('tut?');

            if (data.status == 'OK' && typeof data['status'] !== "undefined") {
              sayHi();
            }

            if (data.status == 'BAD' && typeof data['status'] !== "undefined") {
              $('.load_spin').removeClass('load_spin_active');
              $(".error_block_false").text("Невірний логін або пароль");
              $('.login_checked_error').text(data.error_fields.username);
              $('.login_checked_error').text(data.error_fields.email);
              console.log('$(): ', $('.login_checked_error')); // if (typeof data['error_field'] == "undefined") {
              //   console.log('tuta');
              // }
            }

            if (typeof data['url'] !== "undefined" && data.url != '') {
              //   sayHi();
              location.href = data.url;
            }
          });
        } else {
          console.log("forn_not_actions");
        }

        function explode() {
          if (id_form == '#modal-form_user') {// window.location.pathname = '/'
          } else {// sayHi();
            }
        }

        explode();

        function sayHi() {
          console.log(133313);
          console.log('modal: ', modal);
          $('.load_spin').removeClass('load_spin_active');

          if (modal == true) {
            console.log('tut');
            $.fancybox.open({
              src: '#modal_form_change_profile'
            });
            setTimeout(function () {
              $.fancybox.close({
                src: '#modal_form_change_profile'
              });
            }, 1500);
          } else {
            $.fancybox.close();
          }

          if (check_request === true) {
            $.fancybox.open({
              src: '#modal-form_true'
            });
            setTimeout(function () {
              $.fancybox.close({
                src: '#modal-form_true'
              });
            }, 1500);
            var form_inputs = $(form)[0].querySelectorAll('input');

            if (form_inputs.length > 0) {
              for (var key in form_inputs) {
                if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                  if (form_inputs[key].type !== 'submit') {
                    form_inputs[key].value = '';
                  }
                }
              }

              var form_textaria = $(form)[0].querySelectorAll('textarea');

              if (form_textaria.length > 0) {
                form_textaria[0].value = '';
              }
            }
          }
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

/***/ "../components/pages/constructor_setings/helperCreate.js":
/*!***************************************************************!*\
  !*** ../components/pages/constructor_setings/helperCreate.js ***!
  \***************************************************************/
/*! exports provided: creatingSettings, createSettingsBox, createCheckboxOptions, createColor, createRadioSmal, createRadioImg, checkCardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatingSettings", function() { return creatingSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSettingsBox", function() { return createSettingsBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckboxOptions", function() { return createCheckboxOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColor", function() { return createColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRadioSmal", function() { return createRadioSmal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRadioImg", function() { return createRadioImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCardType", function() { return checkCardType; });
var creatingSettings = function creatingSettings(group) {
  return "\n  \n    <div class=\"settings__group\">\n\n      <div class=\"settings__group_title\">".concat(group.name, "</div>\n      ").concat(createSettingsBox(group.parameters), "\n    </div>\n    ");
};
var createSettingsBox = function createSettingsBox(parameters) {
  var SetingsBox = "";
  parameters.map(function (item) {
    var params = checkCardType(item);
    SetingsBox += "<div class=\"settings__box\">\n      <div class=\"settings__box_title\">".concat(!!item.name ? item.name : "", "</div>\n      <div class=\"settings__box_main   ").concat(params.tupeBox, "\" data-input_value=\"").concat(item.code, "\">\n        <div class=\"settings__box_loader\">\n          <div class=\"lds-ellipsis\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n        </div>\n        <input type=\"hidden\" value=\"\" name=\"").concat(item.code, "\"  >\n        <div class=\"settings__box_main_content\">\n           ").concat(params.elemens, "\n        </div>\n      </div>\n    </div>");
  });
  return SetingsBox;
};
var createCheckboxOptions = function createCheckboxOptions(properte) {
  // console.log(properte );
  return " <div class=\"settings__group settings__group-start\">\n    <div class=\"form_box__item form_box__item-black_bord2\">\n      <svg class=\"plus\"  width=\"9\" height=\"9\" viewBox=\"0 0 9 9\" >\n        <path fill=\"#242321\" fill-rule=\"evenodd\"  d=\"M5 0v4h4v1H5v4H4V5H0V4h4V0h1z\" ></path>\n      </svg>\n  \n      <div class=\"name\"> ".concat(properte.name, " </div>\n      <input type=\"checkbox\" name=\"").concat(properte.code, "\" value=\"item\" id=\"\" />\n    </div></div>");
};
var createColor = function createColor(properte) {
  return " <div class=\"form__color\" data-color=\"".concat(properte.value, "\">\n   <div class=\"form__color_check\">\n     <img src=\"./../../static/source/img/interface/check.svg\" />\n   </div>\n  </div>");
};
var createRadioSmal = function createRadioSmal(properte) {
  // console.log(properte );
  return " <div class=\"form__radio\"  data-value=\"".concat(properte.value_id, "\">\n    <div class=\"form__radio_check\"></div>\n    <div class=\"form__radio_main\">\n      <div class=\"form__radio_title\">").concat(properte.name, "</div>\n      <div class=\"form__radio_price\">").concat(properte.price, "</div>\n    </div>\n  </div>");
};
var createRadioImg = function createRadioImg(properte) {
  return "<div class=\"settings__card\">\n    <div class=\"settings__card_img\">\n      <img\n        src=\"".concat(properte.img_value, "\"\n        alt=\"\"\n      />\n    </div>\n    <div class=\"form__radio\" data-childrens=").concat(JSON.stringify(properte.childrens_group), " data-value=\"").concat(properte.value_id, "\">\n      <div class=\"form__radio_check\"></div>\n      <div class=\"form__radio_main\">\n        <div class=\"form__radio_title\">").concat(properte.name, "</div>\n        <div class=\"form__radio_price\">").concat(properte.price, "</div>\n      </div>\n    </div>\n  </div>");
};
var checkCardType = function checkCardType(item) {
  var obj = {
    elemens: "",
    tupeBox: ""
  };

  if (item.type === "radio_img") {
    item.values.map(function (RadioImg) {
      obj.elemens += createRadioImg(RadioImg);
    });
    obj.tupeBox = "settings__box_main-card";
  } else if (item.type === "radio_color") {
    item.values.map(function (color) {
      obj.elemens += createColor(color);
    });
    obj.tupeBox = "settings__box_main-color";
  } else if (item.type === "radio_small") {
    item.values.map(function (item) {
      obj.elemens += createRadioSmal(item);
    });
    obj.tupeBox = "settings__box_main-card";
  } else if (item.type === "checkbox_options") {
    item.values.map(function (item) {
      obj.elemens += createCheckboxOptions(item);
    });
    obj.tupeBox = "settings__box_main-checkbox";
  }

  return obj;
};

/***/ }),

/***/ "../components/pages/constructor_setings/helpersEvent.js":
/*!***************************************************************!*\
  !*** ../components/pages/constructor_setings/helpersEvent.js ***!
  \***************************************************************/
/*! exports provided: onLoadInfoActive, onLoadInfoRemote, onClickSettingsCardImg, onChengeRadioV1, clearGroup, childrensСonnections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoadInfoActive", function() { return onLoadInfoActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoadInfoRemote", function() { return onLoadInfoRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClickSettingsCardImg", function() { return onClickSettingsCardImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChengeRadioV1", function() { return onChengeRadioV1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearGroup", function() { return clearGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childrensСonnections", function() { return childrensСonnections; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var onLoadInfoActive = function onLoadInfoActive() {
  $(".settings__box_main").addClass("settings__box_main-hidden");
  $(".settings__box_main").addClass("settings__box_main-loader");
};
var onLoadInfoRemote = function onLoadInfoRemote() {
  $(".settings__box_main").removeClass("settings__box_main-hidden");
  $(".settings__box_main").removeClass("settings__box_main-loader");
};
var onClickSettingsCardImg = function onClickSettingsCardImg(parent_box) {
  // Переключення карточок з фото
  $(".settings__card_img").on("click", function () {
    var paretnConteiner = $(this).parents(parent_box);
    var neighboringElements = $(this).parents(parent_box).find(".form__radio");
    var cardFormRadio = $(this).parent().children(".form__radio");
    var value = cardFormRadio.data("value");

    if (!!cardFormRadio.data("childrens")) {
      var children_element = cardFormRadio.data("childrens");
      childrensСonnections(children_element);
    } else {}

    neighboringElements.removeClass("form__radio-active");
    cardFormRadio.addClass("form__radio-active");
    paretnConteiner.children("input[type=hidden]").val(value);
  });
};
var onChengeRadioV1 = function onChengeRadioV1(parent_box) {
  $(".form__radio").on("click", function () {
    if (!$(this).hasClass("form__radio-hiden")) {
      var value = $(this).data("value");
      $(this).parents(parent_box).children("input[type=hidden]").val(value);
    }
  });
};
var clearGroup = function clearGroup(className) {
  // Очистка груп конструктора перед вставкою нових елементів
  _toConsumableArray($(className).children()).map(function (item) {
    if (!item.classList.contains("settings__group-start")) {
      item.remove();
    }
  });
};
var childrensСonnections = function childrensСonnections(children_element) {
  for (var key in children_element) {
    if (children_element.hasOwnProperty(key)) {
      (function () {
        var element = children_element[key];
        var data_element = $("[data-input_value=\"".concat(key, "\"]"));

        if (data_element.hasClass("settings__box_main-card")) {
          var all_elements = _toConsumableArray(data_element.find(".form__radio").removeClass("form__radio-active"));

          var flag = true;
          all_elements.map(function (item) {
            var inputValue = $(item).data("value");

            if (element.indexOf(inputValue) != -1) {
              $(item).removeClass("form__radio-hiden");

              if (!!flag) {
                flag = false;
                $(item).addClass("form__radio-active");
                $(item).parents(".settings__box_main").children("input[type=hidden]").val(inputValue);
              }
            } else {
              $(item).addClass("form__radio-hiden");
              $(item).removeClass("form__radio-active");
            }
          });
        } else {}
      })();
    }
  }
};

/***/ }),

/***/ "../components/pages/constructor_setings/index.js":
/*!********************************************************!*\
  !*** ../components/pages/constructor_setings/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/constructor_setings/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_constructor_default_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/constructor/default_value */ "../components/module/constructor/default_value.js");
/* harmony import */ var _interface_form_elements_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/form/elements/color */ "../components/interface/form/elements/color/index.js");
/* harmony import */ var _interface_form_elements_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interface/form/elements/list */ "../components/interface/form/elements/list/index.js");
/* harmony import */ var _interface_form_elements_radio_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interface/form/elements/radio_v1 */ "../components/interface/form/elements/radio_v1/index.js");
/* harmony import */ var _helpersEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpersEvent */ "../components/pages/constructor_setings/helpersEvent.js");
/* harmony import */ var _helperCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helperCreate */ "../components/pages/constructor_setings/helperCreate.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var bike_values = _module_constructor_default_value__WEBPACK_IMPORTED_MODULE_1__["default_value"].iframe_value;

function onChengeIframe() {
  $(".settings__card-iframe").on("click", function () {
    var type_iframe = $(this).children(".form__radio").data("value");
    var info_bike;
    Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onLoadInfoActive"])();
    setTimeout(function () {
      info_bike = _module_constructor_default_value__WEBPACK_IMPORTED_MODULE_1__["default_value"].iframe_type[type_iframe];
      console.log(_module_constructor_default_value__WEBPACK_IMPORTED_MODULE_1__["default_value"]);
      var info_tab_1 = info_bike.properties.tab_1.group;
      var info_tab_2 = info_bike.properties.tab_2.group;
      var info_tab_3 = info_bike.properties.tab_3.group;
      Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["clearGroup"])('[data-tab_main="1"]');
      Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["clearGroup"])('[data-tab_main="2"]');
      Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["clearGroup"])('[data-tab_main="3"]');
      $('[data-tab_main="1"]')[0].innerHTML += createGrooup(info_tab_1, info_bike.properties.tab_1.name_section);
      $('[data-tab_main="2"]')[0].innerHTML += createGrooup(info_tab_2, info_bike.properties.tab_2.name_section);
      $('[data-tab_main="3"]')[0].innerHTML += createGrooup(info_tab_3, info_bike.properties.tab_3.name_section);
      Object(_interface_form_elements_color__WEBPACK_IMPORTED_MODULE_2__["form_color"])(".form__color");
      Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onClickSettingsCardImg"])(".settings__box_main");
      Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onClickSettingsCardImg"])(".settings__box_main1");
      Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onChengeRadioV1"])(".settings__box_main");
      onClickSettingsColor();
      SettingsInput();
      Object(_interface_form_elements_list__WEBPACK_IMPORTED_MODULE_3__["onClickCheckboxOptions"])();
      Object(_interface_form_elements_radio_v1__WEBPACK_IMPORTED_MODULE_4__["onClickRadio_v1"])();
      onChengeIframe();
      onSelectFirstItem();
      Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onLoadInfoRemote"])();
      onBackMobile();
      onChengeSetingsHeight();
    }, 1000);
  });
}

onChengeIframe();
$(".vizual_3d").on("click", function () {
  console.log($(".constructor_setings").serializeArray());
});

function onSelectFirstItem() {
  var settingsBox = _toConsumableArray($(".settings__box_main"));

  settingsBox.map(function (item) {
    var flag = false;

    if ($(item).hasClass("settings__box_main-card")) {
      if (!flag) {
        var flagActiveElement = true;

        _toConsumableArray($(item).find(".form__radio")).map(function (item) {
          if ($(item).hasClass("form__radio-active")) {
            flagActiveElement = false;
          }
        });

        if (!!flagActiveElement) {
          $($(item).find(".form__radio")[0]).addClass("form__radio-active");
          var element = $($(item).find(".form__radio")[0]);
          var children_element = element.data("childrens");
          var elementValue = element.data("value");
          $(element).parents(".settings__box_main").children("input[type=hidden]").val(elementValue);
          Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["childrensСonnections"])(children_element);
        }
      }
    } else if ($(item).hasClass("settings__box_main-color")) {
      if (!flag) {
        var _element = $($(item).find(".form__color")[0]);

        var _elementValue = _element.data("color");

        _element.addClass("form__color-active");

        $(_element).parents(".settings__box_main").children("input[type=hidden]").val(_elementValue);
      }
    } else if ($(item).hasClass("settings__box_main-card")) {
      if (!flag) {}
    }
  });
}

function SettingsInput() {
  var seting_box = _toConsumableArray($(".settings__box_main"));

  seting_box.map(function (item) {
    var input_value = $(item).data("input_value");
    var input_hidden = $(item).children("input[type=hidden]");
    $(input_hidden).attr("name", input_value);
    $(input_hidden).attr("id", input_value);
    $(input_hidden).addClass(input_value);
  });
}

function createGrooup(groups, name_section) {
  var settingsParameters = "";
  groups.map(function (group) {
    settingsParameters += Object(_helperCreate__WEBPACK_IMPORTED_MODULE_6__["creatingSettings"])(group);
  });
  var GroupBox = "\n  <div>\n ".concat(!!name_section ? " <div class=\"settings__group_back\">\n <div class=\"settings__group_back-icons\">\n   <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"15\" viewBox=\"0 0 25 15\">\n     <path fill=\"#1B1813\" fill-rule=\"evenodd\" d=\"M7.071 0l.707.707L1.91 6.574h22.67v1H1.917l5.861 5.861-.707.707L0 7.072 7.071 0z\"></path>\n   </svg>\n   </div>\n   <div class=\"\"> <div class=\"settings__group_title\">".concat(name_section, "</div></div>\n </div>") : "", "\n    <div>\n        ").concat(settingsParameters, "\n    </div>\n    \n  </div>\n  <div class=\"settings__parameters_foter\">\n      <div class=\"settings__parameters_next  btn_standart btn_standart_yellow color_white  \">\u0414\u0410\u041B\u0406</div>\n      <div class=\"settings__parameters_next btn_standart btn_standart_black color_white\">\u041F\u041E\u041A\u0410\u0417\u0410\u0422\u0418 \u0412 3D</div>\n    </div>\n  ");
  return GroupBox;
}

SettingsInput();
Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onClickSettingsCardImg"])(".settings__box_main");
Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onClickSettingsCardImg"])(".settings__box_main1");

function onClickSettingsColor() {
  var form__color = _toConsumableArray($(".form__color"));

  form__color.map(function (item) {
    $(item).on("click", function (event) {
      var color = $(event.target).data("color");
      $(item).parents(".settings__box_main_content").find(".form__color").removeClass("form__color-active");
      $(event.target).addClass("form__color-active");
      $(event.target).parents(".settings__box_main").children("input[type=hidden]").val(color);
    });
  });
}

onClickSettingsColor();
$(".settings__category").on("click", function () {
  var tab_item = $(this).data("tab_header");
  $(".settings__parameters").removeClass("settings__parameters-active");
  $("[data-tab_main=\"".concat(tab_item, "\"]")).addClass("settings__parameters-active");
  $(".settings__category").removeClass("settings__category-active");
  $(this).addClass("settings__category-active");
  $(".settings__categories_wrap").removeClass("settings__categories_wrap-active");
  setTimeout(function () {
    onChengeSetingsHeight();
  }, 400);
});

function onBackMobile() {
  if ($(window).width() < 800) {
    $(".settings__group_back").on("click", function () {
      $(".settings")[0].style.minHeight = 25 + "px";
      $(".settings__categories_wrap").addClass("settings__categories_wrap-active");
    });
  }
}

onBackMobile();
setTimeout(function () {
  onChengeSetingsHeight();
}, 300);

function onChengeSetingsHeight() {
  console.log($(window).width());

  if ($(window).width() < 800) {
    console.log('213123');
    var settings_heights = $(".settings__parameters_wrap").find('.settings__parameters-active').outerHeight();
    console.log(settings_heights);
    $(".settings")[0].style.minHeight = settings_heights + 25 + "px";
  }
}

$(window).resize(function () {
  var width = $(window).width();
});
startConstructor();

function startConstructor() {
  Object(_interface_form_elements_color__WEBPACK_IMPORTED_MODULE_2__["form_color"])(".form__color");
  Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onClickSettingsCardImg"])(".settings__box_main");
  Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onClickSettingsCardImg"])(".settings__box_main1");
  Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onChengeRadioV1"])(".settings__box_main");
  onClickSettingsColor();
  SettingsInput();
  Object(_interface_form_elements_list__WEBPACK_IMPORTED_MODULE_3__["onClickCheckboxOptions"])();
  Object(_interface_form_elements_radio_v1__WEBPACK_IMPORTED_MODULE_4__["onClickRadio_v1"])();
  onChengeIframe();
  onSelectFirstItem();
  Object(_helpersEvent__WEBPACK_IMPORTED_MODULE_5__["onLoadInfoRemote"])();
  onBackMobile();
}

/***/ }),

/***/ "../components/pages/constructor_setings/index.scss":
/*!**********************************************************!*\
  !*** ../components/pages/constructor_setings/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./constructor_setings.js":
/*!********************************!*\
  !*** ./constructor_setings.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/interface/button */ "../components/interface/button/index.js");
/* harmony import */ var _components_interface_form_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/interface/form/index */ "../components/interface/form/index.js");
/* harmony import */ var _components_module_form_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/module/form_errors */ "../components/module/form_errors/index.js");
/* harmony import */ var _components_common_componentc_admin_panel_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/common_componentc/admin_panel/index */ "../components/common_componentc/admin_panel/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_constructor_setings_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/pages/constructor_setings/index */ "../components/pages/constructor_setings/index.js");
// script interface



 // script common elements


 // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map