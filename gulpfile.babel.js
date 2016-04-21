
'use strict';

// gulpfile.js

console.log('require node v5.10.1.')

import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browsersync from 'browser-sync';

import handleErrors from './task/handle-errors';
import handleFiles from './task/handle-files';

gulp.task('bundle', () => {
  browserify({
    entries: ['./src/main.js'],
    debug: true
  }).transform(babelify, {
    presets: ['es2015']
  }).on('file', (file, id, parent) => {
    handleFiles(file, false);
  }).bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream())
  ;
})

gulp.task('server', () => {
  browsersync.init({
    server: { baseDir: './dist' },
    open: false
  });
})

gulp.task('default', ['server', 'bundle'], () => {
  gulp.watch('./src/**/*', ['bundle']);
  gulp.watch('./dist/**/*', () => {
    browsersync.reload();
  });
});

