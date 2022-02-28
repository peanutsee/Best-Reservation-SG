from django.urls import path
from base.views import proportioning_views as views

urlpatterns = [
    path('proportion/', views.proportion, name='proportion'),
    #if doing what i wrote in proportioning_views(models.py reservation add Reservation diner), below would need the <int:pk>
    #path('proportion/<int:pk>/', views.proportion, name='proportion'),
]


