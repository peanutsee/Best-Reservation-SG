from django.urls import path
from ..views import restaurant_views as views

urlpatterns = [
    path('retrieve-all-restaurants/', views.retrieveAllRestaurants, name='retrieve-restaurants'),
    path('retrieve-all-restaurants-by-popularity/', views.retrieveAllRestaurantsByMostClicks, name='retrieve-restaurants-by-popularity'),
    path('retrieve-restaurant/<str:pk>/', views.retrieveRestaurant, name='retrieve-restaurant'),
    path('retrieve-restaurant-menu/<str:pk>/', views.retrieveRestaurantMenuItems, name='retrieve-restaurant-menu'),
    path('retrieve-restaurant-menu-item/<str:pk>/', views.retrieveMenuItem, name='retrieve-menu-item'),
]


