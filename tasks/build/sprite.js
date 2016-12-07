gulp               = require('gulp'),
buffer             = require('vinyl-buffer'),
csso               = require('gulp-csso'),
spritesmith        = require('gulp.spritesmith'),
imagemin           = require('gulp-imagemin'),
merge              = require('merge-stream');

module.exports      = function() {

 var spriteData = gulp.src('src/images/*.png').pipe(spritesmith({
  imgName: 'sprite.png',
  cssName: 'sprite.css'
 }));

 // Pipe image stream through image optimizer and onto disk
 var imgStream    = spriteData.img
  // DEV: We must buffer our stream into a Buffer for `imagemin`
  .pipe(buffer())
  .pipe(imagemin())
  .pipe(gulp.dest('dest/css/'));

 // Pipe CSS stream through CSS optimizer and onto disk
 var cssStream    = spriteData.css
  .pipe(csso())
  .pipe(gulp.dest('dest/css/'));

 // Return a merged stream to handle both `end` events
 return merge(imgStream, cssStream);
  // return spriteData.pipe(gulp.dest('dest/css/'));

};
