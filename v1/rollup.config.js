import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import browserSync from "rollup-plugin-browsersync";
import copy from "rollup-plugin-copy";
import postcssNesting from "postcss-nesting";
import watch from "rollup-plugin-watch-transform";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    postcss({
      include: "src/styles.css",
      plugins: [postcssImport(), postcssNesting()],
      extract: true,
      minimize: true,
    }),
    browserSync({
      server: "dist",
    }),
    copy({
      targets: [
        { src: "src/index.html", dest: "dist" },
        { src: "src/assets/**/*", dest: "dist/assets" },
      ],
    }),
    watch({
      files: ["src"],
    }),
  ],
};
