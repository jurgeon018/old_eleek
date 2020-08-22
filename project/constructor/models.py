from django.db import models 
from colorfield.fields import ColorField
from box.core.helpers import get_admin_url

# # # # # # # # # # # # 
 
class ActiveMixin(models.Model):
    is_active = models.BooleanField(verbose_name="Активність", default=True)

    class Meta: 
        abstract = True 


class TimestampMixin(models.Model):
    created = models.DateTimeField(verbose_name="Створено", auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Оновлено", auto_now=True, auto_now_add=False)

    class Meta: 
        abstract = True 


class CodeMixin(models.Model):
    code = models.CharField(verbose_name="Код", max_length=255, blank=True, null=True)

    class Meta: 
        abstract = True 


class NameMixin(models.Model):
    name = models.CharField(verbose_name="Назва", max_length=255, blank=True, null=True)

    class Meta: 
        abstract = True 

    @classmethod
    def modeltranslation_fields(self):
        return ['name',]

class ImageMixin(models.Model):
    image = models.ImageField(verbose_name="Зображення",  blank=True, null=True)

    @property
    def image_url(self):
        image_url = ''
        if self.image:
            image_url = self.image.url
        return image_url

    class Meta: 
        abstract = True 

class PriceMixin(models.Model):
    price = models.FloatField(verbose_name="Ціна", blank=True, null=True, default=0)

    class Meta: 
        abstract = True 


class ColorMixin(models.Model):
    color = ColorField(verbose_name="Колір", blank=True, null=True)

    class Meta: 
        abstract = True 


class FrameMixin(models.Model):
    frame = models.ForeignKey(verbose_name="Рама", to="constructor.FrameType", blank=True, null=True, on_delete=models.SET_NULL)

    class Meta: 
        abstract = True 


class BaseMixin(ActiveMixin, TimestampMixin):
    order = models.IntegerField(verbose_name="Порядок", default=0)

    class Meta: 
        abstract = True 

    def get_admin_url(self):
        return get_admin_url(self)

class GeneralMixin(BaseMixin,CodeMixin,NameMixin,ImageMixin,PriceMixin,ColorMixin):

    class Meta: 
        abstract = True 

    def __str__(self):
        return f"Код:{self.code},Назва:{self.name},Зображення:{self.image},Ціна:{self.price},Колір:{self.color}"

# # # # # # # # # # # # 


class FrameType(GeneralMixin):
    POZITIFF_CODE = 'pozitiff'
    NEO_CODE      = 'neo'
    LITE_CODE     = 'lite'
    EKROSS_CODE   = 'ekross'
    item = models.ForeignKey(verbose_name="Товар", to="sw_catalog.Item", on_delete=models.SET_NULL, blank=True, null=True,)

    def get_tabs(self):
        return Tab.objects.filter(frame=self, is_active=True)
    
    def get_colors(self):
        return FrameColor.objects.filter(frame=self, is_active=True)
    @classmethod 
    def get_initial_price(self):
        initial_price = 0
        frame = self.objects.filter(is_active=True).first()
        for value in Value.objects.filter(parameter__tab_group__tab__frame=frame):
            initial_price += value.price 
        return initial_price
    class Meta: 
        ordering = ['order']
        verbose_name = "Тип рами"
        verbose_name_plural = "Типи рами";


class FrameColor(GeneralMixin, FrameMixin):
    class Meta: 
        ordering = ['order']
        verbose_name = "Колір рами" 
        verbose_name_plural = "Кольори рами";
    

class Tab(BaseMixin, NameMixin, CodeMixin, ImageMixin, FrameMixin):
    description = models.TextField(verbose_name="Опис")

    def get_tab_groups(self): 
        return TabGroup.objects.filter(is_active=True, tab=self)
    @classmethod
    def modeltranslation_fields(self):
        return super().modeltranslation_fields() + ['description']
    def __str__(self):
         return f'Назва рами:{self.frame.name}, Назва:{self.name}'
    
    class Meta: 
        ordering = ['order']
        verbose_name = "Вкладка"
        verbose_name_plural = "Вкладки"
         


class TabGroup(BaseMixin, NameMixin):
    tab = models.ForeignKey(verbose_name="Вкладка", to="constructor.Tab", on_delete=models.SET_NULL, blank=True, null=True)

    def get_parameters(self): 
        return Parameter.objects.filter(is_active=True, tab_group=self)

    def __str__(self):
         return f'Назва вкладки:{self.tab.name}, Назва:{self.name}'
    
    class Meta: 
        ordering = ['order']
        verbose_name = "Група"
        verbose_name_plural = "Групи"
         


class Parameter(BaseMixin, NameMixin):
    radio_small = 'radio_small'
    radio_color = 'radio_color'
    radio_img = 'radio_img'
    checkbox_options = 'checkbox_options'
    type_choices = (
        ("radio_small","radio_small"),
        ("radio_color","radio_color"),
        ("radio_img","radio_img"),
        ("checkbox_options","checkbox_options"),
    )
    tab_group = models.ForeignKey(verbose_name="Група", to="constructor.TabGroup", on_delete=models.SET_NULL, blank=True, null=True)
    type      = models.CharField(verbose_name="Тип", blank=True, null=True, choices=type_choices, max_length=30)

    def get_values(self): 
        return Value.objects.filter(is_active=True, parameter=self)

    def __str__(self):
         return f'Назва групи:{self.tab_group.name}, Назва:{self.name}'
    
    class Meta: 
        ordering = ['order']
        verbose_name = "Параметер групи"
        verbose_name_plural = "Параметри групи"
         


class Value(GeneralMixin):
    parameter = models.ForeignKey(verbose_name="Параметр", to="constructor.Parameter", on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return f'Назва параметра:{self.parameter.name} ' + super().__str__() 

    class Meta: 
        ordering = ['order']
        verbose_name = "Значення параметра"
        verbose_name_plural = "Значення параметра"

