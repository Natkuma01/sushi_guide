from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SushiTypeViewSet

router = DefaultRouter()
router.register('sushi_types', SushiTypeViewSet, basename='sushi_types')

urlpatterns = [
    
    path('', include(router.urls)),
]
