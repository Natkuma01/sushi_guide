from django.shortcuts import render
from rest_framework import viewsets
from .models import SushiType
from .serializers import SushiTypeSerializer

class SushiTypeViewSet(viewsets.ModelViewSet):
    queryset = SushiType.objects.all()
    serializer_class = SushiTypeSerializer
    