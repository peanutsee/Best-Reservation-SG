from django.contrib import admin
from .models import *

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['contact_number']

@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    pass

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    pass


@admin.register(IsPartOf)
class IsPartOfAdmin(admin.ModelAdmin):
    pass


@admin.register(BillDetail)
class BillDetailAdmin(admin.ModelAdmin):
    pass

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    pass

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    pass

@admin.register(OrderItemInOrder)
class OrderItemInOrderAdmin(admin.ModelAdmin):
    pass

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass

@admin.register(TelegramData)
class TelegramDataAdmin(admin.ModelAdmin):
    pass
@admin.register(Proportions)
class ProportionsAdmin(admin.ModelAdmin):
    pass


