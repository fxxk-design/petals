/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const scssimport = require('gulp-shopify-sass');
const rename = require('gulp-rename');

const { DIST_DIR } = require('./helper');

gulp.task('extract-scss', () => {
  return gulp
    .src('src/style/*.scss')
    .pipe(scssimport())
    .pipe(
      rename(p => {
        p.basename = p.basename.replace('.cat.scss', '');
        p.extname = '.scss';
      }),
    )
    .pipe(gulp.dest(DIST_DIR));
});

module.exports = {
  EXTRACT_TASKS: ['extract-scss'],
};
