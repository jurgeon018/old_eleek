from django.db import models 
from colorfield.fields import ColorField
from box.core.helpers import get_admin_url
import json 
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
    code = models.SlugField(verbose_name="Код", max_length=255, blank=True, null=True)
    
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
    order = models.IntegerField(verbose_name="Порядок", default=0, blank=False, null=False)

    class Meta: 
        abstract = True 

    def get_admin_url(self):
        return get_admin_url(self)

class GeneralMixin(BaseMixin,ColorMixin,PriceMixin,NameMixin,ImageMixin,CodeMixin):

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

    def get_initial_price(self):
        initial_price = 0
        initial_price += self.price 
        for value in Value.objects.filter(parameter__tab_group__tab__frame=self):
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
         return f'{self.id}.{self.frame.name} -> {self.name}'
    
    class Meta: 
        ordering = ['order']
        verbose_name = "Вкладка"
        verbose_name_plural = "Вкладки"


class TabGroup(BaseMixin, NameMixin):
    # radio_small = 'radio_small'
    # radio_color = 'radio_color'
    # radio_img = 'radio_img'
    checkbox_options = 'checkbox_options'
    type_choices = (
        # (radio_small,"Одиночний вибір"),
        # (radio_color,"Колір"),
        # (radio_img,"Одиночний вибір з зображенням"),
        (checkbox_options,"Вибір чекбоксом"),
    )
    type      = models.CharField(verbose_name="Тип", blank=True, null=True, choices=type_choices, max_length=30)
    tab = models.ForeignKey(verbose_name="Вкладка", to="constructor.Tab", on_delete=models.SET_NULL, blank=True, null=True)

    def get_parameters(self): 
        return Parameter.objects.filter(is_active=True, tab_group=self)

    def __str__(self):
         return f'{self.id}.{self.tab.frame.name} -> {self.tab.name} -> {self.name}'
    
    class Meta: 
        ordering = ['order']
        verbose_name = "Група"
        verbose_name_plural = "Групи"
         


class Parameter(BaseMixin, NameMixin, CodeMixin):
    radio_small = 'radio_small'
    radio_color = 'radio_color'
    radio_img = 'radio_img'
    checkbox_options = 'checkbox_options'
    type_choices = (
        (radio_small,"Одиночний вибір"),
        (radio_color,"Колір"),
        (radio_img,"Одиночний вибір з зображенням"),
        (checkbox_options,"Вибір чекбоксом"),
    )
    type      = models.CharField(verbose_name="Тип", blank=True, null=True, choices=type_choices, max_length=30)
    tab_group = models.ForeignKey(verbose_name="Група", to="constructor.TabGroup", on_delete=models.SET_NULL, blank=True, null=True)

    def get_values(self): 
        return Value.objects.filter(is_active=True, parameter=self)

    def __str__(self):
         return f'{self.id}.{self.tab_group.tab.frame.name} -> {self.tab_group.tab.name} -> {self.tab_group.name} -> {self.name}'
    
    class Meta: 
        ordering = ['order']
        verbose_name = "Параметер групи"
        verbose_name_plural = "Параметри групи"
         


class Value(GeneralMixin):
    parameter = models.ForeignKey(
        verbose_name="Параметр", to="constructor.Parameter", 
        on_delete=models.SET_NULL, blank=True, null=True,
    )

    def get_children(self):
        children = Relationship.objects.filter(parent=self)
        children = children.values_list('children__id', flat=True)
        children = Value.objects.filter(id__in=children)
        return children

    def get_parents(self):
        parents = Relationship.objects.filter(children=self)
        parents = parents.values_list('parent__id', flat=True)
        parents = Value.objects.filter(id__in=parents)
        return parents

    def generate_children(self):
        result = {}
        for children in self.get_children():
            code = children.parameter.code
            if not result.get(code):
                result[code] = []
            result[code].append(children.code)
        return result

    def generate_children_json(self):
        result = json.dumps(self.generate_children())
        return result 

    def __str__(self):
        return f'{self.id}. {self.parameter.tab_group.tab.frame.name} -> {self.parameter.tab_group.tab.name} -> {self.parameter.tab_group.name} -> {self.parameter.name} -> {self.name}'

    class Meta: 
        ordering = ['order']
        verbose_name = "Значення параметра"
        verbose_name_plural = "Значення параметра"


class Relationship(models.Model):
    parent   = models.ForeignKey(Value, related_name='parent_relationships', on_delete=models.CASCADE)
    children = models.ForeignKey(Value, related_name='child_relationships', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id}.{self.parent} -> {self.children}'

    class Meta:
        verbose_name = "Звязок між елементами"
        verbose_name_plural = "Звязки між елементами"
        unique_together = [
            'parent',
            'children',
        ]


class ConstructorForm(models.Model):
    name    = models.CharField(verbose_name="Імя", blank=True, null=True, max_length=255)
    email   = models.CharField(verbose_name="Емейл", blank=True, null=True, max_length=255)
    phone   = models.CharField(verbose_name="Телефон", blank=True, null=True, max_length=255)
    message = models.TextField(verbose_name="Повідомлення", blank=True, null=True)
    values  = models.ManyToManyField(verbose_name="Вибрані елементи", to="constructor.Value", blank=True)

    def __str__(self):
        return f'{self.id}. {self.name}'
    
    class Meta:
        verbose_name = "Заявка з конструктора"
        verbose_name_plural = "Заявки з конструктора"

