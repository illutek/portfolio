var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

//var mainBowerFiles = require('main-bower-files');


// //////////////////////////////////////////////
// Sass to css
// /////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp.src('sass/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

// plaatst de inhoud van de ganse bower_components map op de root
// is niet de bedoeling
//gulp.task('bower', function() {
//    return gulp.src(mainBowerFiles(), {
//            base: 'bower_components/open-sans-fontface/fonts'
//        })
//        .pipe(gulp.dest('css/fonts'));
//});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// andere oplossing https://ilikekillnerds.com/2014/07/copying-files-from-one-folder-to-another-in-gulp-js/
// /////////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('copyfonts', function() {
    gulp.src('./bower_components/open-sans-fontface/fonts/**/*.{ttf,woff,eof,svg}')
        .pipe(gulp.dest('css/fonts'));
});

// ///////////////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////////////////
gulp.task('watch', function(){
    gulp.watch('sass/**/*.{scss,sass}', ['sass']);
});

// ///////////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////////
gulp.task('default' , ['sass', 'watch']);