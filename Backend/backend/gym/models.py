from django.db import models

# Create your models here.
class Class(models.Model):
    name = models.CharField(max_length=20, unique=True, blank=False)
    description = models.CharField(max_length=100, blank=False, null=True)
    thumbnail = models.ImageField()
    duration = models.IntegerField(blank=False)
    intensity = models.CharField(max_length=20, blank=False)
    level = models.CharField(max_length=20, blank=False)
    schedule = models.JSONField()
    date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=50, blank=False, null=True)

    def __str__(self):
        return f"{self.name} Class"

class Schedule(models.Model):
    print("Schedule")

class Trainer(models.Model):
    print("Trainer")

class Program(models.Model):
    print("Program")

class Article(models.Model):
    print("Article")

