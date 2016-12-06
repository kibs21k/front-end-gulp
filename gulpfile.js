'use strict';
var fs         = require('fs'),
gulp           = require('gulp');

require('gulp-task-loader-recursive')(gulp);


gulp.task('default', ['remove']);
