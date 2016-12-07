var gulp                    = require('gulp'),
twig                        = require('gulp-twig');

module.exports              = function() {
  // run the Twig template parser on all .html files in the "src" directory
  return gulp.src('./src/templates/*.html')
  .pipe(twig())
  // output the rendered HTML files to the "dist" directory
  .pipe(gulp.dest('./dest/'));
};

module.exports.dependencies = [ 'remove', 'build:jade' ];
