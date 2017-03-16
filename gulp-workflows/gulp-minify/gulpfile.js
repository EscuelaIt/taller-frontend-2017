const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	cssFiles = [
		'.css',
		'.css'
	],
	jsFiles = [
		'.js',
		'.js'
	],
	minCSS = '.min.css',
	minJS = '.min.js',
	delPaths = [
		'./css/*',
		'./img/*',
		'./img_min/*',
		'./js/*'
	];

gulp.task('css', () => {
	gulp
		.src( cssFiles )
		.pipe( concat(minCSS) )
		.pipe( minifyCss() )
		.pipe( gulp.dest('./') );
});

gulp.task('js', () => {
	gulp
		.src( jsFiles )
		.pipe( concat(minJS) )
		.pipe( uglify() )
		.pipe( gulp.dest('./') );
});

gulp.task('img', () => {
	gulp
		.src( ['./img/**'] )
		.pipe( imagemin() )
		.pipe( gulp.dest('./imgmin/') );
});

gulp.task( 'clean', () => del(delPaths) );

gulp.task('min', ['css','js','img']);