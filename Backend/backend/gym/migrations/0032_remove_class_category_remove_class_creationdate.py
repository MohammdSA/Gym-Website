# Generated by Django 4.2.9 on 2024-03-30 05:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0031_alter_class_creationdate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='class',
            name='category',
        ),
        migrations.RemoveField(
            model_name='class',
            name='creationDate',
        ),
    ]
