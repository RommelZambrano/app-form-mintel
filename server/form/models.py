from django.db import models

class T_Postal_Operator(models.Model):
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

class T_Year(models.Model):
    id_year = models.AutoField(primary_key=True)
    year = models.IntegerField()

    def __str__(self):
        return f"Year: {self.id_year} - {self.year}"

class T_Period(models.Model):
    id_period = models.AutoField(primary_key=True)
    id_operator = models.ForeignKey(T_Postal_Operator, on_delete=models.CASCADE)
    id_year = models.ForeignKey(T_Year, on_delete=models.CASCADE)
    period = models.CharField(max_length=20)

    def __str__(self):
        return f"Period: {self.id_period} - {self.period}"
            
class T_National_Shipment(models.Model):
    id_national_shipment = models.AutoField(primary_key=True)
    id_operator = models.ForeignKey(T_Postal_Operator, on_delete=models.CASCADE)
    id_period = models.ForeignKey(T_Period, on_delete=models.CASCADE)
    enn_docs_month1 = models.IntegerField()
    enn_docs_month2 = models.IntegerField()
    enn_docs_month3 = models.IntegerField()
    enn_docs_month4 = models.IntegerField()
    enn_docs_month5 = models.IntegerField()
    enn_docs_month6 = models.IntegerField()
    enn_packages_month1 = models.IntegerField()
    enn_packages_month2 = models.IntegerField()
    enn_packages_month3 = models.IntegerField()
    enn_packages_month4 = models.IntegerField()
    enn_packages_month5 = models.IntegerField()
    enn_packages_month6 = models.IntegerField()

    def __str__(self):
        return f"National Shipment: {self.id_national_shipment}"

class T_National_Billing(models.Model):
    id_national_billing = models.AutoField(primary_key=True)
    id_operator = models.ForeignKey(T_Postal_Operator, on_delete=models.CASCADE)
    id_period = models.ForeignKey(T_Period, on_delete=models.CASCADE)
    facn_docs_month1 = models.IntegerField()
    facn_docs_month2 = models.IntegerField()
    facn_docs_month3 = models.IntegerField()
    facn_docs_month4 = models.IntegerField()
    facn_docs_month5 = models.IntegerField()
    facn_docs_month6 = models.IntegerField()
    facn_packages_month1 = models.IntegerField()
    facn_packages_month2 = models.IntegerField()
    facn_packages_month3 = models.IntegerField()
    facn_packages_month4 = models.IntegerField()
    facn_packages_month5 = models.IntegerField()
    facn_packages_month6 = models.IntegerField()

    def __str__(self):
        return f"National Shipment: {self.id_national_billing}"
    
class T_Local_Shipment(models.Model):
    id_local_shipment = models.AutoField(primary_key=True)
    id_operator = models.ForeignKey(T_Postal_Operator, on_delete=models.CASCADE)
    id_period = models.ForeignKey(T_Period, on_delete=models.CASCADE)
    enl_docs_month1 = models.IntegerField()
    enl_docs_month2 = models.IntegerField()
    enl_docs_month3 = models.IntegerField()
    enl_docs_month4 = models.IntegerField()
    enl_docs_month5 = models.IntegerField()
    enl_docs_month6 = models.IntegerField()
    enl_packages_month1 = models.IntegerField()
    enl_packages_month2 = models.IntegerField()
    enl_packages_month3 = models.IntegerField()
    enl_packages_month4 = models.IntegerField()
    enl_packages_month5 = models.IntegerField()
    enl_packages_month6 = models.IntegerField()

    def __str__(self):
        return f"National Shipment: {self.id_local_shipment}"

class T_Local_Billing(models.Model):
    id_local_billing = models.AutoField(primary_key=True)
    id_operator = models.ForeignKey(T_Postal_Operator, on_delete=models.CASCADE)
    id_period = models.ForeignKey(T_Period, on_delete=models.CASCADE)
    facl_docs_month1 = models.IntegerField()
    facl_docs_month2 = models.IntegerField()
    facl_docs_month3 = models.IntegerField()
    facl_docs_month4 = models.IntegerField()
    facl_docs_month5 = models.IntegerField()
    facl_docs_month6 = models.IntegerField()
    facl_packages_month1 = models.IntegerField()
    facl_packages_month2 = models.IntegerField()
    facl_packages_month3 = models.IntegerField()
    facl_packages_month4 = models.IntegerField()
    facl_packages_month5 = models.IntegerField()
    facl_packages_month6 = models.IntegerField()

    def __str__(self):
        return f"National Shipment: {self.id_local_billing}"
    
class T_Local_Billing(models.Model):
    id_local_billing = models.AutoField(primary_key=True)
    id_operator = models.ForeignKey(T_Postal_Operator, on_delete=models.CASCADE)
    id_period = models.ForeignKey(T_Period, on_delete=models.CASCADE)
    eni_docs_month1 = models.IntegerField()
    eni_docs_month2 = models.IntegerField()
    eni_docs_month3 = models.IntegerField()
    eni_docs_month4 = models.IntegerField()
    eni_docs_month5 = models.IntegerField()
    eni_docs_month6 = models.IntegerField()
    eni_packages_month1 = models.IntegerField()
    eni_packages_month2 = models.IntegerField()
    eni_packages_month3 = models.IntegerField()
    eni_packages_month4 = models.IntegerField()
    eni_packages_month5 = models.IntegerField()
    eni_packages_month6 = models.IntegerField()

    def __str__(self):
        return f"National Shipment: {self.id_local_billing}"