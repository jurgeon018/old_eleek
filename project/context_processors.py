from box.apps.sw_shop.sw_catalog.models import * 
from box.apps.sw_shop.sw_cart.utils import get_cart
from box.apps.sw_shop.sw_cart.models import CartItem


def context(request):
    velo = ItemCategory.objects.get(code='velo')
    ramy = ItemCategory.objects.get(code='ramy')
    comp = ItemCategory.objects.get(code='comp')
    amor = ItemCategory.objects.get(code='amor')
    vilk = ItemCategory.objects.get(code='vilk')
    galm = ItemCategory.objects.get(code='galm')
    moto = ItemCategory.objects.get(code='moto')
    kole = ItemCategory.objects.get(code='kole')
    cart = get_cart(request)
    cart_items = CartItem.objects.filter(cart=cart)
    return locals()


