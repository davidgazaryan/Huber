"""Holawebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mybackend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', views.loginview, name='loginview'),
    path('api/signup/', views.signup, name='signup'),
    path('api/test_token/', views.test_token, name='test_token'),
    path('api/review/',views.leave_review,name='review'),
    path('api/order/',views.order_ride, name='order'),
    path('api/order/<int:id>/', views.update_order, name='update_order'),
    

]
