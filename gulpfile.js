var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsxhint = require('jshint-jsx').JSXHINT;
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon')
var merge = require('merge-stream');
var webpack = require('gulp-webpack');

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

gulp.task('lint:client', function() {
  return gulp.src('./app/js/**/*.jsx')
    .pipe(plumber())
    .pipe(jshint({
      node: true,
      linter: jsxhint
    }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

gulp.task('client', ['lint:client'], function() {
  var html = gulp.src('./app/**/*.html')
      .pipe(gulp.dest('./build/'));

  var build = gulp.src('./app/js/client.jsx')
      .pipe(webpack({
        module: {
          loaders: [{test: /\.jsx$/, loader: 'jsx-loader'}]
        },
        output: {
          filename: 'bundle.js'
        }
      }))
      .pipe(gulp.dest('./build/'));

  return merge(html, build);
});

gulp.task('watch', function() {
  gulp.watch('./server.js', ['lint:server']);
  gulp.watch('./app/**/*', ['client'])
});

gulp.task('default', ['client', 'watch']);
