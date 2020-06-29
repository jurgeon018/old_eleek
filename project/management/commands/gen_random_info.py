from django.core.management.base import BaseCommand
from box.apps.sw_shop.sw_catalog.models import * 


from random import choice 


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        # for category_name in ['Велосипеди', "Рами", "Комплектуючі"]:
        #     category, _ = ItemCategory.objects.get_or_create(title=category_name)
        #     for subcategory_name in ["Колеса","Гальма","Вилки","Мотори","Амортизатори",]:
        #         subcategory, _ = Category.obj
        for i in range(100):
            item, _ = Item.objects.get_or_create(
                title=f'товар {i}'
            )
            item.category = choice(ItemCategory.objects.all())
            print(item, _)
            item.save()
        print('ok')


