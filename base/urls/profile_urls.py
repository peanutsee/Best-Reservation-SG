from django.urls import path
from ..views import profile_views as views

urlpatterns = [
    path('retrieve-profile/', views.retrieveUserProfile),
    path('update-profile/', views.updateUserProfile),
    path('delete-profile/', views.deleteUserProfile),
]


