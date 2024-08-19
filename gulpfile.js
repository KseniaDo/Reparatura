const gulp = require('gulp');
const includeFiles = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const del = require('del');
const fs = require('fs');
const webpack = require('webpack-stream');


async function clean(done) {
    if (fs.existsSync('./public/')){
        return del.sync('./public/', { force: true });
    }
    done();
}

function pages() {
    return gulp.src('./src/pages/*.html')
    .pipe(includeFiles({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./public/'))
}

function styles() {
    return gulp.src('./src/styles/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'))
}

function copyImages(){
    return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./public/images/'))
}

function js() {
    return gulp.src('./src/js/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./public/js/'))
}

function startServer() {
    return gulp.src('./public/')
    .pipe(server({
        livereload: true,
        open: true
    }))
}

function watch(){
    gulp.watch(['./src/styles/style.scss', './src/components/**/*.scss'], gulp.parallel(styles));
    gulp.watch(['./src/pages/*.html', './src/components/**/*.html'], gulp.parallel(pages));
    gulp.watch(['./src/js/*.js', './src/components/**/*.js'], gulp.parallel(js));
    gulp.watch('./src/images/**/*', gulp.parallel(copyImages));
}



exports.pages = pages;
exports.styles = styles;
exports.copyImages = copyImages;
exports.startServer = startServer;
exports.clean =clean;
exports.watch = watch;
exports.js = js;

exports.default = gulp.series(
    clean,
    gulp.parallel(pages, styles, copyImages, js),
    gulp.parallel(startServer, watch)
);