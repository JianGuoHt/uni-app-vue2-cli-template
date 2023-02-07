import uView from 'uview-ui'; // 引入uview

export function setupUView(Vue) {
  Vue.use(uView);

  // 修改uView内置配置方案
  uni.$u.setConfig({
    config: {
      // uview官方默认为px
      unit: 'px',
    },
    props: {
      button: {
        hoverStayTime: 100,
      },
    },
  });

  console.log('uView', uni.$u.config.v);
}
