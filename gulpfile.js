// Основной модуль
import gulp from 'gulp';

//  Импорт путей
import { path } from './gulp/config/path.js';

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

//  Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { copyjs } from './gulp/tasks/copyjs.js';

//  Передаём значения в глобальную переменную
global.app = {
  path,
  gulp,
  plugins: plugins
}

//  Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.assets, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.copyjs, copyjs);
}

//  Основные задачи
const mainTasks = gulp.series(gulp.parallel(copy, copyjs, html, scss)); // , js, images

//  Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);
