var gulp                    = require('gulp'),
rev                         = require('gulp-rev'),
concat                      = require('gulp-concat'),
rev                         = require('gulp-rev'),
csso                        = require('gulp-csso');

module.exports              = function () {

gulp.src('dest/css/*.css', {base: 'dest'})
  .pipe(csso())
  .pipe(concat('app.css'))
  .pipe(gulp.dest('dest/css'))
  .pipe(rev())
  .pipe(gulp.dest('dest/css'))
  .pipe(rev.manifest('dest/rev-manifest.json', {
      base: 'dest/',
      merge: true // merge with the existing manifest (if one exists)
  }))
    .pipe(gulp.dest('dest/'))
};

module.exports.dependencies = ['build:css'];
