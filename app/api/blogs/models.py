from django.db import models
from django.contrib.auth.models import User

# from mptt.models import MPTTModel, TreeForeignKey
from django.utils.text import slugify


#
# class Comment(MPTTModel):
#     post = models.ForeignKey("Blog", on_delete=models.CASCADE, related_name="comments")
#     author = models.ForeignKey(User, on_delete=models.CASCADE)
#     body = models.TextField()
#     created_on = models.DateTimeField(auto_now_add=True)
#     parent = TreeForeignKey(
#         "self", on_delete=models.CASCADE, null=True, blank=True, related_name="children"
#     )
#     likes = models.ManyToManyField(User, related_name="content_likes", blank=True)
#
#     class MPTTMeta:
#         order_insertion_by = ["created_on"]
#


class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "Categories"


class BlogManager(models.Manager):
    def all(self):
        return self.get_queryset().filter(status="published")

    def get(self, *args, **kwargs):
        return self.get_queryset().get(*args, **kwargs)


class Blog(models.Model):
    options = (
        ("draft", "Draft"),
        ("published", "Published"),
    )

    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="images/", null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    # likes = models.ManyToManyField(User, related_name="blog_likes", blank=True)
    sub_title = models.TextField()
    body = models.TextField()
    time_to_read = models.IntegerField(null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField("Category", related_name="blogs")
    # post_comments = models.ManyToManyField(Comment, related_name="comments", blank=True)
    status = models.CharField(max_length=10, choices=options, default="draft")
    slug = models.SlugField(max_length=200, unique=True, null=True, blank=True)

    #
    # def total_likes(self):
    #     return self.likes.count()
    #
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title, allow_unicode=True)
        super(Blog, self).save(*args, **kwargs)

    manager = BlogManager()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ("-created_on",)
        db_table = "Blogs"
