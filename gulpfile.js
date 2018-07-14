'use strict';

const gulp = require('gulp');
const minifyCss = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('css', _ => {
	return gulp.src('src/**/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('build/css'));
});

gulp.task('js', _ => {
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'));
});

gulp.task('default', ['css', 'js']);