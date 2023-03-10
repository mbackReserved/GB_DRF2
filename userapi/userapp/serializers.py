from rest_framework.serializers import ModelSerializer
from .models import User

class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'firstname', 'lastname', 'email']


class UserModelSerializerWithSuperuserAndStaff(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserNameModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']