# Generated by Django 4.2.9 on 2024-03-19 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0013_remove_class_schedule_delete_day_class_schedule'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='schedule',
            field=models.CharField(default='Monday', max_length=100),
            preserve_default=False,
        ),
    ]
