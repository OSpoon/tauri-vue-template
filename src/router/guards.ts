import type { Router } from "vue-router";
import NProgress from "nprogress";

// 配置 NProgress
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
});

/**
 * 设置路由守卫
 * @param router - Vue Router 实例
 */
export function setupRouterGuards(router: Router): void {
  // 路由守卫：在路由切换时显示进度条
  router.beforeEach((to, from, next) => {
    // 如果路由相同，不显示进度条
    if (to.path !== from.path) {
      NProgress.start();
    }
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });

  router.onError(() => {
    NProgress.done();
  });
}
