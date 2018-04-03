module.exports = function() {
    $.gulp.task("scripts", function() {
        return $.gulp.src(["app/js/**/*.js"])
            .pipe($.babel({presets: ["env"]}))
            .pipe($.uglify()) // Mifify js (opt.)
            .pipe($.rename({suffix: ".min"}))
            .pipe($.gulp.dest("dist/js/"))
            .on("end", $.browserSync.reload)
    });
};