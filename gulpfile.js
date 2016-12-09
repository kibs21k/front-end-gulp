'use strict';
var fs      = require('fs'),
gulp        = require('gulp'),
browserSync = require('browser-sync').create();

require('gulp-task-loader-recursive')(gulp);


gulp.task('watch', ['build:css'] ,function () {
// Static Server + watching scss/html files
    browserSync.init({
        server: "./dest"
    });

    gulp.watch('./src/scss/**/*.scss', ['build:css','build:concat',
'build:inject',
'build:bower'])
    gulp.watch('./src/templates/**/*.jade', ['build:jade',
'build:inject'])
    gulp.watch('./src/templates/**/*.html', ['build:twig'])
    gulp.watch('./dest/*.html').on('change', browserSync.reload)
});

gulp.task('default', ['remove', 'build:images','build:fonts', 'build:sprite',
'build:javaScript', 'build:css', 'build:jade', 'build:twig', 'build:inject',
'build:bower', 'watch']);
