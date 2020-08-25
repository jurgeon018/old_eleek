from django.http import JsonResponse
from django.core.mail import send_mail 
from django.conf import settings 

from rest_framework.decorators import api_view
from rest_framework.response import Response

import json 

from .serializers import *
from .models import *



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



@api_view(['GET','POST'])
def get_price(request):
  result = 0
  query = request.data or request.query_params
  for k,v in query.items():
    print(k,v)
    if k not in ['iframe_type','iframe_color']:
      result += 1
      # result += Value.objects.get(parameter__code=k,code=v).price
  # values = query['values']
  # print(query)
  # print(values)
  # print(type(values))
  # values = json.loads(values)
  # for value in values:
    # result += Value.objects.get(id=value).price
  return Response(result)#.data


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

