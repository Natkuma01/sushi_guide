from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import FishCategory, Fish, Glossary
from .serializers import FishCategorySerializer, FishSerializer, GlossarySerializer


class FishCatergoryViewSet(viewsets.ModelViewSet):
    queryset = FishCategory.objects.all()
    serializer_class = FishCategorySerializer

    @action(detail=True, methods=['get'])
    def fishes(self, request, pk=None):
        category = get_object_or_404(FishCategory, pk=pk)
        fishes = Fish.objects.filter(family=category)
        serializer = FishSerializer(fishes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        

class FishViewSet(viewsets.ModelViewSet):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer   

class GlossaryViewSet(viewsets.ModelViewSet):
    queryset = Glossary.objects.all()
    serializer_class = GlossarySerializer

 