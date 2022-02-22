from django.urls import path
from base.views import user_views as views

"""
Handles all URL paths related to users.
"""

urlpatterns = [
    # Authentication
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
]


