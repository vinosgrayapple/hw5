'use strict';

var gulp=require('gulp');
var sass=require('gulp-sass');
var cleanCSS=require('gulp-clean-css');
var browserSync=require('browser-sync').create();
var reload=browserSync.reload;

gulp.task('minify-css', function() {
    return gulp.src('css/source/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
	gulp.src('./sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css/source'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function() {
	gulp.watch('./sass/**/*.sass', ['sass', ,'browser-sync']);

});
gulp.task('serve', ['sass','minify-css'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/*.sass", ['sass', 'minify-css']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default',['serve']);
