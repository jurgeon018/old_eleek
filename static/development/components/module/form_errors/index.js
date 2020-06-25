import './index.scss'

$(function () {

  Onload();
})

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
      errorPlacement: function (event, validator) {

        $(validator).parents(append_error_box).append($(event));
        $(validator).parents(append_error_box).addClass('is-error')
      },
      ignore: "not:hidden.product_rating",
      rules: {
        name: {
          required: true,
        },
        user_send: {
          required: true,
        },
        password: {
          required: true,
        },
        phone: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
       
      },

      messages: {
        email: {
          required: errore_text.required,
          email: errore_text.email
        },
        name: {
          required: errore_text.required,
        },
        phone: {
          required: errore_text.required,
        },
        password: {
          required: errore_text.required,
        },
        user_send: {
          required: errore_text.required,
        },
       
      },

      submitHandler: function (form) {
        event.preventDefault();
        let data = formSerialize({'form': form});
       
        // send_form({'form': form,'data':data});


        const all_form_input = form.querySelectorAll('input');
        // const all_form_textaria = form.querySelectorAll('textarea');
       
        for (const key in all_form_input) {
          if (all_form_input.hasOwnProperty(key)) {
            const element = all_form_input[key];
            console.log(element.type );
            $.fancybox.close();
          }
        }

        function send_form(params){
          let form = params.form;
          let form_data = params.data;
          let url_form = form.action;
          var form_json = {};
 
          if (url_form != '') {
        
            $('.loader_all').addClass('loader_all-active');
            var loader = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
            document.getElementById('loader_all__wrap').innerHTML = loader;

            fetch(url_form, {
              method: 'POST', 
              body: form_data
            })
            .then(data => {
              return data.json();
            })
            .then(data => {
              $('.loader_all').removeClass('loader_all-active');
              if (data.status == 'OK' && typeof data['status'] !== "undefined") {
                if (typeof data['redirect_url'] !== "undefined" && data.redirect_url != '') {
                  clear_input()
                  location.href = data.redirect_url;

                } else {
                  // sayHi();
                }
              }


            })
          }else{
            console.error(`URL Form is #${params.form.id} not fond `)
          }



        }


  

        



        function clear_input(){
          const TYPE_INPUT={
            TEXT:'text',
            EMAIL:'email',
            CHECKBOX:'checkbox',
            HIDDEN:'hidden',
            TEL:'tel',
            FILE:'file',
          }
          const all_form_input = form.querySelectorAll('input');
          const all_form_textaria = form.querySelectorAll('textarea');
         
          for (const key in all_form_textaria) {
            if (all_form_textaria.hasOwnProperty(key)) {
              const element = all_form_textaria[key];
              element.value=''
            }
          }
          
          for (const key in all_form_input) {
            if (all_form_input.hasOwnProperty(key)) {
              const element = all_form_input[key];
             console.log(element );
             
              switch (element.type) {
                case TYPE_INPUT.TEXT:
                  element.value=''
                  break;
                case TYPE_INPUT.EMAIL:
                  element.value=''
                  break;
                case TYPE_INPUT.TEL:
                  element.value=''
                  break;
                case TYPE_INPUT.HIDDEN:
                  element.value=''
                  break;
                case TYPE_INPUT.FILE:
                  element.value=''
                  break;
              
                case TYPE_INPUT.CHECKBOX:
                  $(element).prop( "checked",false ) 
                  break;
               
              
                 
              }
            }
          }
        }
        

        function formSerialize(params){
          let form = params.form;
          let serialize = $(form).serializeArray();
              
          let data={};
              data['inputs']=[],
              data['item_category_ids']=[], 
              data['item_ids']=[], 
              data['inputs']=[]; 

          let inputs_other = form.querySelectorAll('input[name=other]');
          Array.apply(null, inputs_other).map(item=>{
            let categories_input = $(item).parents('.form_container__main').find('.form_box__header-input');
            data['inputs'].push({'item_category_id':categories_input[0].name,'text':item.value});
          })
           
          $(serialize).each(function (index, input) {
            if (input.value == 'category') {
              data['item_category_ids'].push(input.name)
            } else if (input.value == 'item') {
              data['item_ids'].push(input.name);
            }else {
              data[input.name] = input.value;
            }
          });
         
          let file_logo__life = form.querySelectorAll('#file_logo__life')[0];
           
          let Formdata = new FormData()
          if(file_logo__life != undefined){
            if(file_logo__life.files[0] !== undefined){ 
              Formdata.append('logo', file_logo__life.files[0])
            }
          }
          Formdata.append('data', JSON.stringify(data))
           
         
         
          return Formdata;
        }

      }
    });
  }

}
