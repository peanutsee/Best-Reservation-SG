from django.urls import path
from base.views import reservation_views as views


urlpatterns = [
    path('create-reservation/', views.createReservation, name='create-reservation'),
    path('get-reservation/<int:pk>', views.getReservation, name='get-reservation'),
    path('update-reservation/<int:pk>/', views.updateReservation, name='update-reservation'),
    path('delete-reservation/<int:pk>', views.deleteReservation, name='delete-reservation'),

]


