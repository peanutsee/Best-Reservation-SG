from django.test import TestCase, Client
from django.urls import reverse
from base.models import *
import json

class TestViews(TestCase):
    # Blackbox ECP
    
    # Whitebox CFT