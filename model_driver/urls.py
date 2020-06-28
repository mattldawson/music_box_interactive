from django.urls import path

from . import views

urlpatterns = [
    path('run', views.run, name='run'),
    path('check_status', views.check_status, name="check_status"),
    path('mechanism_data', views.mechanism_data, name="mechanism_data"),
]
