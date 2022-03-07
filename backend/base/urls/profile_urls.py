from django.urls import path
from ..views import profile_views as views

urlpatterns = [
    path('retrieve-profile/<int:pk>/', views.retrieveUserProfile),
    path('update-profile/<int:pk>/', views.updateUserProfile),
    path('delete-profile/<int:pk>/', views.deleteUserProfile),
]


