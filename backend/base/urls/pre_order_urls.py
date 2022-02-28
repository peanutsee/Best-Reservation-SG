from django.urls import path
from ..views import pre_order_views as views

urlpatterns = [
    path('list-order-items/order_id=<int:order_pk>/', views.retrieveAllOrders),
    path('update-order-items-qty/item_order_key=<int:item_order_key>/', views.updateItemInOrder),
    path('delete-order-items/item_order_key=<int:item_order_key>/', views.removeItemInOrder),
    path('order-item/order_id=<int:order_pk>/item_id=<int:item_pk>/', views.addItemToOrder)
]


