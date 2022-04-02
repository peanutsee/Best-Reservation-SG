from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers import *
from random import shuffle
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import json
import random 

@api_view(['GET'])
def retrieveAllRestaurants(request):
    """
    Retrieve Restaurant with No Filter
    """
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
    restaurant.num_clicks = restaurant.increase_click()
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
