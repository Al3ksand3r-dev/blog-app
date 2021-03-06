module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/variables/_colors.scss";
            @import "@/styles/variables/_breakpoints.scss";
            @import "@/styles/mixins/_mixins.scss";
          `,
      },
    },
  },
};
