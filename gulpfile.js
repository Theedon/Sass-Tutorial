const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = () => {
  return src("./getdonny/**/*.scss").pipe(sass()).pipe(dest("css"));
};

const watchTask = () => {
  watch(["./getdonny/**/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
