const path = require("path");

// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@lib"] = path.join(__dirname, "lib");
    config.resolve.alias["@app"] = path.join(__dirname, "app");
    config.resolve.alias["@hooks"] = path.join(__dirname, "hooks");
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    return config;
  },
};
