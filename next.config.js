const path = require("path");

// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@lib"] = path.join(__dirname, "lib");
    return config;
  },
};
