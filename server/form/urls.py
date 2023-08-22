from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

# Creas una instancia del router predeterminado.
router = routers.DefaultRouter()

# Registras tus vistas con el router. Esto generará automáticamente las rutas para estas vistas.

router.register(r"form", views.PostalOperatorView, "form")
router.register(r"period", views.PeriodView, "period")
router.register(r"national-shipment", views.ShipmentNationalView, "national-shipment")

# Defines tus urlpatterns. Esto incluye las rutas generadas por el router y algunas rutas adicionales.
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Form API")),
    path('load-data/', views.load_data, name='Load Data to DB from Excel'),
    path('api/v2/operator/', views.get_data, name='Get Data from DB')
]
