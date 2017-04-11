var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest("dist"));

})