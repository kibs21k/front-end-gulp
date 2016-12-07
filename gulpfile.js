'use strict';
var fs         = require('fs'),
gulp           = require('gulp'),
htmlmin        = require('gulp-htmlmin');

require('gulp-task-loader-recursive')(gulp);

// Inject Bower
gulp.task('bower', ['build:css'], injectBower);

function injectBower() {
  var target = gulp.src('./src/index.html');
  var js     = gulp.src(wiredep().js);
  var css    = gulp.src(wiredep().css);

  return target
  .pipe(inject(js.pipe(concat('bower.js'))
  .pipe(uglify())
  .pipe(rev())
  .pipe(gulp.dest('./dest/js'))))

  .pipe(inject(css.pipe(concat('bower.css'))
  .pipe(csso())
  .pipe(rev())
  .pipe(gulp.dest('./dest/css'))))

  .pipe(gulp.dest('./dest'));
};

gulp.task('default', ['remove', 'build:images','build:fonts', 'build:sprite', 'build:javaScript', 'build:css', 'build:jade', 'build:twig', 'build:inject']);
