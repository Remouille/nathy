'use strict';

var path = require('path');
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var conf = require('./conf');

// var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  gulp.src([path.join(conf.paths.src, '/assets/services/hospitality2/*.jpg')])
    .pipe(imageResize({ 
      width : 400,
      height : 400,
      crop : true,
      upscale : false,
      imageMagick: true
    }))
    .pipe(rename({suffix: "@x2"}))
    .pipe(gulp.dest('dist/assets'));
});
