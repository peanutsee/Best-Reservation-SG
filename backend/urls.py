from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('base.urls.user_urls')),  # DONE
    path('api/reservation/', include('base.urls.reservation_urls')),  # DOING
    path('api/restaurants/', include('base.urls.restaurant_urls')),  # DONE
    path('api/pre_order/', include('base.urls.pre_order_urls')),  # DONE
    path('api/profile/', include('base.urls.profile_urls')),  # DONE
    path('api/payment/', include('base.urls.payment_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
