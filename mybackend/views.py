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
from django.core.mail import send_mail
from .models import Review,Order
from django.http import JsonResponse


@ensure_csrf_cookie
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, Email=request.data['email'])
    if not user.check_password(): return Response({'detail': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    token, created = Token.objects.get_or_create(user=user)
    response = JsonResponse({"user": UserSerlializer(instance=user).data})
    response.set_cookie(key='token', value=token.key, httponly=True)
    
    return response
    
@ensure_csrf_cookie
@api_view(['POST'])
def signup(request):
    serializer = UserSerlializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        user = User.objects.get(email=request.data['email'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        response = JsonResponse({"user": serializer.data})
        response.set_cookie(key='token', value=token.key, httponly=True)
        return response
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
        return HttpResponseRedirect(reverse('/login'))
    if request.method == 'POST':
        serializer = ReviewSerlializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def order_ride(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse('/login'))
    if request.method == 'POST':
        serlializer = OrderSerializer(data=request.data)
        if serlializer.is_valid(raise_exception=True):###added raise exception
            serlializer.save()
            service_type = request.data.get('service_type')
            order_description = request.data.get('order_description')
            order_date = request.data.get('order_date')
            pickup_location = request.data.get('pickup_location')
            order_destination = request.data.get('order_destination')
        
            subject = f'Order Confirmation for {service_type}'
            message = f'Your ride order has been successfully placed.\nDescription : {order_description}\nOrder Date: {order_date}\nPickup Location: {pickup_location}\nDropOff Location: {order_destination}'
            from_email = 'admin@example.com'  # Replace with your email address or set it to None for default
            to_email = request.user.email  # Assuming user email is stored in User model
            
            send_mail(subject, message, from_email, [to_email])
            return Response(serlializer.data,status=status.HTTP_201_CREATED)
        return Response(serlializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def update_order(request,pk):
    order = get_object_or_404(object=Order, id=pk)
    serializer = OrderSerializer(instance=order,data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        service_type = request.data.get('service_type')
        order_description = request.data.get('order_description')
        order_date = request.data.get('order_date')
        pickup_location = request.data.get('pickup_location')
        order_destination = request.data.get('order_destination')

        subject = f'Updated Order Confirmation for {service_type}'
        message = f'Your ride order has been successfully updated.\nDescription : {order_description}\nOrder Date: {order_date}\nPickup Location: {pickup_location}\nDropOff Location: {order_destination}'
        from_email = 'admin@example.com'  # Replace with your email address or set it to None for default
        to_email = request.user.email  # Assuming user email is stored in User model
            
        send_mail(subject, message, from_email, [to_email])
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def user_orders(request):
    username = request.query_params.get('username')
    email = request.query_params.get('email')

    # Retrieve the user based on username or email
    if username:
        user = get_object_or_404(User, username=username)
    elif email:
        user = get_object_or_404(User, email=email)
    else:
        return Response({'error': 'Username or email parameter is required'}, status=400)

    # Fetch orders associated with the user
    orders = Order.objects.filter(user=user)
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)