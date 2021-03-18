import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    plugins: [
      postcss({
        plugins: [postcssImport()],
        extract: true,
      }),
    ],
  },
};
