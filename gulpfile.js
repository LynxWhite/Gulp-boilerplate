'use strict'

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      stylus = require('gulp-stylus'),
      csso  = require('gulp-csso')

gulp.task('sass', function() {
    return gulp.src('app/static/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/static/css'))
})

gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('stylus', function() {
    return gulp.src('app/static/stylus/main.styl')
    .pipe(stylus())
    .pipe(csso())
    .pipe(gulp.dest('dist/static/css'))
})