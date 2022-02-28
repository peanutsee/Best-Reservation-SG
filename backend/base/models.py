from django.db import models
from django.contrib.auth.models import User

#TODO: Decide on what models need to be created (no need to normalize)
#TODO: Create models and migrate to db
#TODO: Create serializers for all fields (unless otherwise stated)
#TODO: All models must support CRUD, views must reflect this
#TODO: ALl enpoints must be tested independently of each other and the frontend UI
#TODO: All endpoints must be documented in swaggerhub

#TODO: API to Restaurants
#TODO: API to DBS PayLah!
#TODO: API to Telegram
#TODO: Email SMTP
#TODO: AWS backend (EC2, RDS, S3, ELB)

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
