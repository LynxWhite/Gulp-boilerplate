module.exports = function () {
    $.gulp.task('stylus', function() {
        return $.gulp.src('app/static/stylus/main.styl')
        .pipe($.sourcemaps.init())
        .pipe($.stylus({
            'include css': true
        }))
        .pipe($.autoprefixer({
            browsers: ['last 15 versions']
        }))
        .on('error', $.notify.onError({
            message: 'Error: <%= error.message %>',
            tittle: "Error running stylus task"
        }))
        .pipe($.csso())
        .pipe($.sourcemaps.write())
        .pipe($.gulp.dest('dist/static/css'))
        .pipe($.browserSync.reload({
            stream: true
        }))
    })
}

