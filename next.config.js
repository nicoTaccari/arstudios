const withPWA = require("next-pwa");
const withAssetsImport = require("next-assets-import");

module.exports = withPWA(
  withAssetsImport({
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
      YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
      MAPGL_API_KEY: process.env.MAPGL_API_KEY,
    },
    pwa: {
      dest: "public",
    },
  })
);
