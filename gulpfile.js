var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var react = require('gulp-react');

gulp.task('lint', () => {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(react())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['lint']);
