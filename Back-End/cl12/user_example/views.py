from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm

def home(request):
    return render(request, 'user_example/index.html')

def special(request):
    return render(request, "user_example/special.html")

def register(request):
    form = UserCreationForm(request.POST or None)
    # form = UserCreationForm()
    # if request.method == 'POST':
        # form = UserCreationForm
    if form.is_valid():
        form.save()
        # username = form.cleaned_data["username"]
        # password = form.cleaned_data['password1']
        # user = authenticate(username=username, password=password)
        # login(request, user)
        return redirect("login")
    context = {
        'form': form
    }
    return render(request, "registration/register.html", context)

