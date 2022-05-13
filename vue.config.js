const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config=>{
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      // Webpack 5 必须加，否则出不来
      .set("type", "javascript/auto")
      .include.add(path.resolve(__dirname, './src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })

    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .set("type", "javascript/auto")
      .exclude.add(path.resolve(__dirname, './src/assets/icon'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  }
})
