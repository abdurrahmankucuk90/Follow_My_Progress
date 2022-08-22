from django.db import models

# Create your models here.
class Student(models.Model):
    COUNTRIES = [
        ('TR','Turkey'),
        ('US', 'America'),
        ('DE', 'Germany'),
        ('FR', 'France')
    ]
    first_name = models.CharField('Adi', max_length=50)
    second_name = models.CharField('Soyadi', max_length=50)
    # full_name = first_name + " " + second_name
    number = models.IntegerField("Numara")
    about = models.TextField('Hakkinda', blank=True, null=True)
    country = models.CharField('Ulke', max_length=2, choices = COUNTRIES, default='TR')
    avatar = models.ImageField('Resim',blank=True, null = True , upload_to='media/')
    registered_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField( auto_now=True)

    def __str__(self):
        return f'{self.number} {self.first_name} {self.second_name}'
    
    
    class Meta:
        ordering = ['number']