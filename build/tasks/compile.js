/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const scssimport = require('gulp-shopify-sass');
const cssmin = require('gulp-cssmin');
const stripCssComments = require('gulp-strip-css-comments');
const sourcemaps = require('gulp-sourcemaps');
const { exec } = require('child_process');

const { DIST_DIR, ENTRY_POINTS } = require('./helper');

const tasks = [];
const ALL_FILE_NAME = '_all.scss';

ENTRY_POINTS.forEach(name => {
  const taskName = `compile-scss-${name}`;

  tasks.push(taskName);

  gulp.task(taskName, () => {
    return gulp
      .src(`src/style/_${name}.scss`)
      .pipe(concat(`${name}.scss`))
      .pipe(
        sass({ outputStyle: 'expanded', noLineComments: true, keepSpecialComments: 0 }).on(
          'error',
          sass.logError,
        ),
      )
      .pipe(stripCssComments({ preserve: false }))
      .pipe(gulp.dest(DIST_DIR));
  });
});

gulp.task('concat-entry-points', () =>
  gulp
    .src(ENTRY_POINTS.map(entry => `src/style/_${entry}.scss`))
    .pipe(concat(ALL_FILE_NAME))
    .pipe(scssimport())
    .pipe(
      rename(p => {
        p.basename = p.basename.replace('.cat.scss', '');
        p.extname = '.scss';
      }),
    )
    .pipe(gulp.dest(DIST_DIR)),
);

gulp.task(
  'compile-scss-all',
  gulp.series('concat-entry-points', () =>
    gulp
      .src(`${DIST_DIR}/${ALL_FILE_NAME}`)
      .pipe(concat(ALL_FILE_NAME.replace('_', '')))
      .pipe(
        sass({ outputStyle: 'expanded', noLineComments: true, keepSpecialComments: 0 }).on(
          'error',
          sass.logError,
        ),
      )
      .pipe(stripCssComments({ preserve: false }))
      .pipe(gulp.dest(DIST_DIR)),
  ),
);

tasks.push('compile-scss-all');

gulp.task(
  'compress',
  gulp.series(gulp.parallel(...tasks), () =>
    gulp
      .src(`${DIST_DIR}/**/*.css`, { base: DIST_DIR })
      .pipe(sourcemaps.init({ largeFile: true, loadMaps: true }))
      .pipe(cssmin())
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write(''))
      .pipe(gulp.dest(DIST_DIR)),
  ),
);

gulp.task(
  'compile',
  gulp.series('compress', () => {
    const paths = [...ENTRY_POINTS, 'all'].map(entry => `${DIST_DIR}/${entry}.css`);

    return exec(`rm -rf ${paths.join(' ')}`);
  }),
);

module.exports = {
  COMPILE_TASKS: ['compile'],
};
