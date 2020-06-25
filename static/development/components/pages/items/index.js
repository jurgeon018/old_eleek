import './index.scss';


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