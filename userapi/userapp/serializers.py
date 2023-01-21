from rest_framework.serializers import HyperlinkedModelSerializer
from .models import User

class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserNameModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']