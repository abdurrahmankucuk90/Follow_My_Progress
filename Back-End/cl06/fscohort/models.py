from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField('Adi', max_length=50)
    second_name = models.CharField('Soyadi', max_length=50)
    # full_name = first_name + " " + second_name
    number = models.IntegerField("Numara")