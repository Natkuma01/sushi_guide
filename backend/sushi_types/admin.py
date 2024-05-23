from django.contrib import admin
from sushi_types.models import SushiType

@admin.register(SushiType)
class SushiTypeAdmin(admin.ModelAdmin):
    list_display = ("name", "id")