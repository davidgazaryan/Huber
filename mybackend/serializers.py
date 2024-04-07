from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Review, Order


class UserSerlializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password','email']

        def validate_username(self,value):
            if User.objects.filter(username=value).exists():
                raise serializers.ValidationError("This email is already taken")
            if not (value.endswith('@example.com') or value.endswith('@example.edu')):
                raise serializers.ValidationError('invalid email')
            return value

class ReviewSerlializer(serializers.ModelSerializer):
    class Meta:
        model = Review 
        fields = ['user', 'title', 'body', 'rating', 'created_at']

        def validate_rating(self,value):
            try:
                rating = int(value)
            except (TypeError, ValueError):
               raise serializers.ValidationError("Rating must be an integer.")
            if value  < 1 or value > 5:
                raise serializers.ValidationError('rating must be between 1 and 5')
            return value

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
    
    def validate(self,data):
        if data['order_date'] < data['created_at']:
            raise serializers.ValidationError('Pick a date in the future')
        return data