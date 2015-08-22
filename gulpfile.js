var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsxhint = require('jshint-jsx').JSXHINT;
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon')

gulp.task('lint:server', function() {
  return gulp.src('./server.js')
    .pipe(plumber())
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('nodemon', function() {
  return nodemon({
    script: './server.js',
    ignore: ['./app/**/']
  })
    .on('restart', function() {
      console.log('server restarting...');
    });
});

gulp.task('watch', function() {
  gulp.watch('./server.js', ['lint:server']);
});

gulp.task('default', ['watch']);
