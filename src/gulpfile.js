const { src, dest, watch, series, parallel } = require('gulp');
// Import Gulp packages.
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');

// File path.
const files = {
    scssPath: 'scss/**/*.scss',
}

// Compile SCSS and move to dist folder.
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('css')
    );
}

// Watch SCSS files.
function watchTask(){
    watch([files.scssPath],
      series(
            parallel(scssTask),
        )
    );
}

// Run tasks.
exports.default = series(
    parallel(scssTask),
    watchTask
);
