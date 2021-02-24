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
Primero carguemos pandas.

```py
# Importamos Pandas
import pandas as pd
```

Comenzaremos creando un set de datos (dataset) que nos servirá como ejemplo

```py
autos = {'Marca': ['Honda Civic','Toyota Corolla','Ford Focus','Audi A4'],
        'Precio': [22000,25000,27000,35000],
        'Kilometraje': [230,120,34]
        }

df = pd.DataFrame(autos, columns = ['Marca', 'Precio','Kilometraje])
```

Y obtendremos una tabla de forma:

| Marca         | Precio       | Kilometraje     |
| :-------------|:-------------|:----------------|
| Honda Civic   | 22000        |             230 |
| Toyota Corolla| 25000        |             120 |
| Ford Focus    | 27000        |              34 |