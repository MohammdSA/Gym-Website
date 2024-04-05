from .models import Class, Trainer
from django.http import JsonResponse
from fastapi import FastAPI
import json

app = FastAPI()


# Create your views here.
def classes(request):
    class_list = Class.objects.all().values()
    class_json = list(class_list)
    return JsonResponse(class_json, safe=False, json_dumps_params={'indent': 4})


def classDetails(request, id):
    class_list = Class.objects.all().values().get(id=id)
    return JsonResponse(class_list, safe=False, json_dumps_params={'indent': 4})

