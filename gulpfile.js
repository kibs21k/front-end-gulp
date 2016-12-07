'use strict';
var fs         = require('fs'),
gulp           = require('gulp'),
htmlmin        = require('gulp-htmlmin');

require('gulp-task-loader-recursive')(gulp);


gulp.task('default', ['remove', 'build:images','build:fonts', 'build:sprite', 'build:javaScript']);
