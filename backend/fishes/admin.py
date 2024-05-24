from django.contrib import admin
from fishes.models import Glossary, Fish, FishCategory


@admin.register(FishCategory)
class FishCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "id")


@admin.register(Fish)
class FishAdmin(admin.ModelAdmin):
    list_display = ("name", "id", "family")


@admin.register(Glossary)
class GlossaryAdmin(admin.ModelAdmin):
    list_display = ("english", "japanese")