import tkinter as tk
from db import get_db_connection

# Crear la ventana del formulario
root = tk.Tk()

# Crear las etiquetas y campos de texto para cada entrada de datos
labels = ['ID', 'RUC', 'Razon Social', 'Email', 'Tlf. Celular', 'Representante Legal', 'Fecha de Emisión']
entries = {}

for label in labels:
    row = tk.Frame(root)
    row.pack(side=tk.TOP, fill=tk.X, padx=5, pady=5)
    tk.Label(row, text=label, width=20, anchor='w').pack(side=tk.LEFT)
    entries[label] = tk.Entry(row)
    entries[label].pack(side=tk.RIGHT, expand=tk.YES, fill=tk.X)

# Función para guardar los datos en la base de datos
def guardar_datos():
    # Conectarse a la base de datos
    conn = get_db_connection()

    cursor = conn.cursor()

    # Crear la consulta de inserción
    query = f"INSERT INTO ControlPostal VALUES (?, ?, ?, ?, ?, ?, ?)"

    # Extraer los datos del formulario
    data = [entries[label].get() for label in labels]

    # Ejecutar la consulta
    cursor.execute(query, data)

    # Hacer commit de la transacción
    conn.commit()

    # Cerrar la conexión
    conn.close()

# Crear el botón para guardar los datos
tk.Button(root, text='Guardar', command=guardar_datos).pack(side=tk.LEFT)

# Ejecutar la aplicación
root.mainloop()
