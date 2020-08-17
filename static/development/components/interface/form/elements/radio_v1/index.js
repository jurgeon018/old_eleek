import "./index.scss";

export function onClickRadio_v1(){
  $(".form__radio").on("click", function () {
    if(!$(this).hasClass('form__radio-hiden')){
      $(this).parents('.settings__box_main_content').find('.form__radio').removeClass("form__radio-active");
      $(this).addClass("form__radio-active");
    }
   
  });
  
}
onClickRadio_v1();