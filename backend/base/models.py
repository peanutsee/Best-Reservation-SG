from django.db import models
from django.contrib.auth.models import User


# TODO: Create serializers for all fields (unless otherwise stated)
# TODO: All models must support CRUD, views must reflect this
# TODO: ALl endpoints must be tested independently of each other and the frontend UI
# TODO: All endpoints must be documented in swaggerhub

# TODO: API to Restaurants
# TODO: API to DBS PayLah!
# TODO: API to Telegram
# TODO: Email SMTP
# TODO: AWS backend (EC2, RDS, S3, ELB)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    contact_number = models.CharField(max_length=255)
    sms_notification = models.BooleanField(default=True)
    email_notification = models.BooleanField(default=True)

    objects = models.manager

    def __str__(self):
        return f"{self.user.username} Profile"


class Restaurant(models.Model):
    WESTERN = 'WS'
    CHINESE = 'CH'
    JAPANESE = 'JP'
    KOREAN = 'KR'
    OTHERS = 'OT'
    CUISINE_TYPES = [
        (WESTERN, 'Western'),
        (CHINESE, 'Chinese'),
        (JAPANESE, 'Japanese'),
        (KOREAN, 'Korean'),
        (OTHERS, 'Others'),
    ]

    KOPITIAM = 'HC'
    CAFE = "CF"
    BAR = 'BA'
    HIGH_END_RESTAURANT = 'HE'
    MEDIUM_END_RESTAURANT = 'ME'
    BUDGET_RESTAURANT = 'BR'
    FAST_FOOD_RESTAURANT = 'FF'
    OTHERS = 'OT'
    RESTAURANT_TYPES = [
        (KOPITIAM, 'Kopitiam'),
        (CAFE, 'Cafe'),
        (BAR, 'Bar'),
        (HIGH_END_RESTAURANT, 'High End Restaurant'),
        (MEDIUM_END_RESTAURANT, 'Medium End Restaurant'),
        (BUDGET_RESTAURANT, 'Budget Restaurant'),
        (FAST_FOOD_RESTAURANT, 'Fast Food Restaurant'),
        (OTHERS, 'Others'),
    ]

    restaurant_name = models.CharField(max_length=255)
    restaurant_image = models.ImageField('restaurant-images/')
    restaurant_description = models.TextField()
    restaurant_cuisine = models.CharField(max_length=2, choices=CUISINE_TYPES, default=OTHERS)
    restaurant_type = models.CharField(max_length=2, choices=RESTAURANT_TYPES, default=OTHERS)
    restaurant_rating = models.DecimalField(decimal_places=2, max_digits=3, default=4)
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

    objects = models.Manager()

    def __str__(self):
        return f"Reservation {bin(self.id)}"


class IsPartOf(models.Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    reservation_diner = models.ForeignKey(User, on_delete=models.CASCADE)

    objects = models.Manager()

    def __str__(self):
        return f"ReservationDiner Is Part Of Reservation {bin(self.reservation.id)}"


class BillDetail(models.Model):
    bill_reservation = models.OneToOneField(Reservation, on_delete=models.CASCADE)
    before_tax_bill = models.DecimalField(decimal_places=2, max_digits=10)
    tax = models.DecimalField(default=1.17, decimal_places=2, max_digits=10)
    deposit = models.DecimalField(default=20, decimal_places=2, max_digits=10)
    after_tax_bill = models.DecimalField(decimal_places=2, max_digits=10, default=0)
    bill_is_paid = models.BooleanField(default=False)

    objects = models.Manager()

    def calculate_final_bill(self):
        return float(self.before_tax_bill) * float(self.tax) - float(self.deposit)

    def __str__(self):
        return f"Bill for Reservation {bin(self.bill_reservation.id)}"

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
    menu_item_image = models.ImageField(upload_to='menu-item-image/')

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