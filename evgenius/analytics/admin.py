# Register your models here.
from django.contrib import admin

from .models import *


# Register your models here.
class TagsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Tags._meta.fields]
    list_display_links = ['name_tag']


admin.site.register(Tags, TagsAdmin)


class GroupAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Group._meta.fields]
    list_display_links = ['label']


admin.site.register(Group, GroupAdmin)
