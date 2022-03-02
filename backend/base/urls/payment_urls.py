from django.urls import path
from ..views import payment_views as views

urlpatterns = [
    path('pay-full-bill-tabulate/order_id=<int:order_pk>/', views.fullBillPaymentTabulation),
    path('pay-full-bill-settlement/bill_id=<int:bill_id>/', views.fullBillPaymentSettlement),
    path('split-bill-settlement/order_id=<int:order_pk>/', views.splitBillPayment),
]


