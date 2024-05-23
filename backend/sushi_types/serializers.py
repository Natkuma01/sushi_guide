from rest_framework import serializers
from .models import SushiType

class SushiTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SushiType
        fields = (
            'id',
            'name',
            'image',
            'description',
        )