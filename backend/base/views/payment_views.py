from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..serializers import *

# Full Payment
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def fullBillPaymentTabulation(request, order_pk):
    order = Order.objects.get(id=order_pk)
    order_items = OrderItemInOrder.objects.filter(order=order)
    order_items_serialized = OrderItemInOrderSerializer(order_items, many=True)
    order_items_data = order_items_serialized.data
    
    for item in order_items_data:
        menu_item = MenuItem.objects.get(id=item['id'])
        item_serialized = MenuItemSerializer(menu_item, many=False)
        item_data = item_serialized.data
        item_name = item_data['menu_item_name']
        item_price = item_data['menu_item_price']
        item.update({'order_item_name': item_name})
        item.update({'order_item_price': item_price})
        
    total_before_tax = 0
    for item in order_items:
        total_before_tax += item.get_price()
    bill = BillDetail.objects.get(bill_reservation=order.order_reservation)
    
    bill.bill_url = f"http://localhost:3000/split_bill/{bill.id}"
    bill.before_tax_bill = total_before_tax
    bill.after_tax_bill = bill.calculate_final_bill()
    
    bill.save()
    bill_serializer = BillDetailSerializer(bill, many=False)
    bill_data = bill_serializer.data
    
    bill_data.update({'order_items': order_items_data})
    
    return Response(bill_data, status=status.HTTP_200_OK)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updatePin(request, order_pk):
    data = request.data
    order = Order.objects.get(id=order_pk)
    bill = BillDetail.objects.get(bill_reservation=order.order_reservation)
    
    bill.bill_pin = data['bill_password']

    bill.save()
    bill_serializer = BillDetailSerializer(bill, many=False)
    bill_data = bill_serializer.data
    
    return Response(bill_data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def fullBillPaymentSettlement(request, bill_id):
    bill = BillDetail.objects.filter(id=bill_id)[0]
    bill.bill_is_paid = True
    bill.save()
    bill_serializer = BillDetailSerializer(bill, many=False)
    bill_data = bill_serializer.data
    return Response(bill_data, status=status.HTTP_200_OK)

# Split Payment
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def splitBillPayment(request, order_pk):
    order = Order.objects.get(id=order_pk)
    order_items = OrderItemInOrder.objects.filter(order=order)
    result = {"reservation_participants": [],
              "order_items": []}
    for item in order_items:
        menu_item = MenuItem.objects.get(id=item.order_item.id)
        order_item_serialized = MenuItemSerializer(menu_item, many=False)
        order_item_data = order_item_serialized.data
        order_item_data.update({"order_item_qty": item.order_item_qty})
        result['order_items'].append(order_item_data)

    # Add Reservation Diners
    for user in IsPartOf.objects.filter(reservation=order.order_reservation):
        u = User.objects.get(id=user.get_user_id())
        u_serialized = UserSerializer(u, many=False)
        u_data = u_serialized.data
        result['reservation_participants'].append(u_data)

    # Add Reservation Owner
    u = User.objects.get(id=request.user.id)
    u_serialized = UserSerializer(u, many=False)
    u_data = u_serialized.data
    result['reservation_participants'].append(u_data)

    return Response(result, status=status.HTTP_200_OK)

