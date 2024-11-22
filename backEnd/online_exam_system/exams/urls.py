from django.urls import path
from .views import add_faculty
from . import views

urlpatterns = [
    path('faculty/add/', add_faculty, name='add_faculty'),
    path('faculty/', views.faculty_list, name='faculty_list'),
    path('faculty/remove/<int:id>/', views.remove_faculty, name='remove_faculty'),
]
