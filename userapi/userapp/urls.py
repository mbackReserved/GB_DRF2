from django.urls import path
from .views import UsersAPIView

app_name = 'userapp'
urlpatterns = [
    path('', UsersAPIView.as_view())
]