module.exports = function() {
    $.gulp.task("images", function() {
        return $.gulp.src(["./app/images/**/*.{jpg,jpeg,png,gif}", "!./app/images/svg/icons/*", "!./app/images/favicons/*.{jpg,jpeg,png,gif}"])
            .pipe($.newer("dist/images"))
            .pipe($.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imagemin.jpegtran({progressive: true}),
                $.imageminJpegRecompress({loops: 1, quality: "low"}),
                $.imagemin.svgo(),
                $.imagemin.optipng({optimizationLevel: 5}),
                $.pngquant({quality: "65-70", speed: 5})
            ]))
            .pipe($.gulp.dest("dist/images"))
            .on("end", $.browserSync.reload)
    });
};