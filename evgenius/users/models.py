from django.contrib.auth.models import User
from django.db import models

from analytics.models import Tags


class UserDataset(models.Model):
    tag = models.ManyToManyField(Tags, related_query_name='tag')
    name = models.CharField(max_length=100, blank=True, null=True, default=None, verbose_name='Dataset name')
    is_historical = models.BooleanField(default=True, verbose_name='Historical dataset')
    date_time_start_diapason = models.DateTimeField(blank=True, null=True, default=None, verbose_name='Beginning time')
    date_time_end_diapason = models.DateTimeField(blank=True, null=True, default=None, verbose_name='Ending time')
    url = models.SlugField(blank=True, null=True, max_length=200)
    created = models.DateTimeField(auto_now_add=True, verbose_name='Created')
    updated = models.DateTimeField(auto_now=True, verbose_name='Updated')
    dataset_image = models.ImageField(upload_to='dataset_images/%Y/%m/%d')
    user = models.ForeignKey(User, verbose_name='User', on_delete=models.CASCADE)

    def __str__(self):
        return "%s" % self.name

    class Meta:
        verbose_name = 'Dataset name'
        verbose_name_plural = 'Datasets name'
