const gulp = require('gulp')
const uglify = require('gulp-uglify');
const browserify = require('browserify')
const source = require("vinyl-source-stream")
const streamify = require('gulp-streamify')

gulp.task('build', ['build-normal', 'build-min'], function () {
})

gulp.task('build-normal', function () {
  return browserify('./src/qplayer.js', {
    standalone: 'QPlayer',
  }).transform("babelify", {presets: ["es2015"], plugins: ['add-module-exports']})
    .bundle()
    .pipe(source('qplayer.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build-min', function () {
  return browserify('./src/qplayer.js', {
    standalone: 'QPlayer',
  }).transform("babelify", {presets: ["es2015"], plugins: ['add-module-exports']})
    .bundle()
    .pipe(source('qplayer.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function() {

  gulp.watch(['src/**/*.js'], ['build']);
});

gulp.task('default', ['build', 'watch']);
