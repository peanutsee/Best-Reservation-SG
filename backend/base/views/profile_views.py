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
def retrieveUserProfile(request):
    user = request.user
    if user:
        user_serialized = UserSerializerWithToken(user, many=False)
        user_data = user_serialized.data

        profile = Profile.objects.get(user=user)
        profile_serializer = ProfileSerializer(profile, many=False)
        profile_data = profile_serializer.data

        user_data.update(profile_data)

        return Response(user_data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    if user:
        profile = Profile.objects.get(user=user)
        data = request.data

        # Update User Details
        if data['email'] != '':
            user.email = data['email']
            user.username = data['email']
            user.first_name = data['first_name']
            user.last_name = data['last_name']
            profile.contact_number = data['contact_number']
            if data['password'] != '':
                user.password = make_password(data['password'])

        # Update Profile Details
        if data['sms_notification'] == '':
            data['sms_notification'] = profile.sms_notification
        if data['email_notification'] == '':
            data['email_notification'] = profile.sms_notification
        
        profile.sms_notification = data['sms_notification']
        profile.email_notification = data['email_notification']

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
def deleteUserProfile(request):
    user = request.user
    if user:
        user.delete()
        return Response("User Deleted", status=status.HTTP_200_OK)
