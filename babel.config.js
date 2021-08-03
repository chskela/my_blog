module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            // esmodules: true,
            modules: "commonjs",
            debug: false,
          },
        ],
        "@babel/preset-flow",
        "@babel/preset-react",
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
      ],
    },
    production: {
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-flow",
        "@babel/preset-react",
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
      ],
    },
    development: {
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-flow",
        "@babel/preset-react",
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
      ],
    },
  },
};
