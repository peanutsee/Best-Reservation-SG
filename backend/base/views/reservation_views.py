from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from ..serializers import *
from ..models import *
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from datetime import datetime

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllReservation(request):

    user = request.user

    # Get All Part Of Reservations
    is_part_of_reservations = IsPartOf.objects.filter(reservation_diner=user)
    is_part_of_reservations_serialized = IsPartOfSerializer(is_part_of_reservations, many=True)
    is_part_of_reservations_data = is_part_of_reservations_serialized.data

    part_of_reservations = {"active_part_of": [], 'completed_part_of': []}

    for reservation in is_part_of_reservations_data:
        # Retrieve Reservation Information

        reservation = Reservation.objects.get(id=reservation['reservation'])
        reservation_serialized = ReservationSerializer(reservation, many=False)
        reservation_data = reservation_serialized.data

        restaurant = Restaurant.objects.get(id=reservation_data['reservation_restaurant']).restaurant_name
        #print(restaurant)
        reservation_data['reservation_restaurant'] = restaurant
        date, time = datetime.strptime(reservation_data['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').date(), datetime.strptime(reservation_data['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').time()
        reservation_data['reservation_date'] = date
        reservation_data['reservation_time'] = time

        # Get Pre-Order Field
        bill = BillDetail.objects.get(bill_reservation=reservation_data['id'])
        bill_serialized = BillDetailSerializer(bill, many=False)
        bill_data = bill_serialized.data
        reservation_data['bill_url'] = bill_data['bill_url']

        # Sort Active Is Part Of
        if not reservation_data['reservation_is_completed']:
            part_of_reservations['active_part_of'].append(reservation_data)

        # Sort Completed Is Part Of
        else:
            part_of_reservations['completed_part_of'].append(reservation_data)


    # Sort Active Reservation
    active_reservations = Reservation.objects.filter(reservation_owner=user, reservation_is_completed=False)
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

    completed_reservations_serialized = ReservationSerializer(completed_reservations, many=True)
    completed_reservations_data = completed_reservations_serialized.data
    
    for reservation in completed_reservations_data:
        restaurant = Restaurant.objects.get(id=reservation['reservation_restaurant']).restaurant_name
        reservation['reservation_restaurant'] = restaurant
        date, time = datetime.strptime(reservation['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').date(), datetime.strptime(reservation['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').time()
        reservation['reservation_date'] = date
        reservation['reservation_time'] = time 

        # Get Pre-Order Field
        bill = BillDetail.objects.get(bill_reservation=reservation['id'])
        bill_serialized = BillDetailSerializer(bill, many=False)
        bill_data = bill_serialized.data
        reservation['bill_id'] = bill_data['id']

    output = {
        "active_reservations": active_reservations_data,
        'completed_reservations': completed_reservations_data,
        'is_part_of_reservation': part_of_reservations,
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
        if reservation.reservation_owner == user:
            #print(reservation)
            reservation_serializer = ReservationSerializer(reservation, many=False)
            #print(reservation_serializer.data)
            reservation_data = reservation_serializer.data

            # restaurant = Restaurant.objects.get(id=reservation_data['reservation_restaurant']).restaurant_name
            # Get restaurant data
            restaurant = Restaurant.objects.get(id=reservation_data['reservation_restaurant'])
            restaurant_serialized = RestaurantSerializer(restaurant, many=False)
            # update the return value with one more key value pair(Restaurant and its data)
            reservation_data.update({"Restaurant": restaurant_serialized.data})

            date, time = datetime.strptime(reservation_data['reservation_date_time'],
                                           '%Y-%m-%dT%H:%M:%SZ').date(), datetime.strptime(
                reservation_data['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').time()
            reservation_data['reservation_date'] = date
            reservation_data['reservation_time'] = time

            # Get Pre-Order Field
            preorder = Order.objects.get(order_reservation=reservation_data['id'])
            preorder_serialized = OrderSerializer(preorder, many=False)
            reservation_data.update({"pre_order_id": preorder_serialized.data['id']})

            # print(reservation_data['reservation_owner'])
            # print(Profile.objects.get(user=reservation_data['reservation_owner']).user.first_name)
            reservation_owner_user_object = Profile.objects.get(user=reservation_data['reservation_owner']).user
            reservation_owner_name = reservation_owner_user_object.first_name + ' ' + reservation_owner_user_object.last_name
            # print(reservation_owner_name)
            reservation_data['reservation_owner'] = reservation_owner_name
            # print( restaurant)
            return Response(reservation_data, status=status.HTTP_200_OK)

        # If they are reservation diner of the reservation
        all_reservation_diner_in_all_reservation = IsPartOf.objects.all()
        for part_of in all_reservation_diner_in_all_reservation:
            if part_of.reservation_diner == user:
                if part_of.reservation == reservation:
                    # then they can get the reservation details
                    reservation_serializer = ReservationSerializer(reservation, many=False)
                    reservation_data = reservation_serializer.data

                    restaurant = Restaurant.objects.get(id=reservation_data['reservation_restaurant']).restaurant_name
                    reservation_data['reservation_restaurant'] = restaurant
                    date, time = datetime.strptime(reservation_data['reservation_date_time'],
                                                   '%Y-%m-%dT%H:%M:%SZ').date(), datetime.strptime(
                        reservation_data['reservation_date_time'], '%Y-%m-%dT%H:%M:%SZ').time()
                    reservation_data['reservation_date'] = date
                    reservation_data['reservation_time'] = time

                    # Get Pre-Order Field
                    preorder = Order.objects.get(order_reservation=reservation_data['id'])
                    preorder_serialized = OrderSerializer(preorder, many=False)
                    reservation_data.update({"pre_order_id": preorder_serialized.data['id']})

                    reservation_owner_user_object = Profile.objects.get(user=reservation_data['reservation_owner']).user
                    reservation_owner_name = reservation_owner_user_object.first_name + ' ' + reservation_owner_user_object.last_name
                    reservation_data['reservation_owner'] = reservation_owner_name

                    return Response(reservation_data, status=status.HTTP_200_OK)

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

    user = request.user

    try:
        current_reservation = Reservation.objects.filter(id=pk)[0]
        is_part_of_reservations = IsPartOf.objects.filter(reservation_diner=user)
        for part_of in is_part_of_reservations:
            if part_of.reservation == current_reservation:
                return Response("Already joined the Reservation", status=status.HTTP_400_BAD_REQUEST)
        
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

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updatePin(request, pk):
    data = request.data
    reservation = Reservation.objects.get(id=pk)
    reservation.reservation_pin = data['reservation_pin']

    reservation.save()
    reservation_serializer = ReservationSerializer(reservation, many=False)
    return Response(reservation_serializer.data, status=status.HTTP_200_OK)
