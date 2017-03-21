const gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	//uncss = require('gulp-uncss'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

//tarea para iniciar el servidor proxy y observar cambios
gulp.task('browser-sync', () => {
	let files = [
		'./**/*.css',
		'./**/*.js',
		'./**/*.php'
	];

	browserSync.init(files, {
		proxy: 'localhost/dogs/',
		notify: false
	});
});

//tarea scss
gulp.task('scss', () => {
	return gulp
			.src( './scss/**/*.scss' )
			.pipe( sass() )
			.pipe( gulp.dest('./css') )
			.pipe( reload( {stream:true} ) );
});

//tarea css
gulp.task('css', () => {
	return gulp
		.src( './css/**/*.css' )
		.pipe( concat( 'style.css' ) )
		.pipe( gulp.dest('./') )
		.pipe( reload( {stream:true} ) );
});

//tarea js
gulp.task('js', () => {
	return gulp
		.src( './js/**/*.js' )
		.pipe( concat( 'script.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( './' ) )
		.pipe( reload( {stream:true} ) );
});

//tarea para optimizar el css
gulp.task('cssoptim', () => {
	return gulp
		.src( 'style.css' )
		//.pipe( uncss( {html : ['./**/*.php']} ) )
		.pipe( autoprefixer( {browsers : ['> 5%', 'ie 10'], cascade : false} ) )
		.pipe( cleanCSS() )
		.pipe( gulp.dest('./') );
});

//tarea default para correr gulp
gulp.task('default', ['scss', 'css', 'js', 'browser-sync'], () => {
	gulp.watch('./scss/**/*.scss', ['scss']);
	gulp.watch('./css/**/*.css', ['css']);
	gulp.watch('./js/**/*.js', ['js']);
});