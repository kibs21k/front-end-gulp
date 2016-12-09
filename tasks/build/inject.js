var gulp                    = require('gulp'),
inject                      = require('gulp-inject');

module.exports              = function() {

  var target                = gulp.src('./dest/index.html');
  // It's not necessary to read the files (will speed up things), we're only
  // after their paths:
  var sources               = gulp.src(['./dest/js/app-*.js',
  './dest/css/app-*.css'], {read: false});

  return target.pipe(inject(sources, { ignorePath: 'dest/', addRootSlash: false
}))
  .pipe(gulp.dest('./dest'));

};

module.exports.dependencies = [ 'remove', 'build:twig', 'build:css',
'build:javaScript', 'build:concat', 'build:cache', 'build:bower' ];
