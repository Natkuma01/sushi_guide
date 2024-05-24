from rest_framework import serializers
from .models import FishCategory, Fish, Glossary


class FishCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FishCategory
        fields = (
            'id',
            'name',
            'image',
            'description',
            'taste',
            'texture',
        )

class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = (
            'id',
            'name',
            'image',
            'family'
            'description',
            'taste',
            'texture',

        )


class GlossarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Glossary
        fields = (
            'id',
            'english',
            'japanese',
        )
