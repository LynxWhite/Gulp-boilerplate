module.exports = function () {
    $.gulp.task('watch', function() {
        $.gulp.watch('app/**/*.html', $.gulp.series(['html']))
        $.gulp.watch('app/styles/**/*.styl', $.gulp.series(['stylus']))
        $.gulp.watch('app/images/icons/**/*.svg', $.gulp.series(['svg']))
        $.gulp.watch(['app/js/**/*.js'], $.gulp.series(['scripts']))
        $.gulp.watch(['app/fonts/**/*.{eot, ttf, woff}'], $.gulp.series(['fonts']))
        $.gulp.watch(["app/images/**/*.{jpg,jpeg,png,gif}", "!app/images/svg/icons/*", "!app/images/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
    })
}

