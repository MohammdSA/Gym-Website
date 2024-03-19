from django.contrib import admin
from .models import Class, Schedule, Trainer, Program, Article

# Register your models here.
admin.site.register(Class)
admin.site.register(Schedule)
admin.site.register(Trainer)
admin.site.register(Program)
admin.site.register(Article)
