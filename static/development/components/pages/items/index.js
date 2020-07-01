import './index.scss';
var page_number = 0;
var super_kostile = false;


var hidden_min_range = $('.input_for_min_range');
var hidden_max_range = $('.input_for_max_range');

var rangeFinder = $('.range_slider').length;
if (rangeFinder >= 1) {
  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
      start: [300, 5000],
      connect: true,
      range: {
          'min': 10,
          'max': 6000
      },
      tooltips: false,
  });
  var val_floor1;
  var val_floor2;
  slider.noUiSlider.on('update', function (values) {
    val_floor1 = Math.floor(values[0]);
    val_floor2 = Math.floor(values[1]);

    hidden_min_range.val(val_floor1);
    hidden_max_range.val(val_floor2);

    $('.cost_filter_num').text(val_floor1 + ' грн.' + " - " + val_floor2 + ' грн.');
});
  
}

hidden_min_range.val(val_floor1);
hidden_max_range.val(val_floor2);

$('.cost_filter_num').text(val_floor1 + ' грн.' + " - " + val_floor2 + ' грн.');
 
$('.items_filter_title').on('click', function() {
    $(this).parents('.items_filter_content__wrap').toggleClass('items_filter_content__wrap_active');
});


$('.prod_card_more').on('click', function () {
    get_card_generate();
  });


  function generate_arr_attr(all_arr) {

    var filter_prof = document.querySelectorAll('.filter_form');
    filter_prof.forEach(function (item, index, array) {
      var current_id = $(item).find('.hidden_category_id').attr('data-attribute_id');
      var current_inp = $(item).find('.input_all_arr');
      var period_arr = {
        attribute_id: current_id,
        value_ids: ''
      };


      let per_arr = [];
      $(current_inp).each(function (item, index, array) {
        if ($(index)[0].checked) {
          if ($(index).hasClass('input_color')) {
            per_arr.push($(index).attr('data-value_id'));
          } else {
            per_arr.push($(index).attr('data-value_id'));
          }

        }
      });
      // var new_per = per_arr.substring(0, per_arr.length - 1);
      period_arr.value_ids = per_arr;
      all_arr.push(period_arr);
      return all_arr;
    });
  }


  function get_card_generate() {

    var all_array = [];
    generate_arr_attr(all_array);
    console.log(all_array);


    // function generate_query(data) {
    //   var query = '?'
    //   for(key in data) {
    //     query += `${key}=${data[key]}&`;
    //   };
    //   return query
    // }
    page_number++;
    // var type_category = $('.hidden_type_category').val();
    // var fData = new FormData();
    // var kolwo_card = $('.show_kolvo').val();
    // fData.append('per_page', 6);
    // fData.append('page_number', page_number);
    // console.log('fData: ', fData);
    // fData.append('filter', filter_form);



    // var filter_form = $('.filter_form').serializeArray();


    var ordering;
    ordering = $('.ordering').val();
    var discount;
    if ($('.discount').prop('checked')) {
      discount = true;
    } else {
      discount = false;

    }
    console.log('discount: ', discount);
    var category_id = $('.category_id').val();
    if (val_floor1 == undefined && val_floor2 == undefined) {
      val_floor1 = '';
      val_floor2 = '';
    }

    fetch(`/api/items/?per_page=6&page_number=${page_number}&category_id=${category_id}&is_discount=${discount}&max_price=${val_floor2}&min_price=${val_floor1}&attributes=${JSON.stringify(all_array)}`, {
      method: 'GET',
    })
      .then(data => {
        return data.json();
      })
      .then(body => {
        console.log('body: ', body);
        let cur_step = 0;
        var last_page = body.count;
        const fixed_count = last_page;

        // console.log('page_number: ', page_number);
        //   console.log('last_page: ', last_page);

        let fragment = document.createDocumentFragment();
        for (var key in body.results) {

          removeBtn++
          if (fixed_count == removeBtn) {
            $('.prod_card_more').css('display', 'none');
          }
          cur_step += 0.2;
          cardNew1(body.results[key]);
          var creat_card = createProdCard(body.results[key], cur_step);
          fragment.appendChild(creat_card);
          $('.main_product-block')[0].appendChild(fragment);
        }
      })
  }


  function createProdCard(product, step) {
    console.log('product: ', product);
    let card_prof = document.createElement('a');
    card_prof.style.setProperty('animation-delay', (step) + 's'),
      card_prof.classList.add('product_card-prof');
    card_prof.setAttribute(`href`, product.absolute_url);

    var link_wrap = document.createElement('a');
    link_wrap.classList.add('prod_card_link');
    link_wrap.setAttribute(`href`, product.absolute_url);

    var prod_img = document.createElement('img');
    prod_img.classList.add('prod_card-img');
    prod_img.setAttribute('src', product.image_url);

    var prod_name = document.createElement('div');
    prod_name.classList.add('prod_card-name');

    var window_lang = window.location.pathname.split('/')[1];
    if (window_lang == 'ru' && product.title_ru != null) {
      prod_name.textContent = product.title_ru;
    } else if (window_lang == 'uk' && product.title_uk != null) {
      prod_name.textContent = product.title_uk;
    } else {
      prod_name.textContent = product.title;
    }

    var prod_cost = document.createElement('div');
    prod_cost.classList.add('prod_card-cost');
    // console.log('product.currency.symbol: ', product.currency);
    if(product.currency !== null) {
      
      var currency = product.currency.symbol
      if (window_lang == 'ru' && product.currency.symbol_ru != null) {
        currency = product.currency.symbol_ru;
      } else if (window_lang == 'uk' && product.currency.symbol_uk != null) {
        currency = product.currency.symbol_uk;
      } else {
        currency = product.currency.symbol;
      }
     
    prod_cost.textContent = `${product.final_unconverted_price} ${currency}`;
    }
    

    var prod_info = document.createElement('div');
    prod_info.classList.add('prod_card-info');

    if (product.discount !== 0) {
      console.log('product.discount: ', product.discount);
            var svg_wrap = document.createElement('div');
            svg_wrap.classList.add('discount_prod_div');
            // svg_wrap.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            // svg_wrap.setAttribute('width', '109');
            // svg_wrap.setAttribute('height', '108');
            // svg_wrap.setAttribute('viewBox', '0 0 109 108');
            svg_wrap.innerHTML = `
          <svg class="discount_prod" xmlns="http://www.w3.org/2000/svg" width="109" height="108" viewBox="0 0 109 108">
          <g fill="none" fill-rule="evenodd">
              <path fill="#DA251D" d="M64 108v10H54v-10h10zM54 98v10H44V98h10zm20 0v10H64V98h10zM64 20v10h14v10h10v11h10v10H88v17H78v10H64v10H54V88H40V78H30V61H20V51h10V40h10V30h14V20h10zm44 41v10H98V61h10zm-88 0v10H10V61h10zM10 51v10H0V51h10zm108 0v10h-10V51h10zm-10-10v10H98V41h10zm-88 0v10H10V41h10zm34-31v10H44V10h10zm20 0v10H64V10h10zM64 0v10H54V0h10z" transform="rotate(-30 48.17 62.098)"/>
              <text fill="#FFF" font-family="Oswald-Regular_Bold, Oswald" font-size="13" font-weight="bold" letter-spacing=".464" transform="rotate(-30 48.17 62.098)">
                  <tspan x="37" y="61">Знижка</tspan>
              </text>
          </g>
        </svg>
          `;
          card_prof.appendChild(svg_wrap);
    }

    // var prod_btn = document.createElement('a');
    // prod_btn.classList.add('prod_card-btn');
    // prod_btn.setAttribute(`href`, product.absolute_url);
    // prod_btn.setAttribute(`data-item_id`, product.item_id);
    // prod_btn.textContent = 'У Кошик';

   


    
    card_prof.appendChild(link_wrap);
    link_wrap.appendChild(prod_img);
    // card_prof.appendChild(prod_name);
    card_prof.appendChild(prod_info);
    prod_info.appendChild(prod_name);
    prod_info.appendChild(prod_cost);
    // prod_info.appendChild(prod_btn);



    return card_prof;
  };
