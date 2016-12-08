var gulp                    = require('gulp'),
wiredep                     = require('wiredep').stream;

module.exports              = function() {
   gulp.src('dest/*.html')
     .pipe(wiredep())
     .pipe(gulp.dest('dest'));
};

module.exports.dependencies = [ 'remove', 'build:css' ];
