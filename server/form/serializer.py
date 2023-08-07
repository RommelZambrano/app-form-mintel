from rest_framework import serializers
from .models import Form


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id_postal_operator", "ruc", "razon_social", "email",
                  "telefono", "representante_legal", "fecha_emision")
        model = Form
