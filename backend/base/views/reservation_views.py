from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from ..serializers import *
from ..models import *
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from datetime import datetime

# Not sure how implement the following tasks:
# TODO add Download PDF of reservation
# TODO add generate reservation link
# TODO add auto changing of status to Reservation Completed --> can come under BillDetails? idk
# TODO auto delete Reservation if abandon Reservation , deposit forfeited

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllReservation(request):

    user = request.user

    # Sort Active Reservation
    active_reservations = Reservation.objects.filter(reservation_owner=user, reservation_is_completed=False)
    is_part_of_active_reservations = IsPartOf.objects.filter(reservation_diner=user)
    for is_part_of in is_part_of_active_reservations:
        if ( is_part_of.reservation.reservation_is_completed == False ):
            active_reservations.append(is_part_of.reservation)

    active_reservations_serialized = ReservationSerializer(active_reservations, many=True)
    active_reservations_data = active_reservations_serialized.data
    for reservation in active_reservations_data:
        # Update Fields
        restaurant = Restaurant.objects.get(id=reservation['reservation_restaurant']).restaurant_name
        reservation['reservation_restaurant'] = restaurant
        date, time = datetime.strptime(reservation['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').date(), datetime.strptime(reservation['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').time()
        reservation['reservation_date'] = date
        reservation['reservation_time'] = time 
        
        # Get Pre-Order Field
        preorder = Order.objects.get(order_reservation=reservation['id'])
        preorder_serialized = OrderSerializer(preorder, many=False)
        reservation.update({"pre_order_id": preorder_serialized.data['id']})
                   
    # Sort Completed Reservation
    completed_reservations = Reservation.objects.filter(reservation_owner=user, reservation_is_completed=True)
    is_part_of_completed_reservations = IsPartOf.objects.filter(reservation_diner=user)
    for is_part_of in is_part_of_completed_reservations:
        if ( is_part_of.reservation.reservation_is_completed == True ):
            completed_reservations.append(is_part_of.reservation)

    completed_reservations_serialized = ReservationSerializer(completed_reservations, many=True)
    completed_reservations_data = completed_reservations_serialized.data
    for reservation in completed_reservations_data:
        restaurant = Restaurant.objects.get(id=reservation['reservation_restaurant']).restaurant_name
        reservation['reservation_restaurant'] = restaurant
        date, time = datetime.strptime(reservation['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').date(), datetime.strptime(reservation['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').time()
        reservation['reservation_date'] = date
        reservation['reservation_time'] = time 
    
    output = {
        "active_reservations": active_reservations_data,
        'completed_reservations': completed_reservations_data
    }
    
    return Response(output, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createReservation(request):

    user = request.user
    data = request.data

    restaurant = Restaurant.objects.get(id=data['restaurant_id'])
    reservation = Reservation.objects.create(
        reservation_restaurant=restaurant,
        reservation_owner=user,
        reservation_date_time=data['reservation_time'],
        reservation_pax=data['reservation_pax'],
    )

    reservation.reservation_url = f"http://localhost:3000/reservation/{reservation.id}"

    bill = BillDetail.objects.create(
        bill_reservation=reservation,
        before_tax_bill = 0.00,
    )
    
    order = Order.objects.create(order_reservation=reservation)
    bill.save()
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
        is_part_of = IsPartOf.objects.filter(reservation=reservation)
        if reservation.reservation_owner == user:
            reservation_serializer = ReservationSerializer(reservation, many=False)
            return Response(reservation_serializer.data, status=status.HTTP_200_OK)

        # If they are reservation diner of the reservation
        all_reservation_diner_in_all_reservation = IsPartOf.objects.all()
        for part_of in all_reservation_diner_in_all_reservation:
            if part_of.reservation_diner == user:
                if part_of.reservation == reservation:
                    # then they can get the reservation details
                    reservation_serializer = ReservationSerializer(reservation, many=False)
                    return Response(reservation_serializer.data, status=status.HTTP_200_OK)

    except:
        return Response(f"Reservation id {pk} do not exist", status=status.HTTP_400_BAD_REQUEST)

    message = "User is not authorized!"
    return Response(message, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateReservation(request, pk):

    user = request.user
    data = request.data

    try:
        reservation = Reservation.objects.filter(id=pk)[0]
        if reservation.reservation_owner == user:
            if reservation.reservation_is_completed != True:
                try:
                    reservation.reservation_pax = data['reservation_pax']
                except:
                    pass
                try:
                    reservation.reservation_date_time = data['reservation_date_time']
                except:
                    pass
                reservation.save()
                reservation_serializer = ReservationSerializer(reservation, many=False)
                return Response(reservation_serializer.data, status=status.HTTP_200_OK)
            else:
                message = "Unable to update as Reservation is completed"
                return Response(message, status=status.HTTP_204_NO_CONTENT)

        # If they are reservation diner of the reservation
        all_reservation_diner_in_all_reservation = IsPartOf.objects.all()
        for part_of in all_reservation_diner_in_all_reservation:
            if part_of.reservation_diner == user:
                if part_of.reservation == reservation:
                    if reservation.reservation_is_completed != True:
                        # then they can edit
                        try:
                            reservation.reservation_pax = data['reservation_pax']
                        except:
                            pass
                        try:
                            reservation.reservation_date_time = data['reservation_date_time']
                        except:
                            pass
                        reservation.save()
                        reservation_serializer = ReservationSerializer(reservation, many=False)
                        return Response(reservation_serializer.data, status=status.HTTP_200_OK)
                    else:
                        message = "Unable to update as Reservation is completed"
                        return Response(message, status=status.HTTP_204_NO_CONTENT)

    except:
        return Response(f"Reservation id {pk} do not exist", status=status.HTTP_400_BAD_REQUEST)

    message = "User is not authorized!"
    return Response(message, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteReservation(request, pk):

    user = request.user
    try:
        reservation = Reservation.objects.filter(id=pk)[0]
        if reservation.reservation_owner == user:
            if reservation.reservation_is_completed != True:
                reservation.delete()
                message = "Reservation deleted"
                return Response(message, status=status.HTTP_204_NO_CONTENT)
            else:
                message = "Unable to delete as Reservation is completed"
                return Response(message, status=status.HTTP_204_NO_CONTENT)

        # If they are reservation diner of the reservation
        all_reservation_diner_in_all_reservation = IsPartOf.objects.all()
        for part_of in all_reservation_diner_in_all_reservation:
            if part_of.reservation_diner == user:
                if part_of.reservation == reservation:
                    if reservation.reservation_is_completed != True:
                        # then they can delete the reservation
                        reservation.delete()
                        message = "Reservation deleted"
                        return Response(message, status=status.HTTP_204_NO_CONTENT)
                    else:
                        message = "Unable to delete as Reservation is completed"
                        return Response(message, status=status.HTTP_204_NO_CONTENT)
    except:
        return Response(f"Reservation id {pk} do not exist", status=status.HTTP_400_BAD_REQUEST)

    message = "User is not authorized!"
    return Response(message, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def joinReservation(request, pk):

    #create and validate link
    user = request.user
    try:
        current_reservation = Reservation.objects.filter(id=pk)[0]
        if current_reservation.number_of_users_in_reservation < current_reservation.reservation_pax:
            current_reservation.number_of_users_in_reservation += 1
            current_reservation.save()
            is_part_of = IsPartOf.objects.create(
                reservation=current_reservation,
                reservation_diner=user,
            )
            is_part_of.save()

            ispartof_serializer = IsPartOfSerializer(is_part_of, many=False)
            return Response(ispartof_serializer.data, status=status.HTTP_200_OK)

        else:
            return Response("Max Reservation Pax has been reached, please update Reservation pax to join!", status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response(f"Reservation id {pk} do not exist", status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def removeReservation(request, pk):

    user = request.user
    try:
        all_is_part_of = IsPartOf.objects.all()
        for is_part_of in all_is_part_of:
            if is_part_of.reservation_diner == user:
                if is_part_of.reservation == Reservation.objects.filter(id=pk)[0]:
                    reservation = Reservation.objects.get(id=pk)
                    reservation.number_of_users_in_reservation -= 1
                    reservation.save()
                    is_part_of.delete()
                    message = "Reservation diner deleted"
                    return Response(message, status=status.HTTP_204_NO_CONTENT)

    except:
        return Response(f"Reservation id {pk} do not exist", status=status.HTTP_400_BAD_REQUEST)

    message = "User is not authorized!"
    return Response(message, status=status.HTTP_401_UNAUTHORIZED)
