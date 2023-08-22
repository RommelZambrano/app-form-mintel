from django.contrib import admin

from .models import T_Postal_Operator, T_Period, T_National_Shipment, T_Year
# Register your models here.
admin.site.register(T_Postal_Operator)
admin.site.register(T_Period)
admin.site.register(T_National_Shipment)
admin.site.register(T_Year)