from drf_writable_nested import WritableNestedModelSerializer

from users.models import *
from rest_framework import serializers
from .models import *


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
    label = serializers.SlugRelatedField(
        many=True,
        slug_field='name_tag',
        read_only=True,
    )

    class Meta:
        model = Group
        fields = '__all__'


class UserSetsSerializer(WritableNestedModelSerializer):
    tag = TagsSerializer(many=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    # user_sets = UserSetsSerializer(many=True)

    class Meta:
        model = UserDataset
        fields = '__all__'
