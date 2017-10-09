/**
 * Created by shuiqin on 9/28/17.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

//定义lint任务, 验证代码, gulp采取pipe方法 用流的方法直接往下传递
gulp.task('lint', function () {
  return gulp.src('hello.js') // hello.js compiledes6.js
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//压缩代码
gulp.task('compress', function () {
  return gulp.src('compiledes6.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// 将lint 和uglify组合起来 并新建一个默认任务
gulp.task('default', ['lint', 'compress'])
