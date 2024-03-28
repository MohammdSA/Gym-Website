from .models import Class, Trainer
from django.http import JsonResponse
from fastapi import FastAPI

app = FastAPI()


# Create your views here.
def getClasses(request):
    @app.post("/getClasses")
    def getClass():
        classes = Class.objects.all()
        # classes_json = serialize('json', classes)
        x = list(classes.values())
        print(x)
        return JsonResponse(x, safe=False)
    return getClass()

