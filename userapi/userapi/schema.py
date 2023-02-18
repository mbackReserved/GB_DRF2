import graphene
from graphene_django import DjangoObjectType
from todoapp.models import Project, TODO
from userapp.models import User

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'



class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)
    all_users = graphene.List(UserType)
    all_todo = graphene.List(ToDoType)
    project_by_name = graphene.Field(ProjectType, name=graphene.String(required=True))


    def resolve_all_projects(self, info):
        return Project.objects.all()

    def resolve_all_users(self, info):
        return User.objects.all()

    def resolve_all_todo(self, info):
        return TODO.objects.all()
    
    def resolve_project_by_name(self, info, name):
        try:
            return Project.objects.get(name=name)
        except Project.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)