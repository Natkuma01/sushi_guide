from rest_framework import serializers
from .models import FishCategory, Fish, Glossary


class FishCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FishCategory
        fields = (
            'id',
            'name',
            'image1',
            'image2',
            'image3',
            'image4',
            'image5',
            'description',
        )

class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = (
            'id',
            'name',
            'image1',
            'image2',
            'image3',
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
