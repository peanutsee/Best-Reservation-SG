from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..serializers import *

# TODO: Generate Shareable Link for Pre-Order
# TODO: Add Reservation to Reservation Diners (Reservation Owners too)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrieveAllOrders(request, order_pk):
    user = request.user
    order = Order.objects.get(id=order_pk)
    order_serialized = OrderSerializer(order, many=False)
    order_data = order_serialized.data
    order_data.update({"order_items": []})
    reservation = order.order_reservation
    if reservation.reservation_owner == user:
        order_items = OrderItemInOrder.objects.filter(order=order)

        for item in order_items:
            order_item_qty, order_item_id = OrderItemInOrder.objects.get(id=item.id).order_item_qty, \
                                            OrderItemInOrder.objects.get(id=item.id).order_item
            menu_item = MenuItem.objects.get(id=order_item_id.id)
            menu_item_serializer = MenuItemSerializer(menu_item, many=False)
            menu_item_data = menu_item_serializer.data
            menu_item_data.update({'order_item_qty': order_item_qty, 'item_order_key': item.id})
            order_data['order_items'].append(menu_item_data)

        return Response(order_data, status=status.HTTP_200_OK)
    else:
        return Response("Reservation Does Not Belong to User", status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def addItemToOrder(request, order_pk, item_pk):
    order = Order.objects.get(id=order_pk)
    order_item = MenuItem.objects.get(id=item_pk)
    data = request.data

    order_items = OrderItemInOrder.objects.filter(order_item=order_item, order=order)

    # Check if Item Exists
    if len(order_items) == 0:
        item_in_order = OrderItemInOrder.objects.create(
            order_item=order_item,
            order=order,
            order_item_qty=data['order_item_qty']
        )
    else:
        item_in_order = order_items[0]
        item_in_order.order_item_qty += int(data['order_item_qty'])
    item_in_order.save()

    return Response(f"{order_item.__str__()} Added to Order {order.id} * {item_in_order.order_item_qty}")


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateItemInOrder(request, item_order_key):
    order_item = OrderItemInOrder.objects.get(id=item_order_key)
    data = request.data
    order_item.order_item_qty = data['order_item_qty']
    order_item.save()
    return Response("Quantity Updated", status=status.HTTP_200_OK)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def removeItemInOrder(request, item_order_key):
    order_item = OrderItemInOrder.objects.get(id=item_order_key)
    order_item.delete()
    return Response("Order Item Deleted", status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrieveMenu(request, restaurant_id):
    restaurant = Restaurant.objects.get(id=restaurant_id)
    menu = Menu.objects.get(menu_restaurant=restaurant)
    menu_items = MenuItem.objects.get(menu_item_menu_restaurant=menu)
    menu_items_serialized = MenuItemSerializer(menu_items, many=True)
    menu_items_data = menu_items_serialized.data
    
    return Response(menu_items_data, status=status.HTTP_200_OK)