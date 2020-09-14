from django.core.management.base import BaseCommand
from box.apps.sw_shop.sw_customer.models import * 
from random import choice, randrange, randint 
from datetime import datetime, date, time, timedelta 
from box.core.sw_currency.models import Currency 


def random_date(start, end):
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = randrange(int_delta)
    return start + timedelta(seconds=random_second)


from project.models import ProjectUser 


s1 = datetime.strptime('1/1/2020 1:30 PM', '%m/%d/%Y %I:%M %p')
s2 = datetime.strptime('1/2/2020 4:50 AM', '%m/%d/%Y %I:%M %p')

e1 = datetime.strptime('1/10/2020 1:30 PM', '%m/%d/%Y %I:%M %p')
e2 = datetime.strptime('1/12/2020 4:50 AM', '%m/%d/%Y %I:%M %p')


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        for i in range(10):
            name = f'Купон {i}'
            discount_amount = randrange(1, 80)
            currency        = choice(Currency.objects.all())
            discount_type   = choice(['currency','percent'])
            requisition     = randrange(0, 100)
            started         = random_date(s1, s2)
            print(started)
            period          = random_date(e1, e2)
            print(period)
            users           = ProjectUser.objects.all()
            # users           = [ProjectUser.objects.get(username='admin'), ]
            if Coupon.objects.filter(name=name).exists():
                coupon = Coupon.objects.get(name=name)
                coupon.discount_amount = discount_amount
                coupon.currency        = currency
                coupon.discount_type   = discount_type
                coupon.requisition     = requisition
                coupon.started         = started
                coupon.period          = period
                coupon.save()
            else:
                coupon = Coupon.objects.create(
                    name=name,
                    discount_amount=discount_amount,
                    currency=currency,
                    discount_type=discount_type,
                    requisition=requisition,
                    started=started,
                    period=period,
                )
            for user in users:
                coupon.users.add(user)
            print(coupon)
        print('ok')

