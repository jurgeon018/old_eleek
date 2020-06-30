from django.db import models
from box.core.sw_auth.models import BoxAbstractUser


class ProjectUser(BoxAbstractUser):
    pass


class Certificate(models.Model):

    image = models.ImageField(verbose_name='Картинка')
    alt   = models.CharField(verbose_name="Альт", max_length=255)
    
    @classmethod
    def modeltranslation_fields(self):
        return ['alt']

    def __str__(self):
        return f'{self.image}'

    class Meta:
        verbose_name = 'Сертифікат'
        verbose_name_plural = 'Сертифікати'


class Partner(models.Model):

    image = models.ImageField(verbose_name='Картинка')
    alt   = models.CharField(verbose_name="Альт", max_length=255)
    
    @classmethod
    def modeltranslation_fields(self):
        return ['alt']

    def __str__(self):
        return f'{self.image}'

    class Meta:
        verbose_name = 'Парнтер'
        verbose_name_plural = 'Парнтери'


class TestDrive(models.Model):
    name    = models.CharField(verbose_name="Імя", max_length=255)
    phone   = models.CharField(verbose_name="Телефон", max_length=255)
    email   = models.CharField(verbose_name="Емейл", max_length=255)
    model   = models.CharField(verbose_name="Модель", max_length=255)
    message = models.CharField(verbose_name="Повідомлення", max_length=255)

    def __str__(self):
        return f'{self.id}'

    class Meta:
        verbose_name = 'заявка на тест драйв'
        verbose_name_plural = 'Заявки на тест драйв'



class TestDriveModel(models.Model):
    name = models.CharField(verbose_name="Назва", max_length=255)
    item = models.ForeignKey(verbose_name="Товар", to="sw_catalog.Item", on_delete=models.SET_NULL, null=True, blank=True)
    
    def __str__(self):
        return f'{self.id}'

    class Meta:
        verbose_name = 'модель велосипеда для тест драйву'
        verbose_name_plural = 'моделі велосипедів для тест драйву'









