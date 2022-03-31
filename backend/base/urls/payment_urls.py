from django.urls import path
from ..views import payment_views as views

urlpatterns = [
    path('pay-full-bill-tabulate/order_id=<int:order_pk>/', views.fullBillPaymentTabulation, name='full-bill-tabulation'),
    path('pay-full-bill-settlement/bill_id=<int:bill_id>/', views.fullBillPaymentSettlement, name='full-bill-settlement'),
    path('update-bill-password/order_id=<int:order_pk>/', views.updatePin, name='update-bill-pin'),
    
    # Split Bill Payment to Users
    path("split-bill-to-users/order_id=<int:order_pk>/", views.splitBillPayment, name='split-bill-payment'), 
    path("add-proportions/order_id=<int:order_pk>/", views.addProportions, name='add-proportions')
]


