from rest_framework import serializers
from .models import T_Postal_Operator, T_Period, T_National_Shipment, T_Year


class PostalOperatorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id_postal_operator", "ruc", "razon_social", "email", "representante_legal",
                  "telefono_celular", "telefono_fijo", "fecha_emision")
        model = T_Postal_Operator

class YearSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id_year", "year")
        model = T_Year

class PeriodSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id_period", "id_operator", "id_year", "period")
        model = T_Period


class ShipmentsNationalSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id_operator", "id_period", "number_docs", "number_packages", "file_nationals_shipments")
        model = T_National_Shipment