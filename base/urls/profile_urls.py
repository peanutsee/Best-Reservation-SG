from django.urls import path
from ..views import profile_views as views

urlpatterns = [
    path('retrieve-profile/', views.retrieveUserProfile, name='retrieve-profile'),
    path('update-profile/', views.updateUserProfile, name='update-profile'),
    path('delete-profile/', views.deleteUserProfile, name='delete-profile'),
]


