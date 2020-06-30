from django.contrib import admin
from box.core.sw_auth.admin import BoxUserAdmin
from django.contrib.auth import get_user_model
from .models import * 
from .resources import * 
from import_export.admin import ImportExportModelAdmin


admin.site.register(get_user_model(), BoxUserAdmin)


@admin.register
class CertificateAdmin(ImportExportModelAdmin):
    resource_class = CertificateResource 


@admin.register(Partner)
class PartnerAdmin(ImportExportModelAdmin):
    resource_class = PartnerResource 


@admin.register(TestDrive)
class TestDriveAdmin(admin.ModelAdmin):
    pass 


@admin.register(TestDriveModel)
class TestDriveModelAdmin(ImportExportModelAdmin):
    resourcce_class = TestDriveModelResource


class VeloSliderAdmin(ImportExportModelAdmin):
    resource_class = VeloSliderResource


class TestDriveSliderAdmin(ImportExportModelAdmin):
    resource_class = TestDriveSliderResource





