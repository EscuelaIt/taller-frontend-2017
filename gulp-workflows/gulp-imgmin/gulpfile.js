const gulp = require('gulp'),
	del = require('del'),
	colors = require('colors'),
	rename = require('gulp-rename'),
	imageOptim = require('gulp-imageoptim'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	svgmin = require('gulp-svgmin'),
	svgSprite = require('gulp-svg-sprite'),
	svg2png = require('gulp-svg2png'),
	webp = require('gulp-webp'),
	imageResize = require('gulp-image-resize'),
	path = {
		src: 'src',
		sprite: 'sprite',
		dist: 'dist'
	};

gulp.task('clean', callback => {
	return del([
		path.src + '/*',
		path.dist + '/*',
		path.sprite + '/*'
		], (err, deletedFiles) => {
			console.log('Files deleted:\n'.bold.green , deletedFiles.join(',\n '));
			callback();
		});
});

gulp.task('img-src', () => {
	return gulp
		.src( path.src + '/**/*.+(png|jpg|gif|svg)' )
		.pipe(gulp.dest( path.dist ));
});

gulp.task('img-optim', ['img-src'], function() {
	return gulp
		.src( path.src + '/**/*.+(png|jpg)' )
		.pipe(imageOptim.optimize({
			imageAlpha: false,
			quitAfter: false
		}))
		.pipe(gulp.dest( path.dist ));
});

gulp.task('img-min', ['img-src'], () => {
	return gulp
		.src( path.src + '/**/*.+(png|jpg)' )
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest( path.dist ));
});

gulp.task('svg-min', ['img-src'], () => {
	return gulp
		.src( path.src + '/**/*.svg' )
		.pipe(rename({ suffix: "-svgo"}))
		.pipe(svgmin({
			plugins: [
				{convertColors: false},
				{removeAttrs: {attrs: ['fill']}}
			]
		}))
		.pipe(gulp.dest( path.dist ));
});

gulp.task('webp', ['img-src'], () => {
	return gulp
		.src( path.src + '/**/*.+(png|jpg|gif)' )
		.pipe(webp())
		.pipe(gulp.dest( path.dist ));
});

gulp.task('svg-sprite', () => {
	return gulp
		.src( path.src + '/svg/*.svg' )
		.pipe(svgmin({
			plugins: [
				{convertColors: false},
				{removeAttrs: {attrs: ['fill']}}
			]
		}))
		.pipe(svgSprite({
			dest: path.spriteDist,
			mode: {
				symbol: {
					dest: './',
					sprite: 'icons'
				}
			}
		}))
		.pipe(gulp.dest( path.sprite ));
});

gulp.task('svg-to-png', () => {
	return gulp
		.src( path.src + '/svg/*.svg' )
		.pipe(svg2png())
		.pipe(gulp.dest( path.sprite + '/png' ));
});

gulp.task('img-resize', ['img-src'], () => {
	return gulp
		.src( path.src + '/**/*.+(png|jpg)' )
		.pipe(imageResize({ 
			width : 1024,
			height : 0,
			crop : true,
			upscale : false
		}))
		.pipe(gulp.dest( path.dist ));
});