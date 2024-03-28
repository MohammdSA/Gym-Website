from django.urls import path, include
from . import views

urlpatterns = [
    path('getClasses', views.getClasses, name="Home"),
]
