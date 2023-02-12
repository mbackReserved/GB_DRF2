import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from django.contrib.auth.models import User
from .views import ProjectModelViewSet, ToDoModelViewSet
from .models import TODO, Project


class TestProjectModelView(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/userapi/projects')
        view = ProjectModelViewSet.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_create_post(self):
        factory = APIRequestFactory()
        request = factory.post('/userapi/todo', {'text': 'NewTodoForTests'})
        view = ToDoModelViewSet.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    

    def test_get_detail(self):
        todo = TODO.objects.create(text='TestTODO')
        client = APIClient()
        response = client.get(f'/userapi/todo/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

