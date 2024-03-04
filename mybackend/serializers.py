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
        fields = ['user', 'title', 'body', 'rating', 'created_at']

        def validate_rating(self,value):
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