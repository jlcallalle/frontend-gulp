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


