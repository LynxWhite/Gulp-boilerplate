module.exports = function () {
    $.gulp.task('scripts:lib', function() {
        // return $.gulp.src(['node_modules/plugin.min.js'])
        return $.gulp.src([])
        .pipe($.concat('libs.min.js'))
        .pipe($.gulp.dest('dist/static/js'))
        .pipe($.browserSync.reload({
            stream: true
        }))
    })

    $.gulp.task('scripts', function() {
        return $.gulp.src('app/static/js/**/*.js')
        .pipe($.gulp.dest('dist/static/js'))
        .pipe($.browserSync.reload({
            stream: true
        }))
    })
}

