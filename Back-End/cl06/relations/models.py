from django.db import models

# Create your models here.


class Creator(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        ordering = ['first_name']

# one2one relation:
class Language(models.Model):
    name = models.CharField(max_length=50)
    creator = models.OneToOneField(Creator, on_delete = models.CASCADE)

    def __str__(self):
        return f"{self.name} - {self.creator}"

        '''
on_delete properties:

# CASCADE -> if primary deleted, delete foreing too.
# SET_NULL -> if primary deleted, set foreign to NULL. (null=True)
# SET_DEFAULT -> if primary deleted, set foreing to DEFAULT value. (default='Value")
# DO NOTHING -> if primary deleted, do nothing.
# PROTECT -> if foreign is exist, can not delete primary.
#! CASCAADE  - parent silinince silinir
#! SET_NULL  - parent silinince null yapar
#! PROTECT   - parent silinince hata verir
#! DO_NOTHING - parent silinince hiçbir şey yapmaz
#! SET_DEFAULT - parent silinince default değer atar

'''
#many-to-one
class Framework(models.Model):
    name = models.CharField(max_length=50)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)

  
    def __str__(self):
        return f"{self.name} - {self.language}"

    class Meta:
        ordering = ['language']

#meny-to-meny
class Developer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    framework = models.ManyToManyField(Framework)


    def __str__(self):
        return f' {self.first_name}  {self.last_name}'


    class Meta:
        ordering = ['first_name']
