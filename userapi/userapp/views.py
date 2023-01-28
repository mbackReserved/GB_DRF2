from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView

class UserModelView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class SingleUserView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer