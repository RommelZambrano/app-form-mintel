import pyodbc

def get_db_connection():
    conn = pyodbc.connect('Driver={SQL Server};'
                          'Server=tu_servidor;'
                          'Database=tu_base_de_datos;'
                          'Trusted_Connection=yes;')
    return conn
