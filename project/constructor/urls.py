from django.urls import path, include 

from .views import * 
urlpatterns = [
    path('get_info/', get_info),
]
