from django.shortcuts import render
import matplotlib.pyplot as plt 
import base64
from io import BytesIO

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from frontend.models import Review
from frontend.serializers import ReviewSerializer
from rest_framework.decorators import api_view
from django.http import HttpResponse
from .models import Review

#Jack
import numpy as np
import pandas as pd
import datetime as dt
from matplotlib.ticker import FuncFormatter
import matplotlib.style as style
style.use('fivethirtyeight')
# Create your views here.
#def index(request):
   # qs = Review.object.all()
   # return render(request, 'frontend/index.html', {})


@api_view(['GET', 'POST', 'DELETE'])
def review_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials

    if request.method == 'GET':
        reviews = Review.objects.all()
        
        Date = request.GET.get('Date', None)
        if Date is not None:
            reviews = reviews.filter(Date__icontains=Date)
        
        reviews_serializer = ReviewSerializer(reviews, many=True)
        return JsonResponse(reviews_serializer.data, safe=False)
        # 'safe=False' for objects serialization


    elif request.method == 'POST':
        review_data = JSONParser().parse(request)
        review_serializer = ReviewSerializer(data=review_data)
        if review_serializer.is_valid():
            review_serializer.save()
            return JsonResponse(review_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
    elif request.method == 'DELETE':
        count = Review.objects.all().delete()
    return JsonResponse({'message': '{} Reviews  were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

#def graph(request):
#    if request.method == 'GET':
#        qs = Review.objects.all()
#        x = [x.Date for x in qs]
#        y = [y.P1 for y in qs]
#        z = [z.P2 for z in qs]
#        chart = get_plot(x, y)
#        return render(request,'frontend/index.html', {'chart': chart})
#        #return chart

#Jack
def graph(request):
    if request.method == 'GET':
        #reviews = Review.objects.all()
        #Date = request.GET.get('Date', None)
        #if Date is not None:
        #    reviews = reviews.filter(Date__icontains=Date)
        #reviews_serializer = ReviewSerializer(reviews, many=True)


        qs = Review.objects.all()
        x = [x.Date for x in qs]
        y = [y.P1 for y in qs]
        z = [z.P2 for z in qs]
        a = [a.P3 for a in qs]
        b = [b.P4 for b in qs]
        c = [c.P5 for c in qs]
        d = [d.P6 for d in qs]
        e = [e.P7 for e in qs]

        data = pd.DataFrame()
        data['Date'] = x
        data['P1'] = y
        data['P2'] = z
        data['P3'] = a
        data['P4'] = b
        data['P5'] = c
        data['P6'] = d
        data['P7'] = e
     
        data['P1'] = data['P1'].astype(float)
        data['P2'] = data['P2'].astype(float)
        data['P3'] = data['P3'].astype(float)
        data['P4'] = data['P4'].astype(float)
        data['P5'] = data['P5'].astype(float)
        data['P6'] = data['P6'].astype(float)
        data['P7'] = data['P7'].astype(float)

        data['Date'] = pd.to_datetime(data['Date'])
        #data.set_index('Date')
        #data.sort_values(by=data['Date'])

        #data = data/data.iloc[0]*100
        #chart = get_plot(data)
        chart = get_plot(data['Date'],data[['P1','P2','P3','P4','P5','P6','P7']])
        return render(request,'frontend/index.html', {'chart': chart})
        #return chart

def get_graph():
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    image_png = buffer.getvalue()
    graph = base64.b64encode(image_png)
    graph = graph.decode('utf-8')
    buffer.close()
    return graph

#Jack
#def get_plot(x):
#    plt.switch_backend('AGG')
#    plt.figure(figsize=(10,5))
#    plt.plot(x)
#    #x.plot(figsize=(10,7.5), lw=3);
#    #ax.grid(which='major', axis='y', linestyle='-', linewidth=0.2, c='grey')
#    #ax.legend(loc='upper left')
#    #ax.xaxis.label.set_visible(False)
#    #ax.axhline(y = 100, color = 'black', linewidth = 1.3, alpha = 1)
#    #plt.xlim(xmin=data.index[0])
#    plt.xticks(rotation=45)
#    plt.tight_layout()
#    graph = get_graph()
#    #plt.close()
#    return graph()
    

def get_plot(x,y):
    plt.switch_backend('AGG')
    plt.figure(figsize=(12.5,7.5))
    plt.title('Portfolio Performance')
    plt.plot(x,y,lw = 2)
    plt.xticks(rotation=45)
    plt.xlabel('Date')
    plt.ylabel('Total Return Index')
    #plt.legend(loc='upper left')
    #plt.xlim(xmin=x[0])
    plt.axhline(y = 100, color = 'black', linewidth = 1.3, alpha = 1)
    plt.tight_layout()
    graph = get_graph()
    return graph