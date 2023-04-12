# # Create your views here.
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

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

    def update(self, request, *args, **kwargs):
        print(request.data)
        user_dataset = request.data
        pk = UserDataset.objects.get(id=user_dataset['id'])
        print('pk ', pk)
        serializer = UserSetsSerializer(pk, data=user_dataset)
        # print('serializer ', serializer)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        return Response(status.HTTP_200_OK)


@method_decorator(csrf_exempt, name='dispatch')
class UserSetUpdateView(APIView):
    def put(self, request, pk, format=None):
        print('request ', request.data)
        user_dataset = request.data
        serializer = UserSetsSerializer(pk, data=user_dataset)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status.HTTP_200_OK)
        # return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        return Response(status.HTTP_200_OK)


@method_decorator(csrf_exempt, name='dispatch')
class WSTagsUpdateView(APIView):
    def put(self, request, format=None):
        for i in request.data['label']:
            pk = Tags.objects.get(id=i['id'])
            serializer = TagsSerializer(pk, data=i)
            if serializer.is_valid():
                serializer.save()
            else:
                return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status.HTTP_200_OK)
        # return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        return Response(status.HTTP_200_OK)
