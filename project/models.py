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







