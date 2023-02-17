from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer, UserModelSerializerWithSuperuserAndStaff
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView

class UserModelView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class SingleUserView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class UsersAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '1.2':
            return UserModelSerializerWithSuperuserAndStaff
        return UserModelSerializer