
from django.urls import path
from .views import home
# from fscohortApp.views import fshome
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', home),
    # path('fs', fshome),
    # path('', include('firstApp.urls')),
]
