// #ifdef H5
import Vue from 'vue';
import ToastCom from '@/components/Toast/Toast.vue';
// #endif

/**
 * 消息提示
 */
export function showToast(
  params = {
    loading: false,
    message: '',
    icon: '',
    position: 'center',
    type: '',
    params: {},
    duration: 2000,
    complete: null,
  },
) {
  // #ifdef H5
  const body = document.body;
  const Toast = Vue.extend(ToastCom);

  const toast = new Toast({
    el: document.createElement('div'),
  });
  body.appendChild(toast.$el);

  toast.show(
    Object.assign(params, {
      complete: () => {
        toast.$el.remove();
        toast.$destroy();
      },
    }),
  );
  // #endif

  // #ifndef H5
  const page = getCurrentPages();
  const cuPageVM = page[page.length - 1].$vm;
  cuPageVM.$refs.toast.show(params);
  // #endif
}

/**
 * 错误提示
 * @param {string} message
 */
export function showPrimaryToast(message) {
  showToast({
    message,
    icon: '',
    type: 'primary',
  });
}

/**
 * 成功提示
 * @param {string} message
 */
export function showSuccessToast(message) {
  showToast({
    message,
    icon: '',
    type: 'success',
  });
}

/**
 * 警告提示
 * @param {string} message
 */
export function showWarningToast(message) {
  showToast({
    message,
    icon: '',
    type: 'warning',
  });
}

/**
 * 错误提示
 * @param {string} message
 */
export function showErrorToast(message) {
  showToast({
    message,
    icon: '',
    type: 'error',
  });
}
