# # Create your views here.
from django.http import JsonResponse, HttpResponse
# from requests import Response
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
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


# class UserSetsAPIView(APIView):
#
#     parser_classes = (MultiPartParser, FormParser)
#     permission_classes = (IsAuthenticated,)
#
#     def get_queryset(self):
#         user = self.request.user
#         # tag = self.request.data.tag
#         print(self.request)
#
#     def get(self, request):
#         u = UserDataset.objects.all()
#         return Response({'datasets': UserSetsSerializer(u, many=True).data})
#
#     def post(self, request):
#         print('request:', request.data)
#         # UserSetsSerializer(context={'request': request})
#
#         serializer = UserSetsSerializer(data=request.data, context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         return Response({'ddd': serializer.data})

class UserSetsViewSet(viewsets.ModelViewSet):
    serializer_class = UserSetsSerializer
    # parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        print('self.request: ', self.request)

        response = UserDataset.objects.filter(user=user)
        return response


class AnalyticsFileUploaderViewSet(viewsets.GenericViewSet):
    def get_queryset(self):
        print(self.request)

    def datasets_list(self, request):
        if request.method == 'POST':
            print('request: ', request)
            snippets = UserDataset.objects.all()
            serializer = UserSetsSerializer(snippets, many=True)
            return JsonResponse(serializer.data, safe=False)


# def group_prepare(request):
#     """Принимаем AJAX от клиента с названием группы по которой нужно вывести список тегов и комментариев
#     принадлежащих к этой группе, фильтруем и создаем словарь с парами имя - комментарий, присвиваем в data и отправляем
#     обратно JsonResponse(data)"""
#     if request.method == 'POST':
#         data = request.POST
#         tags_comments_list = {}
#         for e in Tags.objects.filter(group=Group.objects.get(name_group=data.get('groupList'))):
#             tags_comments_list[e.name_tag] = e.comment, e.data_type
#             print(e)
#         data = tags_comments_list
#         return JsonResponse(data)


# def tags_influx_prepare(request):
#     """Подготовка списка переменных и тегов для тренда"""
#
#     if request.method == 'POST':
#         influx_data = request.POST
#         print('influx_data ', influx_data)
#         influx_query_tags = influx_data.get('list')
#         print(influx_query_tags)
#         list_influx_query_tags = influx_query_tags.split(',')
#         list_influx_query_tags.append('time')
#         influx_query_tags = ','.join('"{0}"'.format(w) for w in influx_query_tags.split(','))  # генератор списка тегов
#         print(influx_query_tags)
#         time_before = influx_data.get('timeClientUtcValueFrom')  # timeFrom в UTC
#         time_after = influx_data.get('timeClientUtcValueTo')  # timeTo в UTC
#
#         bucket = "CNC"  # Имя базы данных
#         measurement = "line"  # Имя измерения
#
#         client = InfluxDBClient('192.168.0.200', 8086, 'root', 'root')  # Подключение к базе. В будущем нужно сделать шаблон
#         client.create_database(bucket)
#         # внесения настроек подключения к базе. Создать модель с настройками и делать из нее выборку
#         list_database = client.get_list_database()  # Список баз данных
#         client.switch_database(bucket)  # Переключение на нужную базу
#
#         query = f'SELECT {influx_query_tags} FROM {bucket}."autogen".{measurement} WHERE time >= \'{time_before}\' AND time < \'{time_after}\''  # Запрос в Influx
#         print(query)
#         result = client.query(query).get_points()
#         s = []
#         result_response = {}
#         for items in result:
#             s.append(items)
#
#         for element in list_influx_query_tags:
#             item = []
#             for i in s:
#                 if str(i[element]) == 'True':
#                     i[element] = 1
#                 elif str(i[element]) == 'False':
#                     i[element] = 0
#                 item.append(i[element])
#             result_response[element] = item
#         s.clear()
#         print(result_response)
#         response = {'result': result_response}
#         return JsonResponse(response, safe=False)


# def analytics_render(request):
#     group = Group.objects.all()
#     tags = Tags.objects.all
#     context = {'group': group, 'tags': tags}
#     print(context)
#     if request.method == 'POST':
#         login_data = request.POST
#         username = login_data.get('username')
#         password = login_data.get('password')
#         user_admin = authenticate(username=username, password=password)
#         if user_admin:
#             login(request, user_admin)
#             return render(request, 'analytics/analytics.html', context, )
#     if request.user_admin.is_authenticated:
#         return render(request, 'analytics/analytics.html', context, )
#     return HttpResponseRedirect('home')


# class AnalyticAPIView(generics.ListCreateAPIView):
#     queryset = Tags.objects.all()
#     serializer_class = TagsSerializer
#
#
# class AnalyticAPIUpdate(generics.UpdateAPIView):
#     queryset = Tags.objects.all()
#     serializer_class = TagsSerializer
#
#
# class AnalyticAPIDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Tags.objects.all()
#     serializer_class = TagsSerializer



    # def list(self, request):
    #     return Response('GET API')
    #
    # def create(self, request):
    #     download_to_base(request)
    #     response = f'File upload successfully'
    #     return Response(response)


# class TagsInfluxPrepareViewSet(viewsets.ViewSet):
#
#     def list(self, request):
#         return Response('GET API')
#
#     def create(self, request):
#         if request.method == 'POST':
#             wdawd = request.POST
#             qqq = wdawd.get('data')
#             print('tags request', wdawd)
#         # download_to_base(request)
#         response = f'File upload successfully'
#         return Response(response)
