export function setupGlobMixin(Vue) {
  const mixin = {
    computed: {
      // 因为直接挂载到Vue原型上无法在模板上直接使用
      // 所以这里通过computed计算属性，给每一个页面设置一次
      RESOURCE_URL() {
        return uni.RESOURCE_URL;
      },
    },
  };

  Vue.mixin(mixin);
}
