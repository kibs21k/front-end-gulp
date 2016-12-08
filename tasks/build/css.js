var fs                      = require('fs'),
gulp                        = require('gulp'),
plumber                     = require('gulp-plumber'),

// SCSS
// ---------------------------------------------------------------------

postcss                     = require('gulp-postcss'),
syntaxScss                  = require('postcss-scss'),
sass                        = require('gulp-sass'),
sourcemaps                  = require('gulp-sourcemaps'),
postcssReporter             = require('postcss-reporter'),

// Extansions
// ---------------------------------------------------------------------

cssnext                     = require('postcss-cssnext'),
rucksack                    = require('rucksack-css'),
// uncss                       = require('gulp-uncss'),
// lost                        = require('lost'),

// Code Fixes
// ---------------------------------------------------------------------

flexbugs                    = require('postcss-flexbugs-fixes'),
doiuse                      = require('doiuse'),
immutableCss                = require('immutable-css'),
postcss_sorting             = require('postcss-sorting'),
// postcss_pxtorem              = require('postcss-pxtorem'),
// postcss_zindex               = require('postcss-zindex'),

// Adds at-2x keyword to background and background-image declarations to add
// retina support for images.
// postcss_at2x                = require('postcss-at2x'),

// Transform #foo => [id="foo"]
// postcss_fakeid              = require('postcss-fakeid'),

// Optimization
// ---------------------------------------------------------------------

postcss_assets              = require('postcss-assets'),
mqpacker                    = require('css-mqpacker'),
postcss_merge_rules         = require('postcss-merge-rules'),
postcss_merge_longhand      = require('postcss-merge-longhand'),

// Stats
// ---------------------------------------------------------------------

colorguard                  = require('colorguard'),
cssstats                    = require('cssstats'),
statsReporter               = require('postcss-stats-reporter'),

// Shortcuts
// ---------------------------------------------------------------------

postcss_center              = require('postcss-center'),
postcss_size                = require('postcss-size'),
// all_link_colors             = require('postcss-all-link-colors'),
// if_media                    = require('postcss-if-media'),
// postcss_circle              = require('postcss-circle'),
// postcss_triangle            = require('postcss-triangle'),
// postcss_flexbox             = require('postcss-flexbox'),

// Miscellaneous Goodies
// ---------------------------------------------------------------------

// postcss_responsive_images   = require('postcss-responsive-images'),
// postcss_placehold           = require('postcss-placehold'),
// postcss_aspect_ratio         = require('postcss-aspect-ratio'),

// postcss_longshadow_text      = require('postcss-longshadow-text'),
// postcss_speech_bubble        = require('postcss-speech-bubble'),

// Animations
// ---------------------------------------------------------------------
// postcss_animation            = require('postcss-animation'),
// postcss_magic_animations     = require('postcss-magic-animations'),

// PostCSS plugin that creates a combined LTR/RTL stylesheet
// postcss_rtlcss_combined      = require('postcss-rtlcss-combined'),

browserSync                 = require('browser-sync').create();

module.exports              = function() {

  var processors            = [
    postcss_assets(),
    flexbugs,
    colorguard,
    rucksack({
      fallbacks: true,
    }),
    cssnext({
      browsers: ['last 2 versions']
    }),
    postcss_center,
    postcss_size,
    postcss_sorting(),
    mqpacker,
    cssstats(),
    statsReporter(),
  ];

  return gulp.src('./src/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(processors, {syntax: syntaxScss}))
  // .pipe(uncss({
  //   html: ['src/**/*.html', 'http://example.com']
  //  }))
  .pipe(sourcemaps.write('/.'))
  .pipe(gulp.dest('./dest/css'))
  .pipe(browserSync.stream());

};

module.exports.dependencies = [ 'remove', 'build:sprite' ];
