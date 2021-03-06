<<<<<<< HEAD
var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html']
};

gulp.task("copy-html", function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html"], function() {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['src/main.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
});
||||||| merged common ancestors
=======
var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest("dist"));

})
>>>>>>> a0e0ebc0092a267d55713836f5432f2d2fe50c2e
