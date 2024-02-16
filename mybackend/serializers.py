from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Review


class UserSerlializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','password','email']

class ReviewSerlializer(serializers.ModelSerializer):
    class Meta:
        model = Review 
        fields = '__all__'