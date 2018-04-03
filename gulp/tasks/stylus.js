module.exports = function () {
    $.gulp.task('stylus', function() {
        return $.gulp.src('app/styles/main.styl')
        .pipe($.sourcemaps.init())
        .pipe($.stylus({
            'include css': true
        }))
        .pipe($.rename({ suffix: '.min', prefix : '' }))
        .pipe($.autoprefixer({
            browsers: ['last 15 versions']
        }))
        .pipe($.cleancss({level: { 1: { specialComments: 0 }}}))
        .pipe($.sourcemaps.write())
        .pipe($.gulp.dest('dist/styles/'))
        .pipe($.browserSync.reload({
            stream: true
        }))
    })
}

