from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('list/', student_list, name='list'),
    path('add/', student_add, name='Add Student'),
    path('update/<int:id>', student_update, name='update'),
    path('delete/<int:id>', student_delete, name='delete'),
    path('student/<int:id>', student_detail, name="detail"),

    
]
