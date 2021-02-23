---
title: 'renombrar columnas '
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
date: '2020-08-08'
modified_date: '2020-08-08'
image: /assets/images/posts/random-img.jpg
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
        'Precio': [22000,25000,27000,35000]
        }

df = pd.DataFrame(autos, columns = ['Marca', 'Precio'])
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |