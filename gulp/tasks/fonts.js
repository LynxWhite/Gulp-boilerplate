module.exports = function() {
    $.gulp.task("fonts", function() {
        return $.gulp.src("app/fonts/**/*.{eot, ttf, woff}")
        .pipe($.gulp.dest("dist/fonts"))
        .pipe($.browserSync.reload({
            stream: true
        }))
    });
};