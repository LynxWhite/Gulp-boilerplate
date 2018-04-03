module.exports = function() {
    $.gulp.task("svg", function() {
        return $.gulp.src("app/images/icons/**/*.svg")
            .pipe($.cheerio({
                run: function($) {
                    $("[fill]").removeAttr("fill");
                    $("[stroke]").removeAttr("stroke");
                    $("[style]").removeAttr("style");
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.replace("&gt;", ">"))
            .pipe($.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('./dist/images/icons/'))
            .on("end", $.browserSync.reload)
    });
};