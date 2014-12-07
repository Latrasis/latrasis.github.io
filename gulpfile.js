// Require Gulp
var gulp = require('gulp'),

	// Require Dependencies
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer'),
	gutil = require('gulp-util'),
	markdown = require('gulp-markdown-to-json');

gulp.task('webserver', function() {
	connect.server({
		port: 9000,
		livereload: true
	});
});

gulp.task('styles', function() {
	return gulp.src('sass/*.scss')
		.pipe(sass({
			errLogToConsole: true,
			style: 'expanded'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('css'));
});

gulp.task('markdown', function(){
  gulp.src('./blog/posts/*.md')
    .pipe(gutil.buffer())
    .pipe(markdown('blog.json'))
    .pipe(gulp.dest('./blog'))
});

gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('./blog/posts/*.md',['markdown']);
});


gulp.task('default', ['webserver', 'watch', 'styles','markdown']);