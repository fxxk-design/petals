/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');

const { COMPILE_TASKS, EXTRACT_TASKS } = require('./build/tasks');

gulp.task('default', gulp.parallel(...EXTRACT_TASKS, ...COMPILE_TASKS));
