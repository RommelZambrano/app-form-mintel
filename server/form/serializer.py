from rest_framework import serializers
from .models import Form


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id_postal_operator", "ruc", "razon_social", "email", "representante_legal",
                  "telefono_celular", "telefono_fijo", "fecha_emision")
        model = Form
