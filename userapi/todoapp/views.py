from rest_framework.viewsets import ModelViewSet
from .models import Project, TODO
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .filters import ProjectNameIncludeFilter
from rest_framework.pagination import LimitOffsetPagination

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectNameIncludeFilter
    pagination_class = ProjectLimitOffsetPagination

class ToDoModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = ToDoModelSerializer