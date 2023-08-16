from django.db import models

# Create your models here.


class Form(models.Model):
    id_postal_operator = models.AutoField(primary_key=True)
    ruc = models.CharField(max_length=13)
    razon_social = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    representante_legal = models.CharField(max_length=100)
    telefono_celular = models.CharField(max_length=15)
    telefono_fijo = models.CharField(max_length=15)
    fecha_emision = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.razon_social
