from .serializers import * 

from django.http import JsonResponse
from ..models import TestDrive 
from django.core.mail import send_mail 
from django.conf import settings 


def test_drive_contact(request):
    query        = request.POST or request.GET
    name         = query.get('name') 
    phone        = query.get('phone') 
    email        = query.get('email') 
    model        = query.get('select_drive') 
    message      = query.get('drive_send')
    print(model)
    print(query)
    m        = TestDrive.objects.create(
        name     = name,
        phone    = phone,
        email    = email,
        model    = model,
        message  = message,
    )
    recipient_list = [
        'jurgeon018@gmail.com',
        settings.DEFAULT_FROM_EMAIL,
    ]
    send_mail(
        'Отримано заявку на тест-драйв',
        f'''
Імя:{name},
Телефон:{phone},
Емейл:{email},
Модель:{model},
Повідомлення:{message},
        ''',
        settings.DEFAULT_FROM_EMAIL,
        recipient_list,
        
    )
    return JsonResponse({'status':"OK"})




from django.contrib.auth import update_session_auth_hash



def update_project_user(request):
    response        = {}
    query           = request.POST or request.GET
    first_name      = query.get('first_name', '') 
    email           = query.get('email', '') 
    phone_number    = query.get('phone_number', '') 
    address         = query.get('address', '') 
    password1       = query.get('pass1') 
    password2       = query.get('password2')
    user            = request.user 
    user.first_name = first_name
    user.email      = email
    user.phone_number      = phone_number
    user.address    = address
    if password1 and password2:
        response['message'] = 'Пароль було змінено.'
        user.set_password(password1)
        update_session_auth_hash(request, request.user)
    user.save()
    response["status"] = "OK"
    return JsonResponse(response)

