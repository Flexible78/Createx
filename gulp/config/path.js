// Получаем имя папки проекта
import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {

  build: {
    copyjs: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    assets: `${buildFolder}/assets/`,
  },

  src: {
    copyjs: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    assets: `${srcFolder}/assets/**/*.*`,
  },

  watch: {
    copyjs: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    assets: `${srcFolder}/assets/**/*.*`,
  },

  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};
