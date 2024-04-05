from ckeditor.fields import RichTextField
from django.db import models
from ckeditor.widgets import CKEditorWidget


# Create your models here.
class Class(models.Model):
    name = models.CharField(max_length=20, unique=True, blank=False)
    description = models.CharField(max_length=100, blank=False, null=True)
    thumbnail = models.ImageField(upload_to='images/')
    duration = models.IntegerField(blank=False)
    intensity = models.CharField(max_length=20, blank=False)
    level = models.CharField(max_length=20, blank=False)
    schedule = models.JSONField()

    def __str__(self):
        return f"{self.name} Class"


class Schedule(models.Model):
    print("Schedule")


class Trainer(models.Model):
    name = models.CharField(max_length=20, unique=True)
    summary = models.TextField()
    thumbnail = models.ImageField(upload_to='images/')
    proffession = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    location = models.CharField(max_length=50)
    socialAccounts = models.JSONField()

    def __str__(self):
        return f"{self.name}"


class Blog(models.Model):
    creationDate = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=20)
    author = models.CharField(max_length=20)
    category = models.CharField(max_length=20)
    content = RichTextField()


class Program(models.Model):
    print("Program")


class Article(models.Model):
    print("Article")

