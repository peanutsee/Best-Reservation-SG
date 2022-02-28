from django.db import models
from django.contrib.auth.models import User


# TODO: Decide on what models need to be created (no need to normalize)
# TODO: Create models and migrate to db
# TODO: Create serializers for all fields (unless otherwise stated)
# TODO: All models must support CRUD, views must reflect this
# TODO: ALl enpoints must be tested independently of each other and the frontend UI
# TODO: All endpoints must be documented in swaggerhub

# TODO: API to Restaurants
# TODO: API to DBS PayLah!
# TODO: API to Telegram
# TODO: Email SMTP
# TODO: AWS backend (EC2, RDS, S3, ELB)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    contact_number = models.CharField(max_length=255)

    objects = models.manager

    def __str__(self):
        return f"{self.user.username} Profile"


class Restaurant(models.Model):
    restaurant_name = models.CharField(max_length=255)
    restaurant_description = models.TextField()

    objects = models.Manager()

    def __str__(self):
        return self.restaurant_name


class Reservation(models.Model):
    reservation_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    reservation_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    reservation_date_time = models.DateTimeField()
    reservation_created_date_time = models.DateTimeField(auto_created=True, auto_now_add=True)
    reservation_is_completed = models.BooleanField(default=False)

    objects = models.Manager()

    def __str__(self):
        return f"Reservation {bin(self.id)}"


class IsPartOf(models.Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    reservation_diner = models.ForeignKey(User, on_delete=models.CASCADE)

    objects = models.Manager()

    def __str__(self):
        return "ReservationDiner Is Part Of Reservation"


class BillDetail(models.Model):
    bill_reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    before_tax_bill = models.DecimalField(decimal_places=2, max_digits=10)
    tax = models.DecimalField(default=1.17, decimal_places=2, max_digits=10)
    deposit = models.DecimalField(default=20, decimal_places=2, max_digits=10)
    after_tax_bill = models.DecimalField(decimal_places=2, max_digits=10, default=0)

    objects = models.Manager()

    def calculateFinalBill(self):
        return self.before_tax_bill * self.tax - self.deposit

    def __str__(self):
        return f"Bill for Reservation {bin(self.id)}"

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

    def __str__(self):
        return f"{self.order_item.menu_item_name} in {self.order.__str__()}"