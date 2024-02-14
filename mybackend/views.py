from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.response import Response
from .serializers import UserSerlializer
from rest_framework import status 
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required


@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, Username=request.data['username'])
    if not user.check_password(): return Response({'detail': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerlializer(instance=user)
    return Response({"token":token.key, "user":serializer.data})
    
@api_view(['POST'])
def signup(request):
    serializer = UserSerlializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token":token.key, "user":serializer.data})
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response({})

@login_required
def leave_review(request):
    if not request.User.is_authenticated: # maybe search for better way 
        redirect('login')
        
