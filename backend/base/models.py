from django.db import models
from django.contrib.auth.models import User

# ----- USER MODELS -----
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    contact_number = models.CharField(max_length=255)

    objects = models.manager

    def __str__(self):
        return f"{self.user.username} Profile"

# ----- RESERVATION MODELS ------

# ----- PAYMENT MODELS ------

# ----- BILL MODELS -----

# ----- PRE-ORDER MODELS -----
