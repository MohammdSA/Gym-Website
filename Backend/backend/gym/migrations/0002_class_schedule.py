# Generated by Django 4.2.9 on 2024-03-08 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='schedule',
            field=models.CharField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=20, null=True),
        ),
    ]