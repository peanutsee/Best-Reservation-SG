from django.urls import path
from ..views import pre_order_views as views

urlpatterns = [
    path('list-order-items/order_id=<int:order_pk>/', views.retrieveAllOrders, name='retrieve-all-orders'),
    path('add-item-to-order/order_id=<int:order_pk>/item_id=<int:item_id>/', views.addItemToOrder, name='add-item-orders'),
    path('update-order-items-qty/item_order_key=<int:item_order_key>/', views.updateItemInOrder, name='update-item-orders'),
    path('delete-order-items/item_order_key=<int:item_order_key>/', views.removeItemInOrder, name='remove-item-orders'),
    path('retrieve-menu-items/restaurant_id=<int:restaurant_id>/', views.retrieveMenu, name='retrieve-menu'),
]


