const withAssetsImport = require("next-assets-import");
module.exports = withAssetsImport({
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
});
