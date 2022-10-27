from users.models import *
from rest_framework import serializers
from .models import *
from django.db import models


class TagsSerializer(serializers.ModelSerializer):
    label = serializers.SlugRelatedField(
        many=False,
        slug_field='name',
        queryset=Group.objects.all()
    )

    class Meta:
        model = Tags
        """"" Возможный вариант записи если необходимо выбрать все записи из БД без исключения
            fields = '__all__' либо fields = ('name_group', 'name_tag', 'tag_table', 'data_type', 'comment') если
            необходимы конкретные записи """
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'


class UserSetsSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    tag = serializers.SlugRelatedField(
        many=True,
        slug_field='name_tag',
        queryset=Tags.objects.all()
    )

    class Meta:
        model = UserDataset
        image = serializers.ImageField(source="image.url")
        fields = '__all__'


