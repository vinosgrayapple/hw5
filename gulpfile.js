'use strict';

var gulp=require('gulp');
var sass=require('gulp-sass');
var cleanCSS=require('gulp-clean-css');

gulp.task('minify-css', function() {
    return gulp.src('css/source/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('css/'));
});


gulp.task('sass', function() {
	gulp.src('./sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css/source'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./sass/**/*.sass', ['sass', 'minify-css']);

});
gulp.task('default',['sass:watch'], function() {
    // content
});
