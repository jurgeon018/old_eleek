from django.contrib import admin
from box.core.sw_auth.admin import BoxUserAdmin
from django.contrib.auth import get_user_model
from .models import * 


admin.site.register(get_user_model(), BoxUserAdmin)

@admin.register
class CertificateAdmin(admin.ModelAdmin):
    pass 

@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    pass 

