from box.apps.sw_shop.sw_catalog.models import * 


def context(request):
    velo = ItemCategory.objects.get(code='velo')
    ramy = ItemCategory.objects.get(code='ramy')
    comp = ItemCategory.objects.get(code='comp')
    amor = ItemCategory.objects.get(code='amor')
    vilk = ItemCategory.objects.get(code='vilk')
    galm = ItemCategory.objects.get(code='galm')
    moto = ItemCategory.objects.get(code='moto')
    kole = ItemCategory.objects.get(code='kole')
    return locals()


