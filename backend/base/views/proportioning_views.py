from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from base.serializers import *
from base.models import *
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def proportion(request, pk):

    user = request.user
    #Main idea is i want to implement if user part of the reservation, then allow them to get data
    #reservation = Reservation.objects.get(id=pk)
    #if reservation.reservation_diners == user:
    #then allow the following actions
    #+
    #reservation_serializer = ReservationSerializer(reservation, many=False)
    proportion = OrderItemInOrder.objects.all()
    order_serializer = OrderItemInOrderSerializer(proportion, many=True)
    return Response(order_serializer.data, status=status.HTTP_200_OK)
    #return Response(order_serializer.data +reservation_serializer.data, status=status.HTTP_200_OK)