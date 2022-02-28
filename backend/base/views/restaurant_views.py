from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers import *
from random import shuffle

@api_view(['GET'])
def retrieveAllRestaurants(request):
    """
    Retrieve Restaurant with No Filter
    """
    restaurants = Restaurant.objects.all()
    restaurants_serialized = RestaurantSerializer(restaurants, many=True)
    restaurants_data = restaurants_serialized.data
    shuffle(restaurants_data)
    return Response(restaurants_data, status=status.HTTP_200_OK)

@api_view(['GET'])
def retrieveAllRestaurantsByMostClicks(request):
    """
    Retrieve Restaurant by Popularity
    """
    restaurants = Restaurant.objects.all().order_by('-num_clicks')
    restaurants_serialized = RestaurantSerializer(restaurants, many=True)
    restaurants_data = restaurants_serialized.data
    shuffle(restaurants_data)
    return Response(restaurants_data, status=status.HTTP_200_OK)



@api_view(['GET'])
def retrieveRestaurant(request, pk):
    restaurant = Restaurant.objects.filter(id=pk)[0]
    restaurant.num_clicks = restaurant.increaseClick()
    restaurant.save()
    restaurant_serialized = RestaurantSerializer(restaurant, many=False)
    restaurant_data = restaurant_serialized.data
    return Response(restaurant_data, status=status.HTTP_200_OK)


# TODO: Restaurant Availability

@api_view(['GET'])
def retrieveRestaurantMenuItems(request, pk):
    restaurant = Restaurant.objects.filter(id=pk)[0]
    menu = Menu.objects.filter(menu_restaurant=restaurant)[0]
    menu_items = MenuItem.objects.filter(menu_item_menu_restaurant=menu)
    menu_serialized = MenuItemSerializer(menu_items, many=True)
    menu_data = menu_serialized.data
    return Response(menu_data, status=status.HTTP_200_OK)


@api_view(["GET"])
def retrieveMenuItem(request, pk):
    menu_item = MenuItem.objects.filter(id=pk)[0]
    menu_item_serialized = MenuItemSerializer(menu_item, many=False)
    menu_item_data = menu_item_serialized.data
    return Response(menu_item_data, status=status.HTTP_200_OK)
