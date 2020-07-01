from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.shortcuts import render 

from .models import * 
from box.apps.sw_shop.sw_catalog.models import *
from box.core.sw_content.models import Page 
from box.apps.sw_shop.sw_cart.decorators import cart_exists


def index(request):
    page = Page.objects.get(code='index')
    test_drive_sliders = TestDriveSlider.objects.all()
    print(test_drive_sliders)
    velo_sliders = VeloSlider.objects.all()
    print(velo_sliders)
    return render(request, 'project/index.html', locals())


def about(request):
    page = Page.objects.get(code='about')
    certificates = Certificate.objects.all()
    partners = Partner.objects.all()
    return render(request, 'project/about.html', locals())


def item_category(request, slug):
    category = get_object_or_404(ItemCategory, slug=slug)
    items    = Item.objects.filter(category=category)[0:6]
    page = category 
    parent_categories = ItemCategory.objects.filter(parent__isnull=True)
    return render(request, 'project/item_category.html', locals())


def item(request, slug):
    item = get_object_or_404(Item, slug=slug)
    odd_features = ItemFeature.objects.filter(item=item)[:10:2]
    even_features = ItemFeature.objects.filter(item=item)[1:10:2]
    page = item
    # colour_
    return render(request, 'project/item.html', locals())


def faq(request):
    page = Page.objects.get(code='faq')
    return render(request, 'project/faq.html', locals())


def constructor(request):
    page = Page.objects.get(code='constructor')
    return render(request, 'project/constructor.html', locals())


def test_drive(request):
    page = Page.objects.get(code='test_drive')
    models = TestDriveModel.objects.all()
    return render(request, 'project/test_drive.html', locals())


def delivery(request):
    page = Page.objects.get(code='delivery')
    return render(request, 'project/delivery.html', locals())


@cart_exists
def order(request):
    page = Page.objects.get(code='order')
    return render(request, 'project/order.html', locals())


def search(request):
    page  = Page.objects.get(code='search')
    query = request.POST or request.GET
    query = query.get('main_search','')
    if query:
        search_items = Item.objects.all().filter(
            title__icontains=query,
        )
    return render(request, 'project/search.html', locals())

# TEST DRIVE 

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
    path('item_category/<slug>/',       item_category,       name='item_category'),
    
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








