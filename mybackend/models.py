from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator,MinValueValidator


# Create your models here.

class Review(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    title = models.CharField(max_length = 100)
    body = models.TextField()
    rating = models.IntegerField(validators=[MaxValueValidator(5,message="Choose a number from 1-5"),MinValueValidator(1,message='Choose a number from 1-5')])
    date_created = models.DateTimeField(auto_now_add = True)
    

class Order(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    services = [('airport_pickup','Airport Pickup'),
                ('hourly_ride', 'Hourly Booking'),
                ('long_distance_trip','Long Distance Trip')]
    dates = []
    
    service_type = models.CharField(max_length=20,choices=services)
    order_description = models.TextField(blank=True,null=True)
    order_date = models.DateTimeField(choices=)
