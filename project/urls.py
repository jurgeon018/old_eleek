from django.shortcuts import render 
from box.apps.sw_shop.sw_catalog.models import Item 

def index(request):
    return render(request, 'project/index.html', locals())


def about(request):
    return render(request, 'project/about.html', locals())


def items(request):
    return render(request, 'project/items.html', locals())


def item(request, slug):
    return render(request, 'project/item.html', locals())


def about(request):
    return render(request, 'project/about.html', locals())


def about(request):
    return render(request, 'project/about.html', locals())




from django.urls import path, include 


urlpatterns = [
    path('',             index, name='index'),
    path('about/',       about, name='about'),
    path('items/',       items, name='items'),
    path('item/<slug>/', item,  name='item'),
    path('about/',       about, name='about'),
    path('about/',       about, name='about'),
]








