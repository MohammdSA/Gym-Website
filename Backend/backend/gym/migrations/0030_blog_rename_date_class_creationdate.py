# Generated by Django 4.2.9 on 2024-03-22 20:30

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0029_alter_trainer_location_alter_trainer_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creationDate', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=20)),
                ('author', models.CharField(max_length=20)),
                ('category', models.CharField(max_length=20)),
                ('content', ckeditor.fields.RichTextField()),
            ],
        ),
        migrations.RenameField(
            model_name='class',
            old_name='date',
            new_name='creationDate',
        ),
    ]
