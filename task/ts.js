const { src, dest } = require('gulp');
const typescript = require('gulp-typescript');
// Конфигурация

// Плагины

const path = require('../config/path.js');
const app = require('../config/app.js');

// const tsProject = require('../tsconfig.json');
var tsProject = typescript.createProject('tsconfig.json', { include: ['source'] });


const ts = () => {
  return src(path.ts.src, { sourcemaps: app.isDev })
    .pipe(tsProject())
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = ts;
