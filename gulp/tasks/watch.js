module.exports = function () {
    $.gulp.task('watch', function() {
        $.gulp.watch('app/**/*.html', $.gulp.series('html'))
        $.gulp.watch('app/static/stylus/**/*.styl', $.gulp.series('stylus'))
    })
}

