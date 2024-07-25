from django.urls import path
from .views import (
    BlogList,
    CategoryList,
    BlogDetail,
)

urlpatterns = [
    path("categories/", CategoryList.as_view()),
    path("posts", BlogList.as_view()),
    path("posts/<str:slug>/", BlogDetail.as_view()),
]
