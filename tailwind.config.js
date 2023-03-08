/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/index.html', './src/**/*.{vue,js,ts,jsx,tsx,wxml}'],
  // separator: '__',
  darkMode: 'media',
  // darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // 预设样式
    // uni-app 内置了预设样式，所以不需要tailwindcss的预设
    preflight: false,
    // // 以下功能小程序不支持
    // space: false, // > 子节点选择器
    // divideWidth: false,
    // divideColor: false,
    // divideStyle: false,
    // divideOpacity: false,
  },
};
