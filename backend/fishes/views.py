from django.shortcuts import render
from rest_framework import viewsets
from .models import FishCategory, Fish, Glossary
from .serializers import FishCategorySerializer, FishSerializer, GlossarySerializer


class FishCatergoryViewSet(viewsets.ModelViewSet):
    queryset = FishCategory.objects.all()
    serializer_class = FishCategorySerializer

class FishViewSet(viewsets.ModelViewSet):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer   

class GlossaryViewSet(viewsets.ModelViewSet):
    queryset = Glossary.objects.all()
    serializer_class = GlossarySerializer

 