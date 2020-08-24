from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *


# def generate_options(request, code):
#   options = []
#   for attribute_category in BikeAttributeCategory.objects.filter(frame__code=code):
#     parameters = [
#       {
#         "name":attribute_category.name,
#         "type":"radio_small",
#         "code":attribute_category.code,
#         "values":[],
#       },
#     ]
#     for attribute in attribute_category.attributes:
#       parameters[0]['values'].append({
#         "name":attribute.name,
#         "price":attribute.price,
#         "value_id":attribute.id,
#       })
#     options.append({
#       "name":"",
#       "parameters":parameters,
#     })
#   options.append({
#     "name":"Опції",
#     "type":"checkbox_options",
#     "parameters":[
#       {
#         "type":"checkbox_options",
#         "values":OptionSerializer(Option.objects.filter(frame__code=code), many=True).data,
#       },
#     ]
#   })
#   return options 


def generate_ekross():
  ekross = {}
  ekross['properties'] = {
    "tab_1": {
      "iframe_color":FrameColorSerializer(FrameColor.objects.all(), many=True).data,
      "group":[
        {
          "name":"Бокові панелі",
          "parameters":[
            {
              "name":"Товщина",
              "type":"radio_small",
              "code":"side_panels",
              "values":PanelWidthSerializer(PanelWidth.objects.filter(frame__code=FrameType.EKROSS_CODE),many=True).data,
            },
            {
              "name":"Колір",
              "type":"radio_color",
              "code":"side_panels_colors",
              "values":PanelColorSerializer(PanelColor.objects.filter(frame__code=FrameType.EKROSS_CODE),many=True).data,
            },
          ],
        },
        {
          "name":"Сидіння",
          "parameters":[
            {
              "name":"Тип сидіння",
              "type":"radio_small",
              "code":"seat_type",
              "values":SeatTypeSerializer(SeatType.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data
            },
            {
              "name":"Колір сидіння",
              "type":"Колір сидіння",
              "code":"Колір сидіння",
              "values":SeatColorSerializer(SeatColor.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data
            },
          ]
        },
      ]
    },
    "tab_2": {
      "name_section":"Підвіска",
      "group":[
        {
          "name":"Вилки",
          "parameters":[
            {
              "name":"Тип вилки",
              "type":"radio_img",
              "code":"fork_type",
              "values":ForkTypeSerializer(ForkType.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data,
            },
            {
              "name":"Колір вилки",
              "type": "radio_color",
              "code":"fork_type_color",
              "values":ForkColorSerializer(ForkColor.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data,
            },
          ],
        },
        {
          "name":"Амортизатори",
          "parametrs":[
            {
              "name":"Амортизатор",
              "type":"radio_img",
              "code":"shock_absorber",
              "values": AbsorberSerializer(Absorber.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data,
            },
            {
              "name":"Колір амортизатора",
              "type":"radio_color",
              "code":"shock_absorber_color",
              "values": AbsorberColorSerializer(AbsorberColor.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data,
            },
          ]
        },
        {
          "name":"Колеса",
          "parametrs":[
            {
              "name":"розмір",
              "type":"radio_small",
              "code":"wheel_size",
              "values":WheelSerializer(Wheel.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data
            },
            {
              "name":"колір",
              "type":"radio_small",
              "code":"wheel_size_color",
              "values": WheelColorSerializer(WheelColor.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data,
            },
          ]
        },
        {
          "name":"Гальма",
          "parametrs":[
            {
              "name":"тип гальм",
              "type":"radio_img",
              "code":"brake_type",
              "values":BreakTypeSerializer(BreakType.objects.filter(frame__code=FrameType.EKROSS_CODE), many=True).data,
            },
          ]
        },
      ]
    },
    "tab_3": {
      "name_section":"Додаткові комплектуючі",
      # "group":Ekross_complect,
    },
  }
  return ekross


def generate_lite():
  lite = {}
  lite['properties'] = {
    "tab_1": {
      "iframe_color":FrameColorSerializer(FrameColor.objects.all(), many=True).data,
      "group":[]
    },
    "tab_2": {
      "name_section":"Підвіска",
      "group":[
        {
          "name":"Вилки",
          "parameters":[
            {
              "name":"Тип",
              "type":"radio_img",
              "code":"fork_type",
              "values":ForkTypeSerializer(ForkType.objects.filter(frame__code=FrameType.LITE_CODE), many=True).data,
            },
            {
              "name":"Колір",
              "type":"radio_color",
              "code":"fork_type_color",
              "values":ForkColorSerializer(ForkColor.objects.filter(frame__code=FrameType.LITE_CODE), many=True).data,
            },
          ],
        },
        {
          "name":"Колеса",
          "parameters":[
            {
              "name":"Розмір",
              "type":"radio_small",
              "code":"wheel_size",
              "values": WheelSerializer(Wheel.objects.filter(frame__code=FrameType.LITE_CODE), many=True).data,
            },
            {
              "name":"Колір",
              "type":"radio_color",
              "code":"wheel_size_color",
              "values": WheelColorSerializer(WheelColor.objects.filter(frame__code=FrameType.LITE_CODE), many=True).data,
            },
          ]
        },
        {
          "name":"Гальма",
          "parameters":[
            {
              "name":"Тип",
              "type":"radio_img",
              "code":"brake_type",
              "values": BreakTypeSerializer(BreakType.objects.filter(frame__code=FrameType.LITE_CODE), many=True).data, 
            },
          ]
        },
      ],
    },
    "tab_3": {
      "name_section":"Додаткові комплектуючі",
      # "group": lite_complect
    },
  }
  return lite


def generate_pozitiff():
  pozitiff = {}
  pozitiff['properties'] = {
    "tab_1": {
      "iframe_color":FrameColorSerializer(FrameColor.objects.all(), many=True).data,
      "group":[],
    },
    "tab_2": {
      "name_section":"Підвіска",
      "group":[
        {
          "name":"вилки",
          "parameters":[
            {
              "name":"Тип",
              "type":"radio_img",
              "code":"fork_type",
              "values": ForkTypeSerializer(ForkType.objects.filter(frame__code=FrameType.POZITIFF_CODE), many=True).data
            },
            {
              "name":"Колір",
              "type":"radio_color",
              "code":"fork_type_color",
              "values": ForkColorSerializer(ForkColor.objects.filter(frame__code=FrameType.POZITIFF_CODE), many=True).data
            },
          ]
        },
        {
          "name":"колеса",
          "parameters":[
            {
              "name":"Розмір",
              "type":"radio_small",
              "code":"wheel_size",
              "values": WheelSerializer(Wheel.objects.filter(frame__code=FrameType.POZITIFF_CODE), many=True).data
            },
            {
              "name":"Колір",
              "type":"radio_color",
              "code":"wheel_size_color",
              "values": WheelColorSerializer(WheelColor.objects.filter(frame__code=FrameType.POZITIFF_CODE), many=True).data
            }
          ]
        },
        {
          "name":"гальма",
          "parameters":[
            {
              "name":"Тип",
              "type":"radio_img",
              "code":"brake_type",
              "values":BreakTypeSerializer(BreakType.objects.filter(frame__code=FrameType.POZITIFF_CODE), many=True).data,
            },
          ]
        },
      ]
    },
    "tab_3": {
      "name_section":"Додаткові комплектуючі",
      # "group":pozitiff_complect
    },
  }
  return pozitiff


def generate_neo():
  neo = {}
  neo['properties'] = {
    "tab_1": {
      "iframe_color":FrameColorSerializer(FrameColor.objects.all(), many=True).data,
      "group":[]
    },
    "tab_2": {
      "name_section":"Підвіска",
      "group":[
        {
          "name":"Колеса",
          "parameters":[
            {
              "name":"Тип",
              "type":"radio_small",
              "code":"wheel_size",
              "values": WheelSerializer(Wheel.objects.filter(frame__code=FrameType.NEO_CODE), many=True).data,
            },
            {
              "name":"Колір",
              "type":"radio_color",
              "code":"wheel_size_color",
              "values":WheelColorSerializer(WheelColor.objects.filter(frame__code=FrameType.NEO_CODE), many=True).data
            },
          ]
        },
      ]
    },
    "tab_3": {
      "name_section":"Додаткові комплектуючі",
      "group":[
        {
          "name":"Опції",
          "type": "checkbox_options",
          "parameters":[
            {
              "type": "checkbox_options",
              "values":OptionSerializer(Option.objects.filter(frame__code=FrameType.NEO_CODE), many=True).data,
            },
          ]
        },
      ],
    },
  }
  return neo


def generate_children():
  children = []
  return children
def generate_parents():
  parents = []
  return parents

def generate_values(parameter):
  result = []
  values = Value.objects.filter(is_active=True, parameter=parameter)
  for value in values:
    # children  = value.get_children()#.values_list('code', flat=True),
    # parents   = value.get_parents()#.values_list('code', flat=True),
    # children  = ValueSerializer(children, many=True).data
    # parents   = ValueSerializer(parents, many=True).data
    result.append({
      "img_value":value.image_url,
      "name":value.name,
      "price":value.price,
      "color":value.color,
      "code":value.code,
      "children":generate_children(),
      "parents":generate_parents(),
    })
  return Response(result).data


def generate_parameters(tab_group):
  result = []
  parameters = Parameter.objects.filter(is_active=True, tab_group=tab_group)
  for parameter in parameters:
    result.append({
      "name":parameter.name,
      "type":parameter.type,
      "code":parameter.code,
      "values":generate_values(parameter),
    })
  return Response(result).data


def generate_groups(tab):
  result = []
  tab_groups = TabGroup.objects.filter(is_active=True, tab=tab)
  for tab_group in tab_groups:
    result.append({
      "name":tab_group.name,
      "type":tab_group.type,
      "parameters":generate_parameters(tab_group),
    }) 
  return Response(result).data


def generate_tabs(frame):
  result = {"properties":{}}
  tabs = Tab.objects.filter(is_active=True, frame=frame)
  for tab in tabs:
    result['properties'].update({
      f"tab_{list(tabs).index(tab)+1}":{
        "description":tab.description,
        "image":tab.image_url,
        "name_section":tab.name,
        "code":tab.code,
        "groups":generate_groups(tab),
      },
    })
  result['properties']['tab_1']['iframe_color'] = FrameColorSerializer(FrameColor.objects.filter(is_active=True, frame=frame), many=True).data
  return result 


@api_view(['GET', 'POST'])
def get_info(request):
  result = {}
  query = request.data or request.query_params 
  if query.get('frame_code'):
    frame = FrameType.objects.get(code=query['frame_code'])
    result = generate_tabs(frame)
    return Response(result)
  for frame_type in FrameType.objects.filter(is_active=True):
    result.update({frame_type.code:generate_tabs(frame_type)})
  return Response({
    "frames": {
      "name": "Типи рами",
      "properties": FrameTypeSerializer(FrameType.objects.filter(is_active=True), many=True).data,
    },
    "frame_type": result,
  })


import json 


@api_view(['GET','POST'])
def get_price(request):
  result = 0
  query = request.data or request.query_params
  values = query['values']
  # print(query)
  # print(values)
  # print(type(values))
  values = json.loads(values)
  for value in values:
    result += Value.objects.get(id=value).price
  return Response(result)#.data

from django.core.mail import send_mail 

@api_view(['GET','POST'])
def make_eleek_order(request):
  query   = request.data or request.query_params 
  values  = query['values']
  name    = query.get('name','-----')
  email   = query.get('email','-----')
  phone   = query.get('phone','-----')
  message = query.get('message','-----')
  model = ConstructorForm.objects.create(
    name=name,
    email=email,
    phone=phone,
    message=message,
  )
  values  = json.loads(values)
  price   = 0
  frame   = values.first.parameter.tab_group.tab.frame 
  for value_id in values:
    value = Value.objects.get(id=value_id)
    price += value.price 
    model.values.add(value)
  send_mail(
    subject=f"Заявка з конструктора №{model.id}",
    message=f""" 
      Імя:{name};
      Емейл:{email};
      Телефон:{phone};
      Повідомлення:{message};
      Рама: {frame.name};
    """,
    from_email=settings.DEFAULT_FROM_EMAIL,
    recipient_list=settings.DEFAULT_RECIPIENT_LIST,
    fail_silently=False,
  )
  return Response({
    "status":"OK"
  })

