import pandas as pd  # Librería para leer archivos excel
# Librería para manejar las respuestas
from rest_framework.response import Response
# Librería para manejar los códigos de estado HTTP
from rest_framework import status
# Decorador para las vistas basadas en funciones
from rest_framework.decorators import api_view
from rest_framework import viewsets  # Librería para las vistas basadas en clases
from .serializer import PostalOperatorSerializer, PeriodSerializer, ShipmentsNationalSerializer, YearSerializer  # Importa el serializador
from .models import T_Postal_Operator, T_Period, T_National_Shipment, T_Year  # Importa el modelo

# Create your views here.
class PostalOperatorView(viewsets.ModelViewSet):
    serializer_class = PostalOperatorSerializer
    queryset = T_Postal_Operator.objects.all()
    
class YearView(viewsets.ModelViewSet):
    serializer_class = YearSerializer
    queryset = T_Year.objects.all()

class PeriodView(viewsets.ModelViewSet):
    serializer_class = PeriodSerializer
    queryset = T_Period.objects.all()

class ShipmentNationalView(viewsets.ModelViewSet):
    serializer_class = ShipmentsNationalSerializer
    queryset = T_National_Shipment.objects.all()


@api_view(['POST'])  # Define el método HTTP
def load_data(request):  # Define la vista basada en funciones
    archivo = request.FILES.get('archivo')  # Obtiene el archivo del request
    if archivo:  # Verifica que se haya proporcionado un archivo
        excel_data = pd.read_excel(archivo)  # Lee el archivo
        registros_creados = 0
        for indice, fila in excel_data.iterrows():  # Itera sobre cada fila del archivo
            form_data = {
                'ruc': fila['RUC OPERADOR POSTAL'],
                'razon_social': fila['RAZON SOCIAL'],
                'email': fila['CORREO ELECTRONICO'],
                'representante_legal': fila['REPRESENTANTE LEGAL'],
                'telefono_celular': fila['TELEFONO CELULAR'],
                'telefono_fijo': fila['TELEFONO FIJO'],
            }
            serializer = PostalOperatorSerializer(data=form_data)
            if serializer.is_valid():
                serializer.save()  # Crea el registro en la base de datos
                registros_creados += 1  # Contador de registros creados
        # Retorna la respuesta
        return Response({'message': f'Se cargaron {registros_creados} registros exitosamente'}, status=status.HTTP_201_CREATED)
    else:
        # Retorna la respuesta
        return Response({'error': 'No se proporcionó ningún archivo'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])  # Define el método HTTP
def get_data(request):  # Define la vista basada en funciones
    ruc = request.GET.get('ruc')  # Obtiene el ruc del request
    if ruc:  # Verifica que se haya proporcionado un ruc
        # Obtiene el registro de la base de datos
        form = T_Postal_Operator.objects.filter(ruc=ruc).first()
        if form:  # Verifica que se haya encontrado el registro
            serializer = PostalOperatorSerializer(form)  # Serializa el registro
            # Retorna la respuesta
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            # Retorna la respuesta
            return Response({'error': 'No se encontró el registro'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response({'error': 'No se proporcionó el ruc'}, status=status.HTTP_400_BAD_REQUEST)
