var gulp                    = require('gulp'),
twig                        = require('gulp-twig'),
browserSync                 = require('browser-sync').create();

module.exports              = function() {
  // run the Twig template parser on all .html files in the "src" directory
  return gulp.src('./src/templates/*.html')
  .pipe(twig())
  // output the rendered HTML files to the "dist" directory
  .pipe(gulp.dest('./dest/'))
  .pipe(browserSync.stream());

};

module.exports.dependencies = ['build:jade' ];
