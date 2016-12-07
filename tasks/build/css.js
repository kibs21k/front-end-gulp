var fs  = require('fs'),
gulp    = require('gulp'),
plumber = require('gulp-plumber'),
concat  = require('gulp-concat'),

// Scss
postcss                     = require('gulp-postcss'),
syntax_scss                 = require('postcss-scss'), // ?
sass                        = require('gulp-sass'),
sourcemaps                  = require('gulp-sourcemaps'),

// Shortcuts
if_media                    = require('postcss-if-media'),
postcss_position            = require('postcss-position'),
postcss_center              = require('postcss-center'),
postcss_size                = require('postcss-size'),
all_link_colors             = require('postcss-all-link-colors'),
postcss_circle              = require('postcss-circle'),
postcss_triangle            = require('postcss-triangle'),
font_magician               = require('postcss-font-magician'),
postcss_color_short         = require('postcss-color-short'),

// Optimization
// postcss_assets               = require('postcss-assets'),
mqpacker                    = require('css-mqpacker'),
postcss_merge_rules         = require('postcss-merge-rules'),
postcss_merge_longhand      = require('postcss-merge-longhand'),
rev                         = require('gulp-rev'),
// postcss_zindex               = require('postcss-zindex'),

// Adds at-2x keyword to background and background-image declarations to add retina support for images.
postcss_at2x                = require('postcss-at2x'),

// postcss_pxtorem              = require('postcss-pxtorem'),

// Extansions
cssnext                     = require('postcss-cssnext'),
gulp_rucksack               = require('rucksack-css'),
uncss                       = require('gulp-uncss'),
lost                        = require('lost'),
postcss_flexbox             = require('postcss-flexbox'),

postcss_responsive_images   = require('postcss-responsive-images'),
postcss_placehold           = require('postcss-placehold'),
// postcss_aspect_ratio         = require('postcss-aspect-ratio'),

// postcss_longshadow_text      = require('postcss-longshadow-text'),
// postcss_speech_bubble        = require('postcss-speech-bubble'),

// Animations
// postcss_animation            = require('postcss-animation'),
// postcss_magic_animations     = require('postcss-magic-animations'),
// postcss_easings              = require('postcss-easings'),

// Stats
cssstats                    = require('cssstats'),
statsReporter               = require('postcss-stats-reporter'),

// Transform #foo => [id="foo"]
postcss_fakeid              = require('postcss-fakeid'),

// Sorts CSS declarations fast and automatically in a certain order.
css_declaration_sorter      = require('css-declaration-sorter');

// PostCSS plugin that creates a combined LTR/RTL stylesheet
// postcss_rtlcss_combined      = require('postcss-rtlcss-combined'),

// PostCSS plugin to increase the specificity of your selectors
// postcss_increase_specificity = require('postcss-increase-specificity'),
browserSync                 = require('browser-sync').create();

module.exports              = function() {

    var processors          = [

      if_media,
      all_link_colors,
      postcss_at2x,
      cssnext(),
      lost,
    //   assets({
    //      loadPaths: ['**'],
    //      relative: true,
    //      cachebuster: true
    //  }),
      postcss_center,
      postcss_size,
      // postcss_color_short,
      gulp_rucksack({
        fallbacks: true
      }),
      postcss_responsive_images,
      postcss_flexbox,
      postcss_placehold,
      // postcss_zindex, //  Note that this module does not attempt to normalize relative z-index values, such as -1; indeed, it will abort immediately
      postcss_merge_rules,
      postcss_merge_longhand,
      postcss_fakeid,
      css_declaration_sorter,
      // postcss_longshadow_text,
      // postcss_speech_bubble,
      // postcss_circle,
      // postcss_triangle,
      // postcss_pxtorem,
      // postcss_aspect_ratio,
      // postcss_increase_specificity,
      // postcss_rtlcss_combined,
      // postcss_animation, // PostCSS plugin that adds @keyframes from animate.css
      // postcss_magic_animations,
      cssstats(),
      statsReporter(),
      mqpacker,
      font_magician,
    ];

    return gulp.src('./src/sass/**/*.scss')
      .pipe(plumber())
      .pipe(postcss(processors, {syntax: syntax_scss}))
      .pipe(sass().on('error', sass.logError))
      // .pipe(uncss({
      //   html: ['src/**/*.html', 'http://example.com']
      //  }))
      .pipe(sourcemaps.write('.'))

      .pipe(gulp.dest('./dest/css'))
      .pipe(browserSync.stream());

};

module.exports.dependencies = [ 'remove', 'build:sprite' ];
