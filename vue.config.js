const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";@import "@/assets/styles/_mixins.scss";
        `,
      },
    },
  },
  transpileDependencies: true,
});
