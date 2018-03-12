var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task("my_task", function (){
  return gulp.src(['./teste-gulp.js'])
            .pipe(uglify())
            .pipe(gulp.dest('./dist'))
})

gulp.task("observar", function (){
  return gulp.watch(['./teste-gulp.js'], ['my_task'])
})