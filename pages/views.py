from django.shortcuts import render, redirect
from django.http import HttpResponse

def index(request):
    return render(request, 'pages/index.html')

def pymes(request):
    return render(request, 'pages/pymes.html')

def hero(request):
    return redirect('/#hero')

def agencia(request):
    return redirect('/#agencia')

def servicios(request):
    return redirect('/#servicios')

def portfolio(request):
    return redirect('/#portfolio')

def contacto(request):
    return redirect('/#contacto')
