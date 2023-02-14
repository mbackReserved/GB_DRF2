from rest_framework.serializers import ModelSerializer
from .models import Project, TODO
from userapp.serializers import UserModelSerializer, UserNameModelSerializer

class ProjectModelSerializer(ModelSerializer):
    #users = UserNameModelSerializer(many=True)
    class Meta:
        model = Project
        #fields = ['name', 'url', 'users']
        fields = '__all__'

class ProjectUrlModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['url']


class ToDoModelSerializer(ModelSerializer):
    #project = ProjectUrlModelSerializer()
    #author = UserNameModelSerializer()
    class Meta:
        model = TODO
        fields = ['project', 'text', 'is_active', 'created_at', 'updated_at', 'author']

