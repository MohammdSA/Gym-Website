# Generated by Django 4.2.9 on 2024-03-20 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0019_class_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]