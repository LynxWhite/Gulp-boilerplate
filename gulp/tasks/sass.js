module.exports = function () {
    $.gulp.task('sass', function() {
        return $.gulp.src('app/static/sass/**/*.sass')
        .pipe($.sass())
        .pipe($.csso())
        .pipe($.gulp.dest('app/static/css'))
    })
}

