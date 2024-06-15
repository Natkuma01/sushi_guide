from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FishCatergoryViewSet, FishViewSet, GlossaryViewSet


router = DefaultRouter()
router.register('fish_category', FishCatergoryViewSet, basename='fish_category')
router.register('fish', FishViewSet, basename='fish')
router.register('glossary', GlossaryViewSet, basename='glossary')

urlpatterns = [
    
    path('', include(router.urls)),
]