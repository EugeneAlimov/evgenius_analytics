# Create your models here.
from django.db import models

# Имя класса, который еще не был определен (определен ниже), нужно вставлять как строковый тип:
# 'КлассКоторыйОпределенНиже'


class Group(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True, default=None, verbose_name='Группа тегов')

    def __str__(self):
        return "%s" % self.name

    class Meta:
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'


class Tags(models.Model):
    label = models.ForeignKey(Group, on_delete=models.CASCADE, null=True, default=None,
                              verbose_name='Группа тегов', related_name='label')
    name_tag = models.CharField(max_length=100, blank=True, null=True, default=None, verbose_name='Имя тега')
    tag_table = models.CharField(max_length=100, blank=True, null=True, default=None, verbose_name='Таблица тегов')
    address = models.CharField(max_length=100, blank=True, null=True, default=None, verbose_name='Адрес в памяти')
    data_type = models.CharField(max_length=100, blank=True, null=True, default=None, verbose_name='Тип данных')
    comment = models.CharField(max_length=100, blank=True, null=False, default='no comment', verbose_name='Комментарий')
    on_dashboard = models.BooleanField(default=False, verbose_name='Used on dashboard')

    def __str__(self):
        return "%s" % self.name_tag

    class Meta:
        verbose_name = 'Теги'
        verbose_name_plural = 'Теги'
