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
        url = reverse('split-bill-payment', kwargs={'bill_pk': 1}) 
        self.assertEquals(resolve(url).func, payment_views.splitBillPayment)
        
    def test_add_proportions_bill(self):
        # Discrete Value Test
        url = reverse('add-proportions', kwargs={'order_pk': 1}) 
        self.assertEquals(resolve(url).func, payment_views.addProportions)
    
            
    def test_get_proportions_bill(self):
        # Discrete Value Test
        url = reverse('get-proportions', kwargs={'bill_pk': 1}) 
        self.assertEquals(resolve(url).func, payment_views.getProportions)
    
    
    # Test Cases for Pre Order URLs
    def test_retrieve_all_orders(self):
        # Discrete Value Test
        url = reverse('retrieve-all-orders', kwargs={'order_pk': 1}) 
        self.assertEquals(resolve(url).func, pre_order_views.retrieveAllOrders)
        
    def test_add_item_to_order(self):
        # Discrete Value Test
        url = reverse('add-item-orders', kwargs={'order_pk': 1,'item_pk':1}) 
        self.assertEquals(resolve(url).func, pre_order_views.addItemToOrder)
        
    def test_update_item_in_order(self):
        # Discrete Value Test
        url = reverse('update-item-orders', kwargs={'item_order_key': 1}) 
        self.assertEquals(resolve(url).func, pre_order_views.updateItemInOrder)
        
    def test_remove_item_in_order(self):
        # Discrete Value Test
        url = reverse('remove-item-orders', kwargs={'item_order_key': 1}) 
        self.assertEquals(resolve(url).func, pre_order_views.removeItemInOrder)

    def test_retrieve_menu(self):
        # Discrete Value Test
        url = reverse('retrieve-menu', kwargs={'restaurant_id': 1}) 
        self.assertEquals(resolve(url).func, pre_order_views.retrieveMenu)

    # Test Cases for Reservation URLs
    def test_create_reservation(self):
        # Discrete Value Test
        url = reverse('create-reservation')
        self.assertEquals(resolve(url).func, reservation_views.createReservation)

    def test_get_all_reservation(self):
        # Discrete Value Test
        url = reverse('get-all-reservation')
        self.assertEquals(resolve(url).func, reservation_views.getAllReservation)

    def test_get_reservation(self):
        # Discrete Value Test
        url = reverse('get-reservation', kwargs={'pk': 1})
        self.assertEquals(resolve(url).func, reservation_views.getReservation)

    def test_update_reservation(self):
        # Discrete Value Test
        url = reverse('update-reservation', kwargs={'pk': 1})
        self.assertEquals(resolve(url).func, reservation_views.updateReservation)

    def test_delete_reservation(self):
        # Discrete Value Test
        url = reverse('delete-reservation', kwargs={'pk': 1})
        self.assertEquals(resolve(url).func, reservation_views.deleteReservation)

    def test_join_reservation(self):
        # Discrete Value Test
        url = reverse('join-reservation', kwargs={'pk': 1})
        self.assertEquals(resolve(url).func, reservation_views.joinReservation)

    def test_remove_reservation(self):
        # Discrete Value Test
        url = reverse('remove-reservation', kwargs={'pk': 1})
        self.assertEquals(resolve(url).func, reservation_views.removeReservation)

    def test_update_reservation_password(self):
        # Discrete Value Test
        url = reverse('update-reservation-pin', kwargs={'pk': 1})
        self.assertEquals(resolve(url).func, reservation_views.updatePin)

    def test_complete_reservation(self):
        # Discrete Value Test
        url = reverse('complete-reservation', kwargs={'reservation_id': 1})
        self.assertEquals(resolve(url).func, reservation_views.reservationCompleted)

    # Test Cases for Restaurant URLs
    def test_retrieve_all_restaurants(self):
        # Discrete Value Test
        url = reverse('retrieve-restaurants') 
        self.assertEquals(resolve(url).func, restaurant_views.retrieveAllRestaurants)

    def test_retrieve_all_restaurants_by_most_clicks(self):
        # Discrete Value Test
        url = reverse('retrieve-restaurants-by-popularity') 
        self.assertEquals(resolve(url).func, restaurant_views.retrieveAllRestaurantsByMostClicks)

    def test_retrieve_restaurant(self):
        # Discrete Value Test
        url = reverse('retrieve-restaurant', kwargs={'pk' : 1}) 
        self.assertEquals(resolve(url).func, restaurant_views.retrieveRestaurant)

    def test_retrieve_restaurant_menu(self):
        # Discrete Value Test
        url = reverse('retrieve-restaurant-menu', kwargs={'pk' : 1}) 
        self.assertEquals(resolve(url).func, restaurant_views.retrieveRestaurantMenuItems)
        
    def test_retrieve_restaurant_menu_item(self):
        # Discrete Value Test
        url = reverse('retrieve-menu-item', kwargs={'pk': 1}) 
        self.assertEquals(resolve(url).func, restaurant_views.retrieveMenuItem)
 
    # Test Cases for Users URLs
    def test_user_login(self):
        # Discrete Value Test
        url = reverse('token_obtain_pair') 
        self.assertEquals(resolve(url).func.view_class, user_views.MyTokenObtainPairView)
 
    def test_user_registration(self):
        # Discrete Value Test
        url = reverse('register') 
        self.assertEquals(resolve(url).func, user_views.registerUser)
 
    # Test Cases for Profile URLs
    def test_retrieve_profile(self):
        # Discrete Value Test
        url = reverse('retrieve-profile') 
        self.assertEquals(resolve(url).func, profile_views.retrieveUserProfile)

    def test_update_profile(self):
        # Discrete Value Test
        url = reverse('update-profile') 
        self.assertEquals(resolve(url).func, profile_views.updateUserProfile)
        
    def test_delete_profile(self):
        # Discrete Value Test
        url = reverse('delete-profile') 
        self.assertEquals(resolve(url).func, profile_views.deleteUserProfile)
    


