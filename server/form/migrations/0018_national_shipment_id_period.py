# Generated by Django 4.2.3 on 2023-08-22 01:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0017_national_shipment_rename_operador_period_id_operator_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='national_shipment',
            name='id_period',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='form.period'),
            preserve_default=False,
        ),
    ]
