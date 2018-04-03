module.exports = function () {
    $.gulp.task('svg', () => {
        return $.gulp.src('./app/static/images/**/*.svg')
            .pipe($.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill')
                    $('[stroke]').removeAttr('stroke')
                    $('[style]').removeAttr('style')
                },
                parseOptins: { xmlMode: true }
            }))
            .pipe($.replace('&gt;', '>'))
            .pipe($.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('./dist/static/images/svg/'))
            
    })
}

/*

            .pipe($.cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill')
                    $('[stroke]').removeAttr('stroke')
                    $('[style]').removeAttr('style')
                },
                parseOptins: { xmlMode: true }
            }))
            .pipe($.replace('&gt;', '>'))
            .pipe($.svgSprite)({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            })
*/