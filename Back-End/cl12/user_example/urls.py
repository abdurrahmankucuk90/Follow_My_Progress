from django.urls import path, include
from django.contrib.auth import views as auth_views
from .views import (
    home,
    # home,
    special,
    register,
)

urlpatterns = [
    path('', home, name="home"),
    path('special', special, name="special"),
    path('register', register, name="register"),
    path('password_change/', auth_views.PasswordChangeView.as_view(template_name="registration/password_change.html"), name="password_change"),
]
