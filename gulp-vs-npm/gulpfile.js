const gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', () => {
	return gulp
		.src( './style.scss' )
		.pipe( sass() )
		.pipe( gulp.dest('./') )
});

gulp.task('default', ['sass'], () => {
	gulp.watch('./style.scss', ['sass'])
})