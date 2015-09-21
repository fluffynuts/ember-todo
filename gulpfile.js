var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync({
        notify: false,
        server: {
            baseDir: [ 'app' ]
        }
    });
    gulp.watch('app/**/*', reload);
})

