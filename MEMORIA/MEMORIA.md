### Configuración de la estructura del proyecto
* Crear directorio de proyecto `$ mkdir exsys`, ingresar en el `$ cd exsys`
* Ejecutar yeoman con el nombre del proyecto y el generador `$ yo angular exsys`
* La configuracion de yeoman se muestra a continuacion:

![Imagen de configuracion yeoman](/MEMORIA/config_yeoman.png)

### Agregar las dependencias necesarias para la authentication con auth0
- `$ bower install -S angular-material`
- `$ bower install -S angular-aria`
- `$ bower install -S angular-messages`
- `$ bower install -S angular-animate`
- `$ bower install -S angular-ui-router`
- `$ bower install -S angular-jwt`

#### Dependencias de auth0

- `$ bower install -S a0-angular-storage`
- `$ bower install -S auth0-angular`

### Crear los siguientes archivos, el contenido esta vinculado a la siguiente [documentación](https://www.udemy.com/angularjs-authentication-with-auth0/learn/v4/t/lecture/4852360?start=240)

~~~
$ yo angular:view home.tpl
   create app/views/home.tpl.html
$ yo angular:view profile.tpl
   create app/views/profile.tpl.html
$ yo angular:controller profile.ctr
   create app/scripts/controllers/profile.ctr.js
   create test/spec/controllers/profile.ctr.js
$ yo angular:view toolbar.tpl
   create app/views/toolbar.tpl.html
$ yo angular:directive toolbar.dir
   create app/scripts/directives/toolbar.dir.js
   create test/spec/directives/toolbar.dir.js
~~~













app                 backend

app                 views es frontend

janderbars

vicore.server.view.html todo lo de vicores

all.js           todas las librerias

dis              archivos de distribucion

core casi todas las ventanas de vimesys
