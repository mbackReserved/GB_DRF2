import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from django.contrib.auth.models import User
from .views import ProjectModelViewSet, ToDoModelViewSet
from .models import TODO, Project
from userapp.models import User as MyUser


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


class TestTODOProject(APITestCase):
    def test_create_todo(self):
        user = MyUser.objects.create(
            username='test',
            firstname='test',
            lastname='test',
            email='test@post.com'
        )
        project = Project.objects.create(
            name='testprj',
            url='https://gb.ru/lessons/295727',
        )
        project.users.add(user)
        project.save()
        response = self.client.put(f'/userapi/projects/{project.id}/', {'name': 'newname', 'url': 'https://gb.ru/lessons/295727', 'users': user.id})
        print(response.json())
        self.assertEqual(response.status_code, status.HTTP_200_OK)


