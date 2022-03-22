from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    contact_number = models.CharField(max_length=255)
    sms_notification = models.BooleanField(default=True)
    email_notification = models.BooleanField(default=True)

    objects = models.manager

    def __str__(self):
        return f"{self.user.username} Profile"


class Restaurant(models.Model):
    restaurant_uuid = models.TextField(default="None")
    restaurant_name = models.CharField(max_length=255)
    restaurant_official_website = models.URLField()
    restaurant_official_email = models.EmailField()
    restaurant_shorter_description = models.TextField(default="")
    restaurant_primary_contact = models.TextField(default="")
    restaurant_secondary_contact = models.TextField(default="")
    restaurant_rating = models.DecimalField(decimal_places=1, max_digits=2)
    restaurant_block = models.CharField(max_length=255)
    restaurant_street_name = models.TextField()
    restaurant_floor_number = models.CharField(max_length=255)
    restaurant_unit_number = models.CharField(max_length=255)
    restaurant_building_name = models.TextField()
    restaurant_postal_code = models.CharField(max_length=255)
    restaurant_longer_description = models.TextField()
    restaurant_thumbnail = models.URLField()
    restaurant_image_1 = models.URLField()
    restaurant_image_2 = models.URLField()
    num_clicks = models.IntegerField(default=0)

    objects = models.Manager()

    def increaseClick(self):
        return self.num_clicks + 1

    def __str__(self):
        return self.restaurant_name


class Reservation(models.Model):
    reservation_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    reservation_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    reservation_date_time = models.DateTimeField()
    reservation_created_date_time = models.DateTimeField(auto_created=True, auto_now_add=True)
    reservation_is_completed = models.BooleanField(default=False)
    reservation_pax = models.IntegerField()
    number_of_users_in_reservation = models.IntegerField(default=1)
    reservation_pin = models.TextField(default='NO PIN')
    reservation_url = models.URLField(default='www.example.com')

    
    objects = models.Manager()

    def __str__(self):
        return f"Reservation {(self.id)}"


class IsPartOf(models.Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    reservation_diner = models.ForeignKey(User, on_delete=models.CASCADE)

    objects = models.Manager()

    def get_user_id(self):
        return self.reservation_diner.id

    def __str__(self):
        return f"{self.reservation_diner.username} with ID {self.reservation_diner.id} Is Part Of Reservation {(self.reservation.id)}"


class BillDetail(models.Model):
    bill_reservation = models.OneToOneField(Reservation, on_delete=models.CASCADE)
    before_tax_bill = models.DecimalField(decimal_places=2, max_digits=10)
    tax = models.DecimalField(default=1.17, decimal_places=2, max_digits=10)
    deposit = models.DecimalField(default=20, decimal_places=2, max_digits=10)
    after_tax_bill = models.DecimalField(decimal_places=2, max_digits=10, default=0)
    bill_is_paid = models.BooleanField(default=False)
    bill_pin = models.TextField(default='NO PIN')
    bill_url = models.URLField(default='www.example.com')

    objects = models.Manager()

    def calculate_final_bill(self):
        return float(self.before_tax_bill) * float(self.tax) - float(self.deposit)

    def __str__(self):
        return f"Bill for Reservation {(self.bill_reservation.id)}"

class Menu(models.Model):
    menu_restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE)
    objects = models.Manager()

    def __str__(self):
        return self.menu_restaurant.restaurant_name

class MenuItem(models.Model):
    menu_item_menu_restaurant = models.ForeignKey(Menu, on_delete=models.CASCADE)
    menu_item_name = models.CharField(max_length=255)
    menu_item_description = models.TextField()
    menu_item_price = models.DecimalField(max_digits=10, decimal_places=2)
    menu_item_image = models.ImageField(upload_to='menu-item-image/', default=None, blank=True, null=True)

    objects = models.Manager()

    def __str__(self):
        return f"{self.menu_item_name} in {self.menu_item_menu_restaurant.__str__()}"


class Order(models.Model):
    order_reservation = models.OneToOneField(Reservation, on_delete=models.CASCADE)

    objects = models.Manager()

    def __str__(self):
        return f"Order for Reservation {self.order_reservation.id}"


class OrderItemInOrder(models.Model):
    order_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    order_item_qty = models.IntegerField()

    objects = models.Manager()

    def get_price(self):
        return self.order_item_qty * self.order_item.menu_item_price

    def __str__(self):
        return f"{self.order_item.menu_item_name} in {self.order.__str__()}"

class TelegramData(models.Model):
    telegram_handle = models.TextField()
    telegram_id = models.IntegerField()
    
    objects = models.Manager()
    
    def __str__(self):
        return self.telegram_handle
    
class Proportions(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    telegram_handle = models.ForeignKey(TelegramData, on_delete=models.SET_NULL, null=True, blank=True)
    proportions = models.TextField()
    
    objects = models.Manager()
    
    def __str__(self):
        return self.telegram_handle.telegram_handle