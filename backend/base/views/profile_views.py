from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from ..serializers import *

"""
1. Read Profile
2. Update Profile
3. Delete Profile
"""

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrieveUserProfile(request, pk):
    user = User.objects.filter(id=pk)[0]
    if user == request.user:
        user_serialized = UserSerializerWithToken(user, many=False)
        user_data = user_serialized.data

        profile = Profile.objects.filter(user=user)[0]
        profile_serializer = ProfileSerializer(profile, many=False)
        profile_data = profile_serializer.data

        user_data.update(profile_data)

        return Response(user_data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request, pk):
    user = User.objects.filter(id=pk)[0]
    if user == request.user:
        profile = Profile.objects.filter(user=user)[0]
        data = request.data

        # Update User Details
        user.email = data['email']
        user.username = data['email']
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        if data['password'] != '':
            user.password = make_password(data['password'])

        # Update Profile Details
        profile.contact_number = data['contact_number']
        # profile.sms_notification = data['sms_notification_setting']
        # profile.email_notification = data['email_notification_setting']

        # Save Changes
        user.save()
        profile.save()

        user_serialized = UserSerializerWithToken(user, many=False)
        user_data = user_serialized.data
        profile_serializer = ProfileSerializer(profile, many=False)
        profile_data = profile_serializer.data

        user_data.update(profile_data)

        return Response(user_data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteUserProfile(request, pk):
    user = User.objects.filter(id=pk)[0]
    if user == request.user:
        user.delete()
        return Response("User Deleted", status=status.HTTP_200_OK)
