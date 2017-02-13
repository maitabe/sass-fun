//gulp is an automation tool built for automatic tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var install = require('gulp-install');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('sass', function () {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('sass'));
});

gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
});

gulp.task('install', function () {
  gulp.src(['./package.json'])
  .pipe(install());
});

gulp.task('default', ['install', 'sass:watch', 'connect']);