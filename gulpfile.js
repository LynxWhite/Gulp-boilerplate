'use strict'

global.$ = {
    gulp: require('gulp'),
    sass: require('gulp-sass'),
    stylus: require('gulp-stylus'),
    csso : require('gulp-csso'),
    autoprefixer: require('gulp-autoprefixer'),
    notify: require('gulp-notify'),
    sourcemaps: require('gulp-sourcemaps'),
    concat: require('gulp-concat'),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)()
})

// csso - минификация css
// autoprefixer - дописывает префиксы для разных версий браузеров
// notify - обработка ошибок

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('html', 'stylus', 'scripts', 'scripts:lib'),
    $.gulp.parallel('watch', 'server')
))