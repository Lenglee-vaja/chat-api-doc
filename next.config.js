const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

// Export the configuration directly
module.exports = {
  ...withNextra(),
  reactStrictMode: true,
};
