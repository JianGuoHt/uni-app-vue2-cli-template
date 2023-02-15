export function setupEruda(Vue) {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    const eruda = require('eruda');
    eruda.init();
  }
}
