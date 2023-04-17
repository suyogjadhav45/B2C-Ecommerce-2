# serializers.py

from rest_framework import serializers
from .models import Category
from .models import Product
from .models import SubCategory

from .models import Customer
from .models import Uom
from .models import Vendor
from .models import DelivPart
from .models import Invman
from .models import FinManager



class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class UomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uom
        fields = '__all__'

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'

class DelivpartSerializer(serializers.ModelSerializer):
    class Meta:
        model = DelivPart
        fields = '__all__'

class InvmanSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterruptedError
        fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterruptedError
        fields = '__all__'

class FinmanSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterruptedError
        fields = '__all__'

