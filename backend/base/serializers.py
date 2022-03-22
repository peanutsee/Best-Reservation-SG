from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'first_name', 'last_name', 'email', 'isAdmin', 'username', 'date_joined']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

class IsPartOfSerializer(serializers.ModelSerializer):
    class Meta:
        model = IsPartOf
        fields = '__all__'

class BillDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillDetail
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderItemInOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItemInOrder
        fields = '__all__'


class TelegramDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TelegramData
        fields = '__all__'
        
class ProportionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proportions
        fields = '__all__'