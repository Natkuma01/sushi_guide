from django.db import models

class SushiType(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField()
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"