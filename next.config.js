// 用于做 sentry sourcemap 用的插件
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
  VERCEL_GIT_COMMIT_SHA,
} = process.env;

process.env.SENTRY_DSN = SENTRY_DSN;
const basePath = "";

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768, 896, 1024],
  },
  productionBrowserSourceMaps: true,
  env: {
    // Make the COMMIT_SHA available to the client so that Sentry events can be
    // marked for the release they belong to. It may be undefined if running
    // outside of Vercel
    NEXT_PUBLIC_COMMIT_SHA: VERCEL_GIT_COMMIT_SHA,
  },
  webpack: (config, options) => {
    // 打包 客户端代码时 使用 browser 而不是 node。
    // Replace node as browser in the client side
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    // 定义需要的动态环境变量，判断是否为 服务端
    config.plugins.push(
      new options.webpack.DefinePlugin({
        "process.env.NEXT_IS_SERVER": JSON.stringify(
          options.isServer.toString()
        ),
      })
    );

    // 当需要配置 sourcemap 的时候使用
    // When all the Sentry configuration env variables are available/configured
    // The Sentry webpack plugin gets pushed to the webpack plugins to build
    // and upload the source maps to sentry.
    // This is an alternative to manually uploading the source maps
    // Note: This is disabled in development mode.
    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      VERCEL_GIT_COMMIT_SHA &&
      NODE_ENV === "production"
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: ".next",
          ignore: ["node_modules"],
          stripPrefix: ["webpack://_N_E/"],
          urlPrefix: `~${basePath}/_next`,
          release: VERCEL_GIT_COMMIT_SHA,
        })
      );
    }
    return config;
  },
};
