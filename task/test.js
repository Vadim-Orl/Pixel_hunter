// const gulp = require(`gulp`);
const { src, dest } = require('gulp');

const rollup = require('gulp-better-rollup');
const commonjs = require('rollup-plugin-commonjs');
const notify = require("gulp-notify");

const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const app = require('../config/app.js');
const path = require('../config/path.js');

const test = () => {
  return src(path.test.src)
    .pipe(plumber({
      errorHandler: notify.onError((error) => ({
        title: 'Test',
        message: error.message,
      })),
    }))
    .pipe(rollup({
      plugins: [
        commonjs(),
      ],
    }, 'cjs'))
    .pipe(dest(path.test.dest))
    .pipe(mocha({
      reporter: 'spec',
    }));
}

module.exports = test;
