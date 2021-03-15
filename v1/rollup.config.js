import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
};

postcss({
  extract: true,
  extract: "dist/bundle.js",
});

postcss().use(
  postcssImport({
    path: ["src/styles.css"],
  })
);
