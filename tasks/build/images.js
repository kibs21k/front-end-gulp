var gulp       = require('gulp'),
imagemin       = require('gulp-imagemin');

module.exports = function() {
    gulp.src('src/images/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('dest/images'))
};
