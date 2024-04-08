import '@/styles/main.css';
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as log from '@/data/log';

// 为了获取动态路由参数，嵌套一层
const app = createApp(App);
app.use(router);
app.mount('#app');

// 统计代码
let enterTime = Date.now();
router.beforeEach((to, from) => {
  if (!to.params.token) return;
  log.setToken(to.params.token.toString()); // 载入时从路由参数中获取token
  log.logEnter(
    'page:' + (from.name?.toString() || from.fullPath),
    'page:' + (to.name?.toString() || to.fullPath),
  );
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    log.logLeave(
      'page:' + (router.currentRoute.value.name?.toString() || router.currentRoute.value.fullPath),
      'hidden:' + (Date.now() - enterTime) / 1000 + 's',
    );
  } else if (document.visibilityState === "visible") {
    enterTime = Date.now();
    log.logEnter(
      '',
      'page:' + (router.currentRoute.value.name?.toString() || router.currentRoute.value.fullPath),
    );
  }
});
window.addEventListener("beforeunload", () => {
  log.logLeave(
    'page:' + (router.currentRoute.value.name?.toString() || router.currentRoute.value.fullPath),
    'unload:' + (Date.now() - enterTime) / 1000 + 's',
  );
});
