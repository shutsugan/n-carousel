'use strict';

const gulp = require('gulp');
const minifyCss = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const svgmin = require('gulp-svgmin');

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

gulp.task('svg', _ => {
	return gulp.src('src/**/*.svg')
		.pipe(svgmin)
		.pipe(gulp.dest('build/svg'));
});

gulp.task('default', ['css', 'js', 'svg']);