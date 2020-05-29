from django.urls import path, include 

from django.shortcuts import render 


def index(request):
    return render(request, 'project/index.html', locals())



urlpatterns = [
    path('', index, name='index'),

]
