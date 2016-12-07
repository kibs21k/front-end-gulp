var gulp = require('gulp'),
coffee = require('gulp-coffee'),
gutil = require('gulp-util'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
sourcemaps = require('gulp-sourcemaps');

module.exports            = function() {

  gulp.src('src/js/**/*.{js,coffee}')
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true})
    .on('error', gutil.log))
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dest/js'))
    .pipe(browserSync.stream());
};

module.exports.dependencies = [ 'remove' ];
