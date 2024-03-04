from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.response import Response
from .serializers import UserSerlializer, OrderSerializer, ReviewSerlializer
from rest_framework import status 
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponseRedirect
from django.urls import reverse


@ensure_csrf_cookie
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, Email=request.data['email'])
    if not user.check_password(): return Response({'detail': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerlializer(instance=user)
    return Response({"token":token.key, "user":serializer.data})
    
@ensure_csrf_cookie
@api_view(['POST'])
def signup(request):
    serializer = UserSerlializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(email=request.data['email'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token":token.key, "user":serializer.data})
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@ensure_csrf_cookie
@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response({})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def leave_review(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse('login'))
    if request.method == 'POST':
        serializer = ReviewSerlializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def order_ride(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse('login'))
    if request.method == 'POST':
        serlializer = OrderSerializer(data=request.data)
        if serlializer.is_valid:
            serlializer.save()
            return Response(serlializer.data,status=status.HTTP_201_CREATED)
        return Response(serlializer.errors,status=status.HTTP_400_BAD_REQUEST)
