from django.urls import path
from base.views import reservation_views as views


urlpatterns = [
    path('create-reservation/', views.createReservation, name='create-reservation'),
    path('get-all-reservation/', views.getAllReservation, name='get-all-reservation'),
    path('get-reservation/reservation_id=<int:pk>/', views.getReservation, name='get-reservation'),
    path('update-reservation/reservation_id=<int:pk>/', views.updateReservation, name='update-reservation'),
    path('delete-reservation/reservation_id=<int:pk>/', views.deleteReservation, name='delete-reservation'),
    path('join-reservation/reservation_id=<int:pk>/', views.joinReservation, name='join-reservation'),
    path('remove-reservation/reservation_id=<int:pk>/', views.removeReservation, name='remove-reservation'),
    path('update-reservation-password/reservation_id=<int:pk>/', views.updatePin, name='update-reservation-pin'),
    path('complete-reservation/reservation_id=<int:reservation_id>/', views.reservationCompleted, name='complete-reservation'),
]


