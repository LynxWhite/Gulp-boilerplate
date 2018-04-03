'use strict'

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      stylus = require('gulp-stylus'),
      csso  = require('gulp-csso'),
      autoprefixer = require('gulp-autoprefixer'),
      notify = require('gulp-notify'),
      sourcemaps = require('gulp-sourcemaps'),
      browserSync = require('browser-sync').create();


// csso - минификация css
// autoprefixer - дописывает префиксы для разных версий браузеров
// notify - обработка ошибок

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
})

gulp.task('sass', function() {
    return gulp.src('app/static/sass/**/*.sass')
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('app/static/css'))
})

gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
    .on('end', browserSync.reload)
})

gulp.task('stylus', function() {
    return gulp.src('app/static/stylus/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer({
        browsers: ['last 10 versions']
    }))
    .on('error', notify.onError({
        message: 'Error: <%= error.message %>',
        tittle: "Error running stylus task"
    }))
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/static/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
})

gulp.task('watch', function() {
    gulp.watch('app/**/*.html', gulp.series('html'))
    gulp.watch('app/static/stylus/**/*.styl', gulp.series('stylus'))
})

gulp.task('default', gulp.series(
    gulp.parallel('html', 'stylus'),
    gulp.parallel('watch', 'server')
))