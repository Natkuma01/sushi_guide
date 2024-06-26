from django.db import models


class FishCategory(models.Model):
    name = models.CharField(max_length=100)
    image_urls = models.JSONField(default=list, null=True)
    description = models.TextField()


    def __str__(self):
        return f"{self.name}"


class Fish(models.Model):
    name = models.CharField(max_length=100)
    image_urls = models.JSONField(default=list, null=True)
    family = models.ForeignKey(
        FishCategory,
        related_name='fishes',
        on_delete=models.CASCADE
    )
    description = models.TextField()
    taste = models.TextField(null=True)
    texture = models.TextField(null=True)

    def __str__(self):
        return f"{self.name}"


class Glossary(models.Model):
    english = models.CharField(max_length=100)
    japanese = models.CharField(max_length=100)

 
