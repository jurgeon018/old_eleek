from django.core.management.base import BaseCommand
from box.apps.sw_shop.sw_catalog.models import * 


from random import choice, randrange


class Command(BaseCommand):
    def handle(self, *args, **kwargs):

        for i in range(3):
            FeatureCategory.objects.get_or_create(
                name=f'Категорія характеристик {i}',
            )
        for i in range(10):
            Attribute.objects.get_or_create(
                name=f'Атрибут {i}',
            )
        for i in range(50):
            Feature.objects.get_or_create(
                name=f'Характеристика {i}',
            )
            FeatureValue.objects.get_or_create(
                value=f'Значення характеристики {i}',
            )
            AttributeValue.objects.get_or_create(
                value=f'Значення атрибута {i}',
            )

        for i in range(30):
            item, _ = Item.objects.get_or_create(
                title=f'товар {i}',
            )
            print(item, '/ 30')
            item.price    = randrange(1000,99999)
            # item.currency = choice(Currency.objects.all())
            item.category = choice(ItemCategory.objects.all())
            item.save()

            # attributes 
            for i in range(5):
                item_attribute, _ = ItemAttribute.objects.get_or_create(
                    item      = item,
                    attribute = choice(Attribute.objects.all()),
                    is_option = False,
                )
                for j in range(5):
                    v, _ = ItemAttributeValue.objects.get_or_create(
                        item_attribute = item_attribute,
                        value=choice(AttributeValue.objects.all()),
                    )
                    v.price=randrange(0, 100)
                    v.save()

            # features
            for _ in range(30):
                ItemFeature.objects.get_or_create(
                    item=item,
                    category=choice(FeatureCategory.objects.all()),
                    name=choice(Feature.objects.all()),
                    value=choice(FeatureValue.objects.all()),
                )

            # options
            item_attribute, _ = ItemAttribute.objects.get_or_create(
                item=item,
                attribute=Attribute.objects.get_or_create(name='Опції')[0]
            )
            for i in range(1, 10):
                v,_ = ItemAttributeValue.objects.get_or_create(
                    item_attribute = item_attribute,
                    value = AttributeValue.objects.get_or_create(value=f'Опція {i}')[0],
                )
                v.price = randrange(0, 1000)
                v.save()
        print('ok')







