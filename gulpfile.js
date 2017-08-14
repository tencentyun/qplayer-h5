const gulp = require('gulp')
const uglify = require('gulp-uglify');
const browserify = require('browserify')
const source = require("vinyl-source-stream")
const streamify = require('gulp-streamify')
const watchify = require('watchify')
const _ = require('lodash')

gulp.task('build', ['build-normal', 'build-min'], function () {
})


var bundlerNormal = browserify('./src/qplayer.js', {
  standalone: 'QPlayer',
  cache: {},
  packageCache: {},
  plugin: [watchify]
}).transform("babelify", {presets: ["es2015"], plugins: ['add-module-exports']})


function bundleNormal() {
  return bundlerNormal
    .bundle()
    .pipe(source('qplayer.js'))
    .pipe(gulp.dest('./dist'))
}
gulp.task('build-normal', bundleNormal)


var bundlerMin = browserify('./src/qplayer.js', {
  standalone: 'QPlayer',
  cache: {},
  packageCache: {},
  plugin: [watchify]
}).transform("babelify", {presets: ["es2015"], plugins: ['add-module-exports']})
function bundleMin() {
  return bundlerMin
    .bundle()
    .pipe(source('qplayer.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist'))
}
gulp.task('build-min', bundleMin)

gulp.task('watch', function() {
  bundleNormal()
  bundleMin()

  bundlerNormal.on('update', bundleNormal);
  // bundleMin 太耗费cpu了，所以推后
  bundlerMin.on('update', _.debounce(bundleMin, 5 * 1000))
});

gulp.task('default', ['build', 'watch']);
