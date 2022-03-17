from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers import *
from random import shuffle
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import json

@api_view(['GET'])
def retrieveAllRestaurants(request):
    """
    Retrieve Restaurant with No Filter
    """
    print(request.query_params)
    # RUN ONCE TO LOAD RESTAURANTS INTO DATABASE
    # file_paths = [r'~/formatted_clean_chinese_food.json',r'~/formatted_clean_muslim_food.json',r'~/formatted_clean_indian_food.json',r'~/formatted_clean_japanese_food.json',r'~/formatted_clean_western_food.json' ]
    # for f in file_paths:
    #     with open(f, encoding='utf-8') as file:
    #         f = json.load(file)
    #         for key in f.keys():
    #             data = f.get(key)
    #             try:
    #                 restaurant = Restaurant.objects.create(
    #                     id=data['uuid'],
    #                     restaurant_name = data['name'],
    #                     restaurant_official_website = data['officialWebsite'],
    #                     restaurant_official_email = data['officialEmail'],
    #                     restaurant_shorter_description = data['description'],
    #                     restaurant_primary_contact = data['primaryContactNo'],
    #                     restaurant_secondary_contact = data['secondaryContactNo'],
    #                     restaurant_rating = data['rating'],
    #                     restaurant_block = data['block'],
    #                     restaurant_street_name = data['streetName'],
    #                     restaurant_floor_number = data['floorNumber'],
    #                     restaurant_unit_number = data['unitNumber'],
    #                     restaurant_building_name = data['buildingName'],
    #                     restaurant_postal_code = data['postalCode'],
    #                     restaurant_longer_description = data['body'],
    #                     restaurant_thumbnail = data['thumbnail'],
    #                     restaurant_image_1 = data['image_one'],
    #                     restaurant_image_2 = data['image_two']
    #                 )
    #                 restaurant.save()
    #             except:
    #                 pass
            
    restaurants = Restaurant.objects.all()
    
    paginator = Paginator(restaurants, 12)
    page = request.query_params.get('page')
    try:
        restaurants_data = paginator.page(page)
    except PageNotAnInteger:
        restaurants_data = paginator.page(1)
    except EmptyPage:
        restaurants_data = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)

    restaurants_serialized = RestaurantSerializer(restaurants_data, many=True)
    restaurants_data_page = restaurants_serialized.data
    
    output = {
        'restaurants_data': restaurants_data_page,
        'page': page,
        'pages': paginator.num_pages
    }

    return Response(output, status=status.HTTP_200_OK)

@api_view(['GET'])
def retrieveAllRestaurantsByMostClicks(request):
    """
    Retrieve Restaurant by Popularity
    """
    restaurants = Restaurant.objects.all().order_by('-num_clicks')
 
    paginator = Paginator(restaurants, 12)
    page = request.query_params.get('page')
    try:
        restaurants_data = paginator.page(page)
    except PageNotAnInteger:
        restaurants_data = paginator.page(1)
    except EmptyPage:
        restaurants_data = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)
    
    restaurants_serialized = RestaurantSerializer(restaurants_data, many=True)
    restaurants_data_page = restaurants_serialized.data
    
    output = {
        'restaurants_data': restaurants_data_page,
        'page': page,
        'pages': paginator.num_pages
    }
    return Response(output, status=status.HTTP_200_OK)


@api_view(['GET'])
def retrieveRestaurant(request, pk):
    restaurant = Restaurant.objects.get(id=pk)
    restaurant.num_clicks = restaurant.increaseClick()
    restaurant.save()
    restaurant_serialized = RestaurantSerializer(restaurant, many=False)
    restaurant_data = restaurant_serialized.data
    return Response(restaurant_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def retrieveRestaurantMenuItems(request, pk):
    restaurant = Restaurant.objects.get(id=pk)
    menu = Menu.objects.get(menu_restaurant=restaurant)
    menu_items = MenuItem.objects.filter(menu_item_menu_restaurant=menu)
    menu_serialized = MenuItemSerializer(menu_items, many=True)
    menu_data = menu_serialized.data
    return Response(menu_data, status=status.HTTP_200_OK)


@api_view(["GET"])
def retrieveMenuItem(request, pk):
    menu_item = MenuItem.objects.get(id=pk)
    menu_item_serialized = MenuItemSerializer(menu_item, many=False)
    menu_item_data = menu_item_serialized.data
    return Response(menu_item_data, status=status.HTTP_200_OK)
