# Generated by Django 4.2.9 on 2024-03-08 23:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0008_class_schedule'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='schedule',
            field=models.DurationField(),
        ),
    ]
