var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver');

gulp.task('js', function(){
    return gulp.src('./assets/javascript/dev/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('./assets/javascript'))
    });

gulp.task('sass', function(){
    return gulp.src('./assets/stylesheets/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./assets/stylesheets/css'))
    });

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true, 
            open: true
        }));
});

gulp.task('watch', function(){
    gulp.watch('./assets/stylesheets/sass/*.sass', ['sass']); 
    gulp.watch('./assets/javascript/dev/*.js', ['js']); 
});

gulp.task('default', [ 'webserver', 'watch', 'js' ]);