from django.db import models

# Create your models here.
class Review(models.Model):
    Date = models.CharField(max_length=70, blank=False, default='')
    P1 = models.CharField(max_length=200,blank=False, default='')
    P2 = models.CharField(max_length=200,blank=False, default='')
    P3 = models.CharField(max_length=200,blank=False, default='') 
    P4 = models.CharField(max_length=200,blank=False, default='')
    P5 = models.CharField(max_length=200,blank=False, default='')
    P6 = models.CharField(max_length=200,blank=False, default='') 
    P7 = models.CharField(max_length=200,blank=False, default='')

    def __str__(self):
        return str(self.item)