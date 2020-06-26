from django.shortcuts import render 
from box.apps.sw_shop.sw_catalog.models import Item 
from .models import * 

from box.core.sw_content.models import Page 


def index(request):
    page = Page.objects.get(code='index')
    return render(request, 'project/index.html', locals())


def about(request):
    page = Page.objects.get(code='about')
    print(page)
    certificates = Certificate.objects.all()
    partners = Partner.objects.all()
    return render(request, 'project/about.html', locals())

from django.shortcuts import get_object_or_404


def items(request, slug):
    # category = get_object_or_404(ItemCategory, slug=slug)
    # page = category 
    return render(request, 'project/items.html', locals())


def item(request, slug):
    # item = get_object_or_404(Item, slug=slug)
    # page = item
    return render(request, 'project/item.html', locals())


def faq(request):
    page = Page.objects.get(code='faq')
    return render(request, 'project/faq.html', locals())


def constructor(request):
    page = Page.objects.get(code='constructor')
    return render(request, 'project/constructor.html', locals())


def test_drive(request):
    page = Page.objects.get(code='test_drive')
    return render(request, 'project/test_drive.html', locals())

def delivery(request):
    page = Page.objects.get(code='delivery')
    return render(request, 'project/delivery.html', locals())

from box.apps.sw_shop.sw_cart.decorators import cart_exists

@cart_exists
def order(request):
    page = Page.objects.get(code='order')
    return render(request, 'project/order.html', locals())


def search(request):
    page = Page.objects.get(code='search')
    return render(request, 'project/search.html', locals())

from django.contrib.auth.decorators import login_required

@login_required
def profile(request):
    page = Page.objects.get(code='profile')
    return render(request, 'project/profile.html', locals())


def shop(request):
    page = Page.objects.get(code='shop')
    return render(request, 'project/shop.html', locals())


def login(request):
    page = Page.objects.get(code='login')
    return render(request, 'project/auth/login.html', locals())


def register(request):
    page = Page.objects.get(code='register')
    return render(request, 'project/auth/register.html', locals())


from django.urls import path, include 


urlpatterns = [
    
    path('',             index,       name='index'),
    path('about/',       about,       name='about'),
    path('items/<slug>/',       items,       name='items'),
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








