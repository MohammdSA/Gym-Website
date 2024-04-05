from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
import fastapi
from . import views

urlpatterns = [
    path('classes/', views.classes, name="Classes"),
    path('classes/<int:id>/', views.classDetails, name="Class Details"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
