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


@api_view(['POST'])
def addProportions(request, order_pk):
    data = request.data
    order = Order.objects.get(id=order_pk)
    proportion = Proportion.objects.filter(
        order=order, telegram_handle=data['telegram_handle'])
    try:
        if not proportion.exists():
            new_proportions = Proportion.objects.create(
                order=order,
                telegram_handle=str(data['telegram_handle']),
                proportions=", ".join(data['proportions'])
            )
            new_proportions.save()
            new_proportions_serializer = ProportionSerializer(
                new_proportions, many=False)
            new_proportions_data = new_proportions_serializer.data

            return Response(new_proportions_data, status=status.HTTP_201_CREATED)
        else:
            return Response("Already Exists!", status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response("Proportion Already Exists!", status=status.HTTP_400_BAD_REQUEST)

# Get Proportions
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProportions(request, bill_pk):
    bill = BillDetail.objects.get(id=bill_pk)
    reservation = Reservation.objects.get(id=bill.bill_reservation.id)
    order = Order.objects.get(order_reservation=reservation)
    proportions = Proportion.objects.filter(order=order)
    proportions_serialized = ProportionSerializer(proportions, many=True)
    proportions_data = proportions_serialized.data

    prop_dict = []
    for index, proportion in enumerate(proportions_data):
        prop_list = proportion.get('proportions').split(', ')
        telegram_handle = proportion.get('telegram_handle')
        prop_dict.append(
            {'telegram_handle': telegram_handle, 'proportions': []})
        for item in prop_list:
            item_id, qty = item.split(' - ')
            menu_item = MenuItem.objects.get(id=item_id)
            menu_item_serialized = MenuItemSerializer(menu_item, many=False)
            menu_item_data = menu_item_serialized.data
            prop_dict[index]['proportions'].append({'item': menu_item_data, 'quantity': int(qty)})
    
    return Response(prop_dict, status=status.HTTP_202_ACCEPTED)

# Split Payment
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def splitBillPayment(request, bill_pk):
    bill = BillDetail.objects.get(id=bill_pk)
    reservation = Reservation.objects.get(id=bill.bill_reservation.id)
    order = Order.objects.get(order_reservation=reservation)
    proportions = Proportion.objects.filter(order=order)
    proportions_serialized = ProportionSerializer(proportions, many=True)
    proportions_data = proportions_serialized.data

    # Order Items - Price List
    item_price_dict = {}
    order_items = OrderItemInOrder.objects.filter(order=order)
    order_items_serialized = OrderItemInOrderSerializer(order_items, many=True)
    order_items_data = order_items_serialized.data
    for item in order_items_data:
        menu_item = MenuItem.objects.get(id=item['id'])
        menu_item_serialized = MenuItemSerializer(menu_item, many=False)
        menu_item_data = menu_item_serialized.data
        name = menu_item_data['menu_item_name']
        qty = item['order_item_qty']
        price = menu_item_data['menu_item_price']
        
        if not name in item_price_dict.keys():
            item_price_dict.update({name: {'price': price, 'quantity': qty}})

    # Split Proportions
    prop_dict = []
    for index, proportion in enumerate(proportions_data):
        prop_list = proportion.get('proportions').split(', ')
        telegram_handle = proportion.get('telegram_handle')
        prop_dict.append(
            {'telegram_handle': telegram_handle, 'proportions': []})
        for item in prop_list:
            item_id, qty = item.split(' - ')
            menu_item = MenuItem.objects.get(id=item_id)
            menu_item_serialized = MenuItemSerializer(menu_item, many=False)
            menu_item_data = menu_item_serialized.data
            prop_dict[index]['proportions'].append({'item': menu_item_data, 'quantity': int(qty)})
    
    # Tabulate Avg for Each Proportion
    items_qtys = {}
    
    for prop in prop_dict:
        items = prop.get('proportions')
        for item in items:
            item_name = item.get('item').get('menu_item_name')
            item_qty = item.get('quantity')
            item_price = item.get('menu_item_price')
            if not item_name in items_qtys.keys():
                items_qtys.update({item_name: {'proportions': item_qty, 'avg_per_prop': 0}})
            else:
                items_qtys[item_name]['proportions'] += item_qty
    
    for key in items_qtys.keys():
        item = items_qtys[key]
        menu_item_data = item_price_dict[key]
        price, qty = menu_item_data['price'], menu_item_data['quantity']
        avg = round(float(price) * int(qty) / item['proportions'], 2)
        items_qtys[key]['avg_per_prop'] = avg

    # Tabulate Payment for Each User
    user_total = {}
    for prop in prop_dict:
        tg_handle = prop.get('telegram_handle')
        proportions = prop.get('proportions')
        total = 0
        for item in proportions:
            name = item['item']['menu_item_name']
            props = item['quantity']
            total += items_qtys[name]['avg_per_prop'] * props
        user_total.update({tg_handle: total})
    
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
                telegram_handle=username,
                telegram_id=chat_id
            )
            user.save()    
            
    for user in user_total.keys():
        amount = user_total.get(user)
        query_user = TelegramData.objects.get(telegram_handle=user)
        id = query_user.telegram_id
        bot.send_message(
            text=f"Hey there, please pay SGD$ {amount} for your meal!", chat_id=id)
       
    return Response(user_total, status=status.HTTP_200_OK)
