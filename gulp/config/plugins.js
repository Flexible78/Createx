import replace from 'gulp-replace'; // Поиск и замена файлов
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)
import browsersync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления

// Экспорт объекта
export const plugins = {
  replace: replace,
  plumber,
  notify,
  browsersync,
  newer,
};
