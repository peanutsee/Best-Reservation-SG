from django.contrib.auth.hashers import make_password
from django.core.mail import EmailMultiAlternatives
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..serializers import *

"""
Handles User views:
1. Login
2. Registration 
"""

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    """
    Returns message after registration of user
    Parameters:
        request: HTTP request - used to obtain data sent from frontend
    Returns:
        Response: data or error message
    """
    data = request.data
    try:
        user = User.objects.get(email=data['email'])
        if user:
            message = {'detail': 'User with this email already exists'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
    except:
        try:
            user = User.objects.create(
                first_name=data['firstName'],
                last_name=data['lastName'],
                username=data['email'],
                email=data['email'],
                password=make_password(data['password'])
            )

            profile = Profile.objects.create(
                user=user,
                contact_number=data['contactNumber']
            )

            user_serializer = UserSerializerWithToken(user, many=False)
            profile_serializer = ProfileSerializer(profile, many=False)
            user_data, profile_data = user_serializer.data, profile_serializer.data
            user_data.update(profile_data)
            return Response(user_data, status=status.HTTP_201_CREATED)
        except:
            message = {'detail': 'User registration not successful!'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
