from .models import *
from django.contrib import admin


class UserDatasetAdmin(admin.ModelAdmin):
    list_display = [field.name for field in UserDataset._meta.fields]
    list_display_links = ['name']


admin.site.register(UserDataset, UserDatasetAdmin)
