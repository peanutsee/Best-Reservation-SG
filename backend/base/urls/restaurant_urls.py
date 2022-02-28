from django.urls import path
from ..views import restaurant_views as views

urlpatterns = [
    path('retrieve-all-restaurants/', views.retrieveAllRestaurants),
    path('retrieve-all-restaurants-by-popularity/', views.retrieveAllRestaurantsByMostClicks),
    path('retrieve-restaurant/<int:pk>/', views.retrieveRestaurant),
    path('retrieve-restaurant-menu/<int:pk>/', views.retrieveRestaurantMenuItems),
    path('retrieve-restaurant-menu-item/<int:pk>/', views.retrieveMenuItem),
]


