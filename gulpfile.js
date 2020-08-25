"use strict";

global.$ = {
    path: {
        task: require('./gulp/path/tasks.js')
    },
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:dev',
        'img:dev',
        'libsJS:dev',
        'js:dev',
    )
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:build',
        'img:build',
        'libsJS:build',
        'js:build',
    )
));


$.gulp.task('build-min', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:build-min',
        'img:build',
        'libsJS:build',
        'js:build-min',
    )
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
