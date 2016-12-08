var gulp       = require('gulp'),
  rev      = require('gulp-rev');

module.exports = function() {

  // by default, gulp would pick `assets/css` as the base,
      // so we need to set it explicitly:
      return gulp.src(['dest/css/app.css', 'dest/js/*.js'], {base: 'dest'})
          .pipe(gulp.dest('dest/'))
          .pipe(rev())
          .pipe(gulp.dest('dest/'))
          .pipe(rev.manifest('dest/rev-manifest.json', {
              base: 'dest/',
              merge: true // merge with the existing manifest (if one exists)
          }))
          .pipe(gulp.dest('dest/'));
};

module.exports.dependencies = [ 'build:css', 'build:concat' ];
