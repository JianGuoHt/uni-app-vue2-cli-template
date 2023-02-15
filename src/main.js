// import './design/input.css';
import Vue from 'vue';
import App from './App';
import store from './store';
import { setupGlobDirectives } from './directives';
import { setupGlobMixin } from './mixin';

import { setupPlugins } from './plugins';

Vue.config.productionTip = false;
App.mpType = 'app';

// 全局挂载 资源服务器地址
uni.RESOURCE_URL = process.env.VUE_APP_RESOURCE_URL;
Vue.prototype.RESOURCE_URL = process.env.VUE_APP_RESOURCE_URL;

// 挂载插件
setupPlugins(Vue);

// 挂载全局指令
setupGlobDirectives(Vue);

// 挂载全局Mixin
setupGlobMixin(Vue);

const app = new Vue({
  store,
  ...App,
});

app.$mount();
