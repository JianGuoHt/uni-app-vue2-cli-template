const { UniAppWeappTailwindcssWebpackPluginV5 } = require('weapp-tailwindcss-webpack-plugin');
const { WeappTailwindcssDisabled } = require('./platform');
const path = require('path');

console.log('当前开发平台：' + process.env.UNI_PLATFORM);

module.exports = {
  transpileDependencies: ['uview-ui', 'z-paging'],
  configureWebpack: (config) => {
    config.plugins.push(
      new UniAppWeappTailwindcssWebpackPluginV5({
        disabled: WeappTailwindcssDisabled,
      }),
    );

    if (process.env.UNI_PLATFORM === 'mp-weixin') {
      config.module.rules.push({
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-inset-loader',
            options: {
              pagesPath: path.resolve(__dirname, './src/pages.json'),
            },
          },
        ],
      });
    }

    if (process.env.UNI_PLATFORM === 'h5') {
      // 生产环境剔除 eruda
      config.externals = process.env.NODE_ENV === 'development' ? {} : { eruda: 'eruda' };
    }
  },

  chainWebpack(config) {
    // config.optimization.splitChunks({
    //   chunks: 'all',
    //   cacheGroups: {
    //     libs: {
    //       name: 'chunk-libs',
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: 10,
    //       chunks: 'initial', // only package third parties that are initially dependent
    //     },
    //   },
    // });
  },
};
