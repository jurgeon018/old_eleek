from django.contrib import admin 
from django.forms import Textarea

from import_export.admin import ImportExportModelAdmin
from modeltranslation.admin import TabbedTranslationAdmin, TranslationTabularInline, TranslationStackedInline
from nested_admin import NestedTabularInline, NestedStackedInline, NestedModelAdmin
from adminsortable2.admin import SortableAdminMixin, SortableInlineAdminMixin 

from box.core.utils import AdminImageWidget

from .models import * 
from .resources import * 

class BaseAdmin(
    ImportExportModelAdmin,
    TabbedTranslationAdmin,
    ):
    readonly_fields = ['code']
    formfield_overrides = {
        models.ImageField:{"widget":AdminImageWidget},
        models.TextField: {'widget': Textarea(attrs={'rows': 1,'cols': 40})},
    }

# # # # # # # # # # # # #


class ValueInline(
    BaseAdmin,
    NestedTabularInline,
    # SortableInlineAdminMixin,
    ):
    model = Value
    exclude = []
    extra = 0
    classes = ['collapse']

class ParameterInline(
    BaseAdmin,
    NestedTabularInline,
    # SortableInlineAdminMixin,
    ):
    model = Parameter
    exclude = []
    extra = 0
    classes = ['collapse']
    inlines = [
        ValueInline,
    ]

class TabGroupInline(
    BaseAdmin,
    NestedTabularInline,
    # SortableInlineAdminMixin,
    ):
    model = TabGroup
    exclude = []
    extra = 0
    classes = ['collapse']
    inlines = [
        ParameterInline,
    ]

class TabInline(
    NestedTabularInline,
    TranslationTabularInline,
    # SortableInlineAdminMixin,
    ):
    model = Tab 
    exclude = []
    extra = 0
    classes = ['collapse']
    inlines = [
        # TabGroupInline,
    ]

class FrameColorInline(
    NestedTabularInline,
    TranslationTabularInline,
    ):
    model = FrameColor 
    exclude = []
    extra = 0
    classes = ['collapse']
    

@admin.register(FrameType)
class FrameTypeAdmin(
    BaseAdmin,
    NestedModelAdmin,
    SortableAdminMixin,
    ImportExportModelAdmin,
    TabbedTranslationAdmin,
    ):
    resource_class = FrameTypeResource
    exclude = ['color']
    inlines = [
        TabInline, 
        FrameColorInline,
    ]


@admin.register(FrameColor)
class FrameColorAdmin(BaseAdmin):
    resource_class = FrameColorResource


@admin.register(Tab)
class TabAdmin(ImportExportModelAdmin, TabbedTranslationAdmin):
    resource_class = TabResource


@admin.register(TabGroup)
class TabGroupAdmin(ImportExportModelAdmin, TabbedTranslationAdmin):
    resource_class = TabGroupResource


@admin.register(Parameter)
class ParameterAdmin(ImportExportModelAdmin, TabbedTranslationAdmin):
    resource_class = ParameterResource


@admin.register(Value)
class ValueAdmin(BaseAdmin):
    resource_class = ValueResource
    formfield_overrides = {
        models.ImageField: {'widget':AdminImageWidget}
    }




