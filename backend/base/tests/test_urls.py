from django.test import SimpleTestCase
from django.urls import reverse, resolve

# Import All Views in Base 
from base.views import payment_views
from base.views import pre_order_views
from base.views import profile_views
from base.views import reservation_views
from base.views import restaurant_views
from base.views import user_views

# Create Test Cases Here for URL logic
class TestUrls(SimpleTestCase):
    
    # Test Cases for Payment URLs
    def test_full_bill_tabulation(self):
        # Discrete Value Test
        url = reverse('full-bill-tabulation', kwargs={'order_pk': 1}) 
        self.assertEquals(resolve(url).func, payment_views.fullBillPaymentTabulation)
    
    def test_full_bill_settlement(self):
        # Discrete Value Test
        url = reverse('full-bill-settlement', kwargs={'bill_id': 1}) 
        self.assertEquals(resolve(url).func, payment_views.fullBillPaymentSettlement)
        
    def test_update_pin(self):
        # Discrete Value Test
        url = reverse('update-bill-pin', kwargs={'order_pk': 1}) 
        self.assertEquals(resolve(url).func, payment_views.updatePin)
        
    def test_split_bill_payment(self):
        # Discrete Value Test
        url = reverse('split-bill-payment', kwargs={'order_pk': 1}) 
        self.assertEquals(resolve(url).func, payment_views.splitBillPayment)
        
    def test_add_proportions_bill(self):
        # Discrete Value Test
        url = reverse('add-proportions', kwargs={'order_pk': 1}) 
        self.assertEquals(resolve(url).func, payment_views.addProportions)