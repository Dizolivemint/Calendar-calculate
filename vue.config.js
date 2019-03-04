module.exports = {
    transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
    css: {
        loaderOptions: {
          sass: {
            data: `@import "@/assets/scss/_shared.scss";`
          }
        }
    }
}