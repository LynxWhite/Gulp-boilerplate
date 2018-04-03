module.exports = function () {
    $.gulp.task('images:png:jpg:gif:dev', function () {
        return $.gulp.src('app/static/images/**/*.{png, jpg, gif}')
        // .pipe($.tinypng('2nZNt8m8ee5v4-hLlhqKstDf7XKL_gCl'))
        .pipe($.gulp.dest('dist/static/images'))
    })

    $.gulp.task('images:png:jpg:gif:prod', function () {
        return $.gulp.src('app/static/images/**/*.{png, jpg, gif}')
        .pipe($.tinypng('2nZNt8m8ee5v4-hLlhqKstDf7XKL_gCl'))
        .pipe($.gulp.dest('dist/static/images'))
    })
}

