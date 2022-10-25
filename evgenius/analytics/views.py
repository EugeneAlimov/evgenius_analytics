# # Create your views here.
from django.http import JsonResponse, HttpResponse
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from analytics.models import Tags, Group
from analytics.serializers import TagsSerializer, GroupSerializer, UserSetsSerializer
from analytics.tasks import download_to_base
from users.models import UserDataset


def pars_tags_list_view(request):
    """Получаем Excel файл из формы и заполняем базу тегами"""
    download_to_base(request)

    """вычитываем имя группы тегов из каждой строки, пытаемся извлечь из базы имя группы
    соответствующее текущей строчке тега, если имя группы есть - пишем в базу соответствующие теги, привязанные к этой
    группе соотношением один-комногим, если этого имени нет выпадает исключение. Обрабатываем сохраняя
    имя нруппы в таблицу Group и пишем в базу соответствующие теги, привязанные к этой 
    группе соотношением один-комногим
    Если файл с тегами не содержит нужные данные (пустые колонки или ячейки (кроме комментариев)) вывести уведомление 
    об этом"""

    response = f'File upload successfully'
    return HttpResponse(response)


class AnalyticsTagsViewSet(viewsets.ModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer


class AnalyticsGroupsViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class UserSetsViewSet(viewsets.ModelViewSet):
    serializer_class = UserSetsSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user

        response = UserDataset.objects.filter(user=user)
        return response
