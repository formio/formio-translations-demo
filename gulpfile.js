var gulp = require('gulp');
var s3 = require("gulp-s3");
gulp.task('deploy', function () {
  return gulp.src('./dist/**/*').pipe(s3(require('./aws.json'), {
    uploadPath: "/translations/"
  }));
});

