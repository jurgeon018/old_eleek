from django.core.management.base import BaseCommand
from box.apps.sw_shop.sw_customer.models import * 
from random import choice, randrange, randint 
from datetime import datetime, date, time


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        for i in range(10):
            Coupon.objects.get_or_create(
                name=f"",
            )
        print('ok')

