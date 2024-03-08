from django.db import models

# Create your models here.
class Class(models.Model):
    name = models.CharField(max_length=20, unique=True, blank=False)
    thumbnail = models.ImageField()
    duration = models.IntegerField(blank=False)
    intensity = models.CharField(max_length=10, blank=False)
    level = models.CharField(max_length=10, blank=False)

    # schedule = []

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

