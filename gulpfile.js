'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  buf: require('vinyl-buffer'),
  merge: require('merge-stream')
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sprite:svg',
    'sprite:png'
  ),
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'css:foundation'
  ),
  $.gulp.parallel(
    'copy:image'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
