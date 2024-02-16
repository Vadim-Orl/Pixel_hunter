const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Конфигурация
const path = require('./config/path.js');
const app = require('./config/app.js');

// задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const ts = require('./task/ts.js');
const img = require('./task/img.js');
const test = require('./task/test.js');
const photos = require('./task/photos.js');
const fonts = require('./task/fonts.js')

// Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.ts.watch, ts).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all',test);
  watch(path.img.watch, img).on('all', browserSync.reload);
  watch(path.photos.watch, photos).on('all', browserSync.reload);
  watch(path.fonts.watch, fonts).on('all', browserSync.reload);
  watch(path.test.watch, test);
};

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: 'public/',
    },
  });
};

const build = series(
  clear,
  parallel(scss, html, js, img, fonts, photos, ts),
);

// Сборка
const dev = series(
  build,
  parallel(watcher, server),
);

const runTests = series(
  clear,
  parallel(watcher, test),
)

// Задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.ts = ts;
exports.img = img;
exports.photos = photos;
exports.fonts = fonts;
exports.clear = clear;
exports.test = test;
exports.runTests = runTests;

// Сборка
exports.default = app.isProd
  ? build
  : dev;
