
from django.contrib import admin
from django.conf.urls import url, include
from frontend import views 

urlpatterns = [
    url(r'^api/reviews$', views.review_list),
    url(r'^api/graph$', views.graph),
    url(r'', views.graph),
]

#path('', views.index)