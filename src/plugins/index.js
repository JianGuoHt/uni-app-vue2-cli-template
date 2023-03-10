import { setupZPaging } from './z-paging';
import { setupUView } from './uview';
// #ifdef H5
import { setupEruda } from './eruda';
// #endif

export function setupPlugins(Vue) {
  // 挂载uView
  setupUView(Vue);

  // 挂载z-paging
  setupZPaging(Vue);

  // #ifdef H5
  // 挂载 eruda
  setupEruda(Vue);
  // #endif
}
