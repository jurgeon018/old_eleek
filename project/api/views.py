from .serializers import * 

from django.http import JsonResponse

def test_drive_contact(request):
    query = request.POST or request.GET
    
    return JsonResponse({'status':"OK"})
