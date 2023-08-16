from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"form", views.FormView, "form")


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Form API")), 
    path('load-data/', views.load_data, name='Load Data to DB from Excel'),
    path('get-data/', views.get_data, name='Get Data from DB'),
]
 