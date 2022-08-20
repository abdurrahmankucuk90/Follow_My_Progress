from django.urls import path
from .views import russ
# from fscohortApp.views import fshome
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', russ),
    # path('fs', fshome),
    # path('', include('firstApp.urls')),
]
