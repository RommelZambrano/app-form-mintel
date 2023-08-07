from rest_framework import viewsets
from .serializer import FormSerializer
from .models import Form

# Create your views here.
class FormView(viewsets.ModelViewSet):
    serializer_class = FormSerializer
    queryset = Form.objects.all()
