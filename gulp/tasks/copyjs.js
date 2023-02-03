export const copyjs = () => app.gulp.src(app.path.src.copyjs)
  .pipe(app.gulp.dest(app.path.build.copyjs));
