const { UniAppWeappTailwindcssWebpackPluginV5 } = require('weapp-tailwindcss-webpack-plugin');
const { WeappTailwindcssDisabled } = require('./platform');
const path = require('path');

module.exports = {
  transpileDependencies: ['uview-ui', 'z-paging'],
  configureWebpack: (config) => {
    config.plugins.push(
      new UniAppWeappTailwindcssWebpackPluginV5({
        disabled: WeappTailwindcssDisabled,
      }),
    );

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
  },
};
