var gulp       = require('gulp'),
  flatten      = require('gulp-flatten');

module.exports = function() {

  gulp.src('src/fonts/**/*.{ttf,woff,eot,svg}')
    .pipe(flatten())
    .pipe(gulp.dest('dest/fonts'))

};

module.exports.dependencies = [ 'remove' ];
