var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var rename = require("gulp-rename");
var merge2 = require("merge2");
var cloudfront = require("gulp-cloudfront-invalidate-aws-publish");
var AWS = require("aws-sdk");

gulp.task('aws-deploy', function () {
  var aws = {
    distribution: "E1WVACBK45GZ13",
    credentials: new AWS.SharedIniFileCredentials(),
    params: {
      Bucket: "yuliacech.com"
    },
    region: "eu-central-1",
    wait: true
  };
  var publisher = awspublish.create(aws);

  var normalHeaders = {
    "Cache-Control": "max-age=315360000, no-transform, public",
  };
  var htmlHeaders = {
    ...normalHeaders,
    'Content-Type': 'text/html; charset=utf-8'
  };
  var StreamAllExclHtml = gulp.src(["build/**/*", "!build/**/*.html"])
    .pipe(publisher.publish(normalHeaders));

  var StreamHtml = gulp.src(["build/**/*.html"])
    .pipe(rename(function (path) {
        path.extname = "";
      }
    ))
    .pipe(publisher.publish(htmlHeaders));
  return merge2(StreamAllExclHtml, StreamHtml)
    .pipe(publisher.sync())
    .pipe(cloudfront(aws))
    .pipe(awspublish.reporter());

});
