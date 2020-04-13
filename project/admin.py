from django.contrib import admin
from box.core.sw_auth.admin import BoxUserAdmin
from django.contrib.auth import get_user_model

admin.site.register(get_user_model(), BoxUserAdmin)


