var gulp                    = require('gulp'),
jade                        = require('gulp-jade');

module.exports              = function() {
    return gulp.src('src/templates/jade/**/*.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest('src/templates/partials/'));
};

module.exports.dependencies = [ 'remove' ];
