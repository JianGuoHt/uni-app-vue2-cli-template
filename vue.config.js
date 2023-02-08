const { UniAppWeappTailwindcssWebpackPluginV5 } = require('weapp-tailwindcss-webpack-plugin');
const { WeappTailwindcssDisabled } = require('./platform');

module.exports = {
  transpileDependencies: ['uview-ui', 'z-paging'],
  configureWebpack: (config) => {
    config.plugins.push(
      new UniAppWeappTailwindcssWebpackPluginV5({
        disabled: WeappTailwindcssDisabled,
      }),
    );
  },
};
