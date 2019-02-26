from django.contrib import admin
from django.urls import path, include


handler404 = "pages.views.handler404"
handler500 = "pages.views.handler500"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pages.urls')),
    path('contacts/', include('contacts.urls')),
]
