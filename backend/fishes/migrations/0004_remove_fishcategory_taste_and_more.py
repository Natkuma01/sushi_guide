# Generated by Django 5.0.6 on 2024-05-29 15:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("fishes", "0003_remove_fish_image_remove_fishcategory_image_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="fishcategory",
            name="taste",
        ),
        migrations.RemoveField(
            model_name="fishcategory",
            name="texture",
        ),
        migrations.AddField(
            model_name="fishcategory",
            name="image4",
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name="fishcategory",
            name="image5",
            field=models.URLField(null=True),
        ),
    ]
