---
title: '¿Cómo renombrar columnas con Python?'
description: Aprende a renombrar columnas fácilmente usando Python y pandas.
date: '2021-02-23'
modified_date: '2021-02-23'
image: /assets/images/posts/img-1.jpg
---

Una de las dudas más comunes cuando comenzamos a utilizar Python (y tal vez pandas) para Ciencia de Datos, es ¿Cómo puedo interactuar con mis datos? ¿como puedo cambiar el nombre de las columnas de un archivo de Excel?

En esta publicación, veremos

* ¿Cómo cambiar el nombre de las columnas de pandas dataframe?
* ¿Cómo cambiar los nombres de fila o los índices de fila de un marco de datos de pandas?

Empezaremos utilizando una de las librerías mas populares para manipulación de datos en Python: [Pandas](https://pandas.pydata.org)
 
Primero carguemos pandas. (Si no sabes como instalar pandas, dale un vistazo a nuestro artículo “¿Cómo instalar Jupyter Notebook? Para una guía detallada de cómo configurar tu ambiente de desarrollo)

```py
# Importamos Pandas
import pandas as pd
```

Comenzaremos creando un set de datos (dataset) que nos servirá como ejemplo

```py
autos = {'Marca': ['Honda Civic','Toyota Corolla','Ford Focus','Audi A4'],
        'Precio': [22000,25000,27000,35000],
        'Kilometraje': [230,120,34,24]
        }

df = pd.DataFrame(autos, columns = ['Marca', 'Precio','Kilometraje'])
```

Y obtendremos una tabla de forma:

![image](/assets/images/posts/rename-column-1.png)

## Opción 1: usar la función “rename()”

Una forma muy práctica de renombrar las columnas de un dataframe de Pandas es haciendo uso de la función: rename()
Este metódo resulta especialmente útil ya que te permite sólo especificar información sobre las columnas que serán renombradas.

Siguiendo nuestro ejemplo anterior tendríamos:

### Para cambiar el nombre una sola columna
```py
df.rename(columns = {"Marca":"Marca del Auto"}, inplace = True)
```

Lo que nos daría como resultado una tabla de esta forma:

### Para cambiar el nombre de múltiples columnas
```py
df.rename(columns = {"Marca":"Marca del Auto", "Precio":"Precio del Auto"}, inplace = True)
```

Lo que nos daría una tabla de la forma:

## Opción 2: Asignar una lista de nombres de columnas

Otra forma de cambiar el nombre de las columnas es asignándoles una lista que contenga los nuevos nombres a utilizar por el dataframe, la desventaja de este método es que tienes que proveer nombres nuevos para todas las columnas del dataframe incluso si sólo quieres cambiarle el nombre a alguna de las columnas.

Ahora siguiendo nuestro ejemplo anterior tendríamos,
### Para cambiar el nombre de todas las columnas usando una lista de nombres 
```py
df.columns = ["Marca del Auto", "Precio del Auto", "Kilometraje del Auto"]
```

Lo que nos daría una tabla de la forma

