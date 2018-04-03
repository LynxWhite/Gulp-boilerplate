'use strict'

global.$ = {
    gulp: require('gulp'),
    browserSync: require("browser-sync").create(),
    sourcemaps: require('gulp-sourcemaps'),
    autoprefixer: require('gulp-autoprefixer'),
    stylus: require('gulp-stylus'),
    rename: require('gulp-rename'),
    cleancss: require('gulp-clean-css'),
    imagemin: require("gulp-imagemin"),
    newer: require("gulp-newer"),
    pngquant: require("imagemin-pngquant"),
    imageminJpegRecompress: require("imagemin-jpeg-recompress"),
    replace: require("gulp-replace"),
    cheerio: require("gulp-cheerio"),
    svgSprite: require("gulp-svg-sprite"),
    babel: require("gulp-babel"),
    uglify: require("gulp-uglify"),

    path: {
        tasks: require("./gulp/config.js")
    }
}

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel("html", 'stylus', 'images', 'svg', 'scripts', 'fonts'),
    $.gulp.parallel("watch", "serve")
))