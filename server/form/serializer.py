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
        fields = ("id_operator", "id_period", "enn_docs_month1", "enn_docs_month2", "enn_docs_month3",
                  "enn_docs_month4", "enn_docs_month5", "enn_docs_month6", "enn_packages_month1",
                  "enn_packages_month2", "enn_packages_month3", "enn_packages_month4",
                  "enn_packages_month5", "enn_packages_month6")
        model = T_National_Shipment