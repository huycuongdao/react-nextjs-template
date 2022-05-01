const packageJSON = require("./package.json");

// https://nextjs.org/docs/api-reference/next.config.js/introduction
let nextJSConfig = {
  ...(process.env.GIT_COMMIT
    ? { generateBuildId: async () => process.env.GIT_COMMIT }
    : {}),

  reactStrictMode: false, // If true: error on findDomNode (legacy API) used by ScrollSync or AntD
  productionBrowserSourceMaps: false, // This will expose source inside Chrome / Inspect / Source / Pages
  compress: true,

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (
    /** @type {*} */ webpackConfig /* , { buildId, dev, isServer, defaultLoaders, webpack } */,
  ) => {
    const newWebpackConfig = { ...webpackConfig };

    return newWebpackConfig;
  },

  rewrites: async () => [],

  redirects: async () => [],

  headers: async () => [],

  publicRuntimeConfig: {},

  serverRuntimeConfig: {},

  env: {},
};

if (process.env.ANALYZE === "true") {
  nextJSConfig = require("@next/bundle-analyzer")(nextJSConfig);
}

module.exports = nextJSConfig;
