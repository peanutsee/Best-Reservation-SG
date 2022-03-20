from django.urls import path
from ..views import restaurant_views as views

urlpatterns = [
    path('retrieve-all-restaurants/', views.retrieveAllRestaurants),
    path('retrieve-all-restaurants-by-popularity/', views.retrieveAllRestaurantsByMostClicks),
    path('retrieve-restaurant/<str:pk>/', views.retrieveRestaurant),
    path('retrieve-restaurant-menu/<str:pk>/', views.retrieveRestaurantMenuItems),
    path('retrieve-restaurant-menu-item/<str:pk>/', views.retrieveMenuItem),
]


