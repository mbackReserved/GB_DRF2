from rest_framework.viewsets import ModelViewSet
from .models import Project, TODO
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .filters import ProjectNameIncludeFilter
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import IsAuthenticated


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ProjectModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer]
    #permission_classes = IsAuthenticated
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectNameIncludeFilter
    pagination_class = ProjectLimitOffsetPagination

class ToDoModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = ToDoModelSerializer
    #permission_classes = IsAuthenticated
    filterset_fields = ['project']
    pagination_class = ToDoLimitOffsetPagination
    
    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()
        return Response()
