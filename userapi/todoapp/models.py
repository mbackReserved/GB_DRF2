from django.db import models
from userapp.models import User


class Project(models.Model):
    name = models.CharField(max_length=128)
    url = models.URLField(blank=True)
    users = models.ManyToManyField(User)


class TODO(models.Model):
    text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True)
    is_active = models.BooleanField(default=True)
