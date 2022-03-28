from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..serializers import *
import telegram 

# Full Payment
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def fullBillPaymentTabulation(request, order_pk):
    order = Order.objects.get(id=order_pk)
    order_items = OrderItemInOrder.objects.filter(order=order)
    order_items_serialized = OrderItemInOrderSerializer(order_items, many=True)
    order_items_data = order_items_serialized.data

    for item in order_items_data:
        menu_item = MenuItem.objects.get(id=item['order_item'])
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
    bill.bill_is_split = True
    
    bill.save()
    bill_serializer = BillDetailSerializer(bill, many=False)
    bill_data = bill_serializer.data
    
    return Response(bill_data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def fullBillPaymentSettlement(request, bill_id):
    bill = BillDetail.objects.get(id=bill_id)
    bill.bill_is_paid = True
    bill.save()
    bill_serializer = BillDetailSerializer(bill, many=False)
    bill_data = bill_serializer.data
    return Response(bill_data, status=status.HTTP_200_OK)

# Add to Proportions
@api_view(['POST'])
def addProportions(request, order_pk):
    data = request.data
    order = Order.objects.get(id=order_pk)
    proportion = Proportion.objects.filter(order=order, telegram_handle=data['telegram_handle'])
    try:
        if not proportion.exists():
            new_proportions = Proportion.objects.create(
                order=order,
                telegram_handle= str(data['telegram_handle']),
                proportions= ", ".join(data['proportions'])
            )
            new_proportions.save()
            new_proportions_serializer = ProportionSerializer(new_proportions, many=False)
            new_proportions_data = new_proportions_serializer.data
        
            return Response(new_proportions_data, status=status.HTTP_201_CREATED)
        else:
            assert "Already Exists"
    except:
        return Response("Proportion Already Exists!", status=status.HTTP_400_BAD_REQUEST)


# Split Payment
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def splitBillPayment(request, order_pk):    
    # Get Data
    data = request.data
    telegram_handles = data.telegram_handles.split(", ")
    
    # Get Order Details
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
    
    # Instantiate Telegram Bot    
    bot = telegram.Bot(token='5299208701:AAFoSrKG7yvP1_s_-q8gT_8v6tRIdM4iz_4')
    updates = bot.getUpdates()
    
    # Add User to Database
    for i in range(len(updates)):
        chat_id = updates[i].message.chat.id
        username = updates[i].message.chat.username
        
        query_user = TelegramData.objects.filter(telegram_handle=username)
        if not query_user:
            user = TelegramData.objects.create(
                telegram_handle = username,
                telegram_id = chat_id
            )
            user.save()
        
    # Retrieve Users from Database
    users = {}
    
    for user in telegram_handles:
        query_user = TelegramData.objects.get(telegram_handle=user)
        query_user_serialized = TelegramDataSerializer(query_user, many=False)
        query_user_data = query_user_serialized.data
        id = query_user_data['telegram_id']
        users.update({id: {"amount": 0}})

    # Tabulate Proportions
    # TODO: TABULATE TOTALS | EACH CHAT_ID : AMOUNT
    
    # Submit Telegram Message
    for user in users.keys():
        amount = users.get(user).get('amount')
        bot.send_message(text=f"Hey there, please pay SGD$ {amount} for your meal!", chat_id=user)
    
    return Response('OK', status=status.HTTP_200_OK)


