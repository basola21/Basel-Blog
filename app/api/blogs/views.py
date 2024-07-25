from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Blog, Category
from .serializers import (
    BlogSerializer,
    CategorySerialiizer,
)


class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerialiizer(categories, many=True)
        return Response(serializer.data)


class BlogList(ListCreateAPIView):
    queryset = Blog.manager.all()
    serializer_class = BlogSerializer


class BlogDetail(APIView):
    def get(self, request, slug):
        blog = Blog.manager.get(slug=slug)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)
