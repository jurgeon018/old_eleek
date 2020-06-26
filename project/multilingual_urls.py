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


def faq(request):
    return render(request, 'project/faq.html', locals())


def constructor(request):
    return render(request, 'project/constructor.html', locals())


def test_drive(request):
    return render(request, 'project/test_drive.html', locals())

def delivery(request):
    return render(request, 'project/delivery.html', locals())

from box.apps.sw_shop.sw_cart.decorators import cart_exists

@cart_exists
def order(request):
    return render(request, 'project/order.html', locals())


def search(request):
    return render(request, 'project/search.html', locals())

from django.contrib.auth.decorators import login_required

@login_required
def profile(request):
    return render(request, 'project/profile.html', locals())


def shop(request):
    return render(request, 'project/shop.html', locals())


def login(request):
    return render(request, 'project/auth/login.html', locals())


def register(request):
    return render(request, 'project/auth/register.html', locals())


from django.urls import path, include 


urlpatterns = [
    
    path('',             index,       name='index'),
    path('about/',       about,       name='about'),
    path('items/',       items,       name='items'),
    path('item/<slug>/', item,        name='item'),
    path('faq/',         faq,         name='faq'),
    path('constructor/', constructor, name='constructor'),
    path('test_drive/',  test_drive,  name='test_drive'),
    path('order/',       order,       name='order'),
    path('search/',      search,      name='search'),
    path('profile/',     profile,     name='profile'),
    path('shop/',        shop,        name='shop'),
    path('delivery/',        delivery,        name='delivery'),
    
    path('login/',       login,       name='login'),
    path('register/',    register,    name='register'),
]








