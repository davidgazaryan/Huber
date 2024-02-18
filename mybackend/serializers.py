from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Review, Order


class UserSerlializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','password','email']

class ReviewSerlializer(serializers.ModelSerializer):
    class Meta:
        model = Review 
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'