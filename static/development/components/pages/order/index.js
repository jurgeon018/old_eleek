import './index.scss';

let ua = 'Поле обов\'язково для заповнення';
let ru = 'Поле обязательно для заполнения';
let en = 'The field is required';

let current_lang = ua;
function create_error(text) {
    let error = document.createElement('label');
    error.classList.add('error', 'sub_title', 'sub_title_2');
    error.setAttribute(`for`, 'code');
    error.setAttribute(`id`, 'code-error');
    error.textContent = text;
    return error;
}

function check_active_input() {
    let wrap = $(this).parents('.step__wrap');
    
    let all_input = $(wrap).find('.input_requared');

    let counter = 0;

    

    $.each(all_input, function(index, value){
        
        if ($(value).val() == '') {
            $(value).parents('.inp-vak-wrap').find('.error').remove();
            $(value).parents('.inp-vak-wrap')[0].appendChild(create_error(current_lang));
        } else {
            $(value).parents('.inp-vak-wrap').find('.error').text('');
            counter++;
        }
    });
    if ($(all_input).length == counter) {
        $(wrap).find('.step_num').addClass('step_num_active');
        $(wrap).find('.step_title__wrap').addClass('step_title__wrap_done');
    } else {
        $(wrap).find('.step_num').removeClass('step_num_active');
        $(wrap).find('.step_title__wrap').removeClass('step_title__wrap_done');
    }
}

$('.input_requared').on('change', check_active_input);
$('.next_step_btn').on('click', check_next_step);
$('.step_title__wrap').on('click', function() {
    let wrap = $(this).parents('.step__wrap');
    if ($(this).hasClass('step_title__wrap_done')) {
        console.log(1);
        $('.step__wrap').removeClass('step__wrap_active');
        $(wrap).addClass('step__wrap_active');
    } else {
        console.log(2);
    }
});
$('.radio_block').on('click', function() {
    let wrap = $(this).parents('.step__wrap');
    $(wrap).find('.radio_center').removeClass('radio_center_active');
    $(this).find('.radio_center').addClass('radio_center_active');
})


function check_next_step() {
    let wrap = $(this).parents('.step__wrap');
    
    let all_input = $(wrap).find('.input_requared');

    let counter = 0;
    $.each(all_input, function(index, value){
        
        if ($(value).val() == '') {
            $(value).parents('.inp-vak-wrap').find('.error').remove();
            $(value).parents('.inp-vak-wrap')[0].appendChild(create_error(current_lang));
        } else {
            $(value).parents('.inp-vak-wrap').find('.error').text('');
            counter++;
        }
    });
    if ($(all_input).length == counter) {
        $(wrap).find('.step_num').addClass('step_num_active');
        $(wrap).find('.step_num').removeClass('step_num_error');

    } else {
        $(wrap).find('.step_num').removeClass('step_num_active');
        $(wrap).find('.step_num').addClass('step_num_error');
    }
    
    if ($(wrap).find('.step_num').hasClass('step_num_active')) {
        let back_step = Number($(this).attr('data-step-btn'));
        let current_step = Number($(this).attr('data-step-btn')) + 1;
        
        let all_step = $('.step__wrap');

        $.each(all_step, function(index, value){
            if ($(value).attr('data-step') == current_step) {
                $('.step__wrap').removeClass('step__wrap_active');
                $(value).addClass('step__wrap_active');
                console.log('$(value): ', $(value));
            } else if ($(value).attr('data-step') == back_step) {
                $(value).find('.step_title__wrap').addClass('step_title__wrap_done');
            }
        });

    }
}



$('.order_info__block').on('submit', function (evt) {
    evt.preventDefault();
    let requare_inputs = $('.input_requared');
    let counter = 0;
    $.each(requare_inputs, function(index, value){
        
        if ($(value).val() == '') {
            $(value).parents('.inp-vak-wrap').find('.error').remove();
            $(value).parents('.inp-vak-wrap')[0].appendChild(create_error('The field is required'));
        } else {
            $(value).parents('.inp-vak-wrap').find('.error').text('');
            counter++;
        }
    });
    if ($(requare_inputs).length == counter) {

        let another_block = $('.form_create__block').find('.part__wrapper');
        let another_array = [];
        $.each(another_block, function(index, value){
           let name = $(value).find('.part_name').val();
           let id = $(value).find('.id').val();
           another_array.push({
               'part_name': name,
               'id': id,
           })
        });
        
        let form_json = {
            'car_model': $('.car_model').val(),
            'marka': $('.marka').val(),
            'year': $('.year').val(),
            'vin code': $('.vin_code').val(),
            'name': $('.name').val(),
            'email': $('.email').val(),
            'phone': $('.phone').val(),
            'additional_information': $('.additional_information').val(),
            'another_parts': another_array,
        }

                


        // console.log('form_json: ', form_json);
        // let url_form = $('.order_info__block').attr('action');
        // console.log('url_form: ', url_form);
        // fetch(url_form, {
        //     method: 'POST',
        //     body: new URLSearchParams($.param(form_json))
        //   })
        //   .then(data => {
        //     return data.json();
        //   })
        //   .then(data => {
        //       console.log(data)
        //     if(data.status=='OK' && typeof data['status'] !== "undefined"){
                
        //     } else if (data.status=='BAD' && typeof data['status'] !== "undefined") {
        //         // $(".error_block_false").text("Невірний логін або пароль");
        //       //   $.fancybox.open({
        //       //     src: '#modal-form_false',
        //       //   });

        //     }
        //   })
            
    }
});

                $('.select_aria').select2({
                    dropdownAutoWidth: true,
                    width: 'resolve',
                });

               $('.select_city').select2({
                    dropdownAutoWidth: true,
                    width: 'resolve',
               });

              for (let i = 0; i < 5; i++) {
                let option_area = document.createElement('option');
                option_area.textContent = 'test' + i;
                $('.select_aria')[0].appendChild(option_area);
              }
              for (let i = 0; i < 5; i++) {
                let option_area = document.createElement('option');
                option_area.textContent = 'test' + i;
                $('.select_city')[0].appendChild(option_area);
              }
              
