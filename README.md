![intro](https://user-images.githubusercontent.com/114018277/213886795-204b62e1-a7cf-42c3-92d1-f007f8b6f161.png)
# Markdown Links

***

## 1. INTRO

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Se nos planteo el reto de realizar una herramienta (mediante el uso de NODE.JS) que pudiera identificar y leer archivos .md para extraer los links que se encuentran e ellos, a su vez fuera capaz de validarlos y obtener algunas estadísticas como: link rotos, cantidad de links unicos, total de links en el archivo, etc. 

**md-Links** no solo es capaz de leer archivos, también si lo deseas puedes pasarle la ruta a una carpeta y este se encargara de localizar los archivos .md que existan dentro y leerlos para extraer los links. 

A continuación se coloca el diagrama de flujo de como trabaja md-Links:

![diagrama-flujo-01](https://user-images.githubusercontent.com/114018277/214339176-4ddaced7-242d-407c-90ea-5115efb0e1fd.png)


## 2. ¿CÓMO INSTALARLO?

En tu terminal coloca el comando ***`npm install karlaCRM/md-links-KarlaCRM`***
Una vez instalado:

* 1. En tu terminal escribe : ***`md-Links`***
Aparecerá la lista de comandos que puedes utilizar

* 2. md-Links está diseñado para buscar links en archivos MARKDOWN tanto colocandole la ruta a un archivo especifíco como colocando la ruta a un directorio.

* 3. En tu terminal escribe : ***`md-Links rutaDelArchivo/archivo`***, por ejemplo si tuvieras un archivo llamado "readme.md en una carpera llamada "pruebas" el comando sería md-Links pruebas/readme.md , da enter y la lista de links aparecerá. :)

* 4. Si deseas válidar cada link, saber su status escribe el comando **--validate**: ***`md-Links rutaDelArchivo/archivo --validate`***
* 
* 5. Si deseas saber cuantos links hay en la ruta que colocaste y cuantos links únicos escribe el comando **--stats**: ***`md-Links rutaDelArchivo/archivo --stats`***
* 
* 6. Si deseas validar los links para saber su **status**, y obtener el **total de links**, cuantos hay **únicos y cuantos rotos** escribe el comando **--stats**:  ***`md-Links rutaDelArchivo/archivo --validate --stats`***
* 
* 7. Si tienes alguna duda y necesitas volver a revisar los comandos escribe: **--help**:  ***`md-Links --help`***





