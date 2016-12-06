var gulp       = require('gulp'),
del = require('del');

module.exports = function() {

  return del([
    'dist/css',
    'dist/fonts',
    'dist/images',
    'dist/js',
    'dist/index.html',
    // we don't want to clean this file though so we negate the pattern
    // '!dist/mobile/deploy.json'
  ]);
};
