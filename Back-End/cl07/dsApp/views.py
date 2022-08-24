from django.shortcuts import render

# Create your views here.
def dshome(request):
    return render(request, 'dsApp/index.html')
