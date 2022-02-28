from django.urls import path
from base.views import proportioning_views as views

urlpatterns = [
    path('proportion/', views.proportion, name='proportion'),
]


