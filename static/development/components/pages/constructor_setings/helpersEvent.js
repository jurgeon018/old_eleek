export const onLoadInfoActive = () => {
  $(".settings__box_main").addClass("settings__box_main-hidden");
  $(".settings__box_main").addClass("settings__box_main-loader");
};
export const onLoadInfoRemote = () => {
  $(".settings__box_main").removeClass("settings__box_main-hidden");
  $(".settings__box_main").removeClass("settings__box_main-loader");
};

export const onClickSettingsCardImg = (parent_box) => {
  // Переключення карточок з фото
  $(".settings__card_img").on("click", function () {
    let paretnConteiner = $(this).parents(parent_box);
    let neighboringElements = $(this).parents(parent_box).find(".form__radio");
    let cardFormRadio = $(this).parent().children(".form__radio");
    let value = cardFormRadio.data("value");

    if (!!cardFormRadio.data("childrens")) {
      let children_element = cardFormRadio.data("childrens");

      childrensСonnections(children_element);
    }else{
      
    }

    neighboringElements.removeClass("form__radio-active");

    cardFormRadio.addClass("form__radio-active");

    paretnConteiner.children("input[type=hidden]").val(value);
  });
};

export const onChengeRadioV1 = (parent_box) => {
  $(".form__radio").on("click", function () {
    if (!$(this).hasClass("form__radio-hiden")) {
      let value = $(this).data("value");
      $(this).parents(parent_box).children("input[type=hidden]").val(value);
    }
  });
};

export const clearGroup = (className) => {
  // Очистка груп конструктора перед вставкою нових елементів
  [...$(className).children()].map((item) => {
    if (!item.classList.contains("settings__group-start")) {
      item.remove();
    }
  });
};

export const childrensСonnections = (children_element) => {
  for (const key in children_element) {
    if (children_element.hasOwnProperty(key)) {
      const element = children_element[key];

      let data_element = $(`[data-input_value="${key}"]`);

      if (data_element.hasClass("settings__box_main-card")) {
        let all_elements = [
          ...data_element
            .find(".form__radio")
            .removeClass("form__radio-active"),
        ];
        let flag = true;
        all_elements.map((item) => {
          let inputValue = $(item).data("value");

          if (element.indexOf(inputValue) != -1) {
            $(item).removeClass("form__radio-hiden");

            if (!!flag) {
              flag = false;
              $(item).addClass("form__radio-active");
              $(item)
                .parents(".settings__box_main")
                .children("input[type=hidden]")
                .val(inputValue);
            }
          } else {
            $(item).addClass("form__radio-hiden");
            $(item).removeClass("form__radio-active");
          }
         
        });
      } else {
      }
    }
  }
};
