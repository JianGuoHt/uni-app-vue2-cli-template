import Vue from 'vue';
import App from './App';

import { setupPlugins } from './plugins';

function bootstrap() {
  const app = new Vue({
    ...App,
  });

  // 挂载插件
  setupPlugins(Vue);

  app.$mount();
}

Vue.config.productionTip = false;
App.mpType = 'app';
bootstrap();
