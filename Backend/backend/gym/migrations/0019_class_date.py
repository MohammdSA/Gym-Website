# Generated by Django 4.2.9 on 2024-03-20 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0018_class_category_class_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
