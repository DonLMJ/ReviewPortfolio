from rest_framework import serializers 
from frontend.models import Review
 
 
class ReviewSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Review
        fields = ('id',
                  'Date',
                  'P1',
                  'P2',
                  'P3',
                  'P4',
                  'P5',
                  'P6',
                  'P7')