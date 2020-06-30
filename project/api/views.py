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










