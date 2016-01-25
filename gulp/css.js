/**
 * Created by Tigjer on 1/19/16.
 */
var gulp = require('gulp')
var stylus = require('gulp-stylus')


gulp.task('css', function (){
    gulp.src('css/**/*.styl')
        .pipe(gulp.dest('assets'))
})

gulp.task('watch:css', ['css'], function (){
    gulp.watch('css/**/*.styl', ['css'])
})