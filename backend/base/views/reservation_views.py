from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from base.serializers import *
from base.models import *
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createReservation(request):

    user = request.user
    data = request.data
    # filter will always give a list of query, if only 1 query in the list then slice index 0
    # ModelsID is always created from django , hence can query by RestaurantID
    restaurant = Restaurant.objects.filter(id=data['restaurant_id'])[0]
    reservation = Reservation.objects.create(
        reservation_restaurant=restaurant,
        reservation_owner=user,
        reservation_date_time=data['reservation_time'],
        reservation_pax=data['reservation_pax'],
    )

    order = Order.objects.create(order_reservation=reservation)
    order.save()
    reservation.save()
    reservation_serializer = ReservationSerializer(reservation, many=False)
    return Response(reservation_serializer.data, status=status.HTTP_201_CREATED)  # return it in our api response


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getReservation(request, pk):

    user = request.user
    try:
        reservation = Reservation.objects.get(id=pk)
        is_part_of = IsPartOf.objects.get()
        if reservation.reservation_owner == user | isPartOf.reservation_diner == user:
            serializer = ReservationSerializer(reservation, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response(f"Reservation id {pk} do not exist", status=HTTP_400_BAD_REQUEST)

    message = "User is not authorized!"
    return Response(message, status=HTTP_401_UNAUTHORIZED)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateReservation(request, pk):

    user = request.user
    data = request.data

    try:
        reservation = Reservation.objects.filter(id=pk)[0]
        if reservation.reservation_owner == user:
            try:
                reservation.reservation_pax = data['reservation_pax']
            except:
                pass
            try:
                reservation.reservation_date_time = data['reservation_date_time']
            except:
                pass
            reservation.save()
            serializer = ReservationSerializer(reservation, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response(f"Reservation id {pk} do not exist", status=HTTP_400_BAD_REQUEST)

    message = "User is not authorized!"
    return Response(message, status=HTTP_401_UNAUTHORIZED)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteReservation(request, pk):

    user = request.user
    try:
        reservation = Reservation.objects.filter(id=pk)[0]
        if reservation.reservation_owner == user:
            reservation.delete()
            message = "Reservation deleted"
            return Response(message, status=status.HTTP_204_NO_CONTENT)
    except:
        return Response(f"Reservation id {pk} do not exist", status=HTTP_400_BAD_REQUEST)

    message = "User is not authorized!"
    return Response(message, status=HTTP_401_UNAUTHORIZED)

# TO add Download PDF of reservation

# TO add generate reservation link

