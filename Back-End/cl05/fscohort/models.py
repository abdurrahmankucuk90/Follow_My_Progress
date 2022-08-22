from pydoc import describe
from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    number = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    #Id'yi kendi olusturuyor
    register_date = models.DateField(auto_now_add=True)
    #outo_now_add bir kere ekler auto_now her update'de guncelliyor
    last_update_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return (f'{self.id} - {self.number} - {self.first_name}')

    def student_year_status(self):
        "Returns the student's year status."
        import datetime
        if self.register_date < datetime.date(2019, 1, 1):
            return "Senior"
        elif self.register_date < datetime.date(2020, 1, 1):
            return "Junior"
        else:
            return "Freshman"

    #Siralamasi vb buradan yapilabiliyor
    class Meta:
        ordering = ['id']
        verbose_name_plural = 'student_list'
        # db_tables = "<databaseVisualName>"