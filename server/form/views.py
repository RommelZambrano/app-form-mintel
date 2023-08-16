import pandas as pd # Librería para leer archivos excel
from rest_framework.response import Response # Librería para manejar las respuestas
from rest_framework import status # Librería para manejar los códigos de estado HTTP
from rest_framework.decorators import api_view # Decorador para las vistas basadas en funciones
from rest_framework import viewsets # Librería para las vistas basadas en clases
from .serializer import FormSerializer # Importa el serializador
from .models import Form # Importa el modelo

# Create your views here.
class FormView(viewsets.ModelViewSet): # Define la vista basada en clases
    serializer_class = FormSerializer # Define el serializador
    queryset = Form.objects.all() # Define el queryset

@api_view(['POST']) # Define el método HTTP
def load_data(request): # Define la vista basada en funciones
    archivo = request.FILES.get('archivo') # Obtiene el archivo del request
    if archivo: # Verifica que se haya proporcionado un archivo
        excel_data = pd.read_excel(archivo) # Lee el archivo
        registros_creados = 0  
        for indice, fila in excel_data.iterrows(): # Itera sobre cada fila del archivo
            form_data = {
                'ruc': fila['RUC OPERADOR POSTAL'], 
                'razon_social': fila['RAZON SOCIAL'],  
                'email': fila['CORREO ELECTRONICO'],
                'representante_legal': fila['REPRESENTANTE LEGAL'],
                'telefono_celular': fila['TELEFONO CELULAR'],
                'telefono_fijo': fila['TELEFONO FIJO'],
            }
            serializer = FormSerializer(data=form_data)
            if serializer.is_valid():
                serializer.save() # Crea el registro en la base de datos
                registros_creados += 1  # Contador de registros creados         
        return Response({'message': f'Se cargaron {registros_creados} registros exitosamente'}, status=status.HTTP_201_CREATED) # Retorna la respuesta
    else:
        return Response({'error': 'No se proporcionó ningún archivo'}, status=status.HTTP_400_BAD_REQUEST) # Retorna la respuesta

@api_view(['GET']) # Define el método HTTP
def get_data(request): # Define la vista basada en funciones
    ruc = request.GET.get('ruc') # Obtiene el ruc del request
    if ruc: # Verifica que se haya proporcionado un ruc
        form = Form.objects.filter(ruc=ruc).first() # Obtiene el registro de la base de datos
        if form: # Verifica que se haya encontrado el registro
            serializer = FormSerializer(form) # Serializa el registro
            return Response(serializer.data, status=status.HTTP_200_OK) # Retorna la respuesta
        else:
            return Response({'error': 'No se encontró el registro'}, status=status.HTTP_404_NOT_FOUND) # Retorna la respuesta
    else:
        return Response({'error': 'No se proporcionó el ruc'}, status=status.HTTP_400_BAD_REQUEST)
    
