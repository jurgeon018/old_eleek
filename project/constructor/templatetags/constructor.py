from django.template.defaulttags import register


@register.filter
def get_item(dictionary, key):
    """
    {{ mydict|get_item:item.NAME }}
    """
    return dictionary.get(key)


@register.simple_tag()
def get_radio_class(request, **kwargs):
    query       = request.GET
    counter     = kwargs['counter']
    value       = kwargs['value']
    codes       = kwargs['codes']
    colors      = kwargs['colors']
    radio_class = ""
    if codes:
      if value.code in codes:
        radio_class = "form__radio-active"
      if value.get_parents().exists() and value.get_parents().first().code not in codes:
        radio_class = "form__radio-hiden"
    elif counter == 1:
        radio_class = "form__radio-active"
    return radio_class 


@register.simple_tag()
def get_color_class(request, **kwargs):
    query       = request.GET
    counter     = kwargs['counter']
    value       = kwargs['value']
    codes       = kwargs['codes']
    colors      = kwargs['colors']
    color_class = "" 
    if colors:
      if value.color == colors.get(value.parameter.code):
          color_class = "form__color-active"
    elif counter == 1:
        color_class = "form__color-active"
    return color_class 


@register.simple_tag()
def get_checkbox_class(request, **kwargs):
    query          = request.GET
    counter        = kwargs['counter']
    value          = kwargs['value']
    codes          = kwargs['codes']
    colors         = kwargs['colors']
    checkbox_class = ""
    if codes:
      if value.get_parents().exists() and value.get_parents().first().code not in codes:
          checkbox_class = "form_box__item-hidden"
      if value.code in codes:
        checkbox_class = "form_box__item-active"
    elif not codes:
      pass 
    return checkbox_class 




