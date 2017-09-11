var gulp = require("gulp");
var cssClean = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
gulp.task("cleanCss",function(){
	gulp.src("css/*.css")
	    .pipe(cssClean())
	    .pipe(gulp.dest("build/css"))
})
gulp.task("cleanJs",function(){
	gulp.src("js/*.js")
	    .pipe(uglify())
	    .pipe(gulp.dest("build/js"))
})
