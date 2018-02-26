# Iniciar Proyecto FrontEnd con Gulp


Requiere Instalar  [Node.js](https://nodejs.org/es/)

Comprobar Instalación:  `$ npm -v` ,  `$ node -v`.

#### 1. Instalar Gulp globalmente:
```sh
$ npm install --global gulp-cli
```

#### 2. Iniciar proyecto con NPM
En la carpeta del proyecto ejecutamos:
```sh
$ npm init 
```
Se creará un archivo package.json

```js
{
  "name": "core-frontend-gulp",
  "version": "1.0.0",
  "description": "Frontend Environment con gulp",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jorge Callalle",
  "license": "ISC",
}
```


#### 3. Instalar Gulp localmente:
```sh
$ npm install gulp --save-dev
```
Se crea automaticamente un directorio **node_modules**

Comprobar Instalación:  `$ gulp -v `.

Se agrega automaticamente la linea en package.json: **devDependencies** 

```js
{
  "name": "core-frontend-gulp",
  "version": "1.0.0",
  "description": "Frontend Environment con gulp",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jorge Callalle",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^3.9.1"
  }
}
```

#### 4. Iniciar un proyecto Gulp, creamos `gulpfile.js` en el proyecto local:


```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
  console.log('hola mundo');
});
```


#### 5. Ejecutamos Gulp:

```sh
$ gulp
```

Por default se ejecutará la tarea.




#### 6.  Gulp Sass:

```sh
$npm install gulp-sass --save-dev
```

```js
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
  console.log('hola mundo');
});

gulp.task('sass', function(){
   return gulp.src('scss/main.scss')
       .pipe(sass())
       .pipe(gulp.dest('../site/css'))
});
```






