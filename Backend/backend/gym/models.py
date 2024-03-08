from django.db import models

# Create your models here.
class Class(models.Model):
    name = models.CharField(max_length=20, unique=True, blank=False)
    thumbnail = models.ImageField()
    duration = models.IntegerField(blank=False)
    intensity = models.CharField(max_length=10, blank=False)
    level = models.CharField(max_length=10, blank=False)
    DAY_CHOICES = [
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    ]
    schedule = models.CharField(max_length=20, choices=DAY_CHOICES, null=True)

class Schedule(models.Model):
    print("Schedule")

class Trainer(models.Model):
    print("Trainer")

class Program(models.Model):
    print("Program")

class Article(models.Model):
    print("Article")

