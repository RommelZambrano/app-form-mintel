from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"form", views.FormView, "form")


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Form API")),
]
