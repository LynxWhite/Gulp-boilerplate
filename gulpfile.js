'use strict'

const gulp = require('gulp'),
      sass = require('gulp-sass')

gulp.task('sass', function() {
    return gulp.src('app/static/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/static/css'))
})

gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
})