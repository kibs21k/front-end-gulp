var gulp       = require('gulp'),
del = require('del');

module.exports = function() {
  return del([
    'dest/css',
    'dest/fonts',
    'dest/images',
    'dest/js',
    'dest/index.html',
    // we don't want to clean this file though so we negate the pattern
    // '!dist/mobile/deploy.json'
  ]);
};
