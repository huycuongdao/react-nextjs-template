// https://nextjs.org/docs/api-reference/next.config.js/introduction
const nextJSConfig = {
  ...(process.env.GIT_COMMIT
    ? { generateBuildId: async () => process.env.GIT_COMMIT }
    : {}),

  compress: true,

  swcMinify: true,

  env: {},
};

module.exports = nextJSConfig;
