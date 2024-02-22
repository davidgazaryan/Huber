from django.forms import ModelForm
from .models import Order,Review
from django import forms

class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ['user','service_type', 'order_description', 'order_date']
        widget = {'order_date' : forms.DateInput(attrs={'type':'date'})}

class ReviewForm(ModelForm):
    class Meta:
        model = Review
        fields = '__all__'