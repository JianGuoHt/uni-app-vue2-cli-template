import { setupZPaging } from './z-paging';
import { setupUView } from './uview';

export function setupPlugins(Vue) {
  // 挂载uView
  setupUView(Vue);

  // 挂载z-paging
  setupZPaging(Vue);
}
