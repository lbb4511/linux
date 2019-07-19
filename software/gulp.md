# Gulp

前端自动化流程管理。在 JavaScript 的世界里，Grunt.js 是基于 Node.js 的自动化任务运行器。2013 年 02 月 18 日，Grunt v0.4.0 发布。Fractal 公司积极参与了数个流行 Node.js 模块的开发，它去年发布了一个新的构建系统 Gulp，希望能够取其精华，并取代 Grunt，成为最流行的 JavaScript 任务运行器。

## Gulp 和 Grunt 的异同点

- 易于使用：采用代码优于配置策略，Gulp 让简单的事情继续简单，复杂的任务变得可管理。
- 高效：通过利用 Node.js 强大的流，不需要往磁盘写中间文件，可以更快地完成构建。
- 高质量：Gulp 严格的插件指导方针，确保插件简单并且按你期望的方式工作。
- 易于学习：通过把 API 降到最少，你能在很短的时间内学会 Gulp。构建工作就像你设想的一样：是一系列流管道。

## Gulp 特点

- **易用**：Gulp 相比 Grunt 更简洁，而且遵循代码优于配置策略，维护 Gulp 更像是写代码。
- **高效**：Gulp 相比 Grunt 更有设计感，核心设计基于 Unix 流的概念，通过管道连接，不需要写中间文件。
- **高质量**：Gulp 的每个插件只完成一个功能，这也是 Unix 的设计原则之一，各个功能通过流进行整合并完成复杂的任务。例如：Grunt 的 imagemin 插件不仅压缩图片，同时还包括缓存功能。他表示，在 Gulp 中，缓存是另一个插件，可以被别的插件使用，这样就促进了插件的可重用性。目前官方列出的有 673 个插件。

## Gulp 示例

```js
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

// Lint JS
gulp.task("lint", function() {
  return gulp
    .src("src/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

// Concat & Minify JS
gulp.task("minify", function() {
  return gulp
    .src("src/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("dist"))
    .pipe(rename("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

// Watch Our Files
gulp.task("watch", function() {
  gulp.watch("src/*.js", ["lint", "minify"]);
});

// Default
gulp.task("default", ["lint", "minify", "watch"]);
```

## 参考资料

- [gulp](http://gulpjs.com/)
- [gulp fiction](http://gulpfiction.divshot.io/): 可视化配置 gulp 工作流程。
- [前端工程的构建工具对比 Gulp vs Grunt](http://segmentfault.com/blog/aomine_2450732/1190000002491282)
