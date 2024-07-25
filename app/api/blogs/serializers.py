from rest_framework import serializers
from .models import Blog, Category


class BlogSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    categories = serializers.StringRelatedField(many=True)

    class Meta:
        model = Blog
        fields = "__all__"

    def get_author(self, obj):
        return f"{obj.author.first_name} {obj.author.last_name}"


class CategorySerialiizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
