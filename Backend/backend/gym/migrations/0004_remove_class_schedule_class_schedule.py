# Generated by Django 4.2.9 on 2024-03-08 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0003_day_remove_class_schedule_class_schedule'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='class',
            name='schedule',
        ),
        migrations.AddField(
            model_name='class',
            name='schedule',
            field=models.TextField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], null=True),
        ),
    ]
