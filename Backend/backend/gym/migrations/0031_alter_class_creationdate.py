# Generated by Django 4.2.9 on 2024-03-30 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0030_blog_rename_date_class_creationdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='creationDate',
            field=models.DateTimeField(null=True),
        ),
    ]
