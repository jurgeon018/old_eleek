from django.urls import path, include 

from django.shortcuts import render 


def index(request):
    return render(request, 'project/index.html', locals())



urlpatterns = [
    path('',             index, name='index'),
    path('about/',       about, name='about'),
    path('items/',       items, name='items'),
    path('item/<slug>/', item,  name='item'),
    path('about/',       about, name='about'),
    path('about/',       about, name='about'),
]
