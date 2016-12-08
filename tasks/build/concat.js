var gulp                    = require('gulp'),
rev                         = require('gulp-rev'),
concat                      = require('gulp-concat'),
csso                        = require('gulp-csso');

module.exports              = function () {

gulp.src('dest/css/*.css')
  .pipe(csso())
  .pipe(concat('app.css'))
  .pipe(gulp.dest('dest/css'))
};

module.exports.dependencies = ['build:css'];
