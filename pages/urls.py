from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('#hero', views.hero, name='hero'),
    path('#agencia', views.agencia, name='agencia'),
    path('#servicios', views.servicios, name='servicios'),
    path('#portfolio', views.portfolio, name='portfolio'),
    path('#contacto', views.contacto, name='contacto'),
    path('pymes/', views.pymes, name='pymes'),
]
