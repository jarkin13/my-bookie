import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

postcss({
  plugins: [postcssImport({})],
  extract: true,
  sourceMap: true,
});

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins,
};
