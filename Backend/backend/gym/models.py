from django.db import models

# Create your models here.
class Class(models.Model):
    name = models.CharField(max_length=20, unique=True, blank=False)
    thumbnail = models.ImageField()
    duration = models.IntegerField(max_length=3, blank=False)
    intensity = models.CharField(max_length=10, blank=False)
    level = models.CharField(max_length=10, blank=False)
    schedule = []

class Schedule(models.Model):
    print("Schedule")

class Trainer(models.Model):
    print("Trainer")

class Program(models.Model):
    print("Program")

class Article(models.Model):
    print("Article")

