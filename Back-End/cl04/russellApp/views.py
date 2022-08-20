from django.shortcuts import render


# Create your views here.
from django.http import HttpResponse

def russ(request):
    return HttpResponse("<h2> Aaaa!!!</>")