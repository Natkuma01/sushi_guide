# Generated by Django 4.1.2 on 2024-06-21 15:29

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("fishes", "0004_remove_fishcategory_taste_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="fishcategory",
            name="image1",
        ),
        migrations.RemoveField(
            model_name="fishcategory",
            name="image2",
        ),
        migrations.RemoveField(
            model_name="fishcategory",
            name="image3",
        ),
        migrations.RemoveField(
            model_name="fishcategory",
            name="image4",
        ),
        migrations.RemoveField(
            model_name="fishcategory",
            name="image5",
        ),
        migrations.AddField(
            model_name="fishcategory",
            name="image_urls",
            field=models.JSONField(default=list, null=True),
        ),
    ]
