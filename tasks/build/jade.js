var gulp                    = require('gulp'),
jade                        = require('gulp-jade'),
browserSync                 = require('browser-sync').create();

module.exports              = function() {
    return gulp.src('src/templates/jade/**/*.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest('src/templates/partials/'))
    .pipe(browserSync.stream());
};

module.exports.dependencies = [ ];
