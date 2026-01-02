import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import { setupRouterGuards } from "./guards";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/getting-started/installation",
    children: [
      {
        path: "getting-started",
        children: [
          {
            path: "installation",
            name: "Installation",
            component: () => import("@/views/GettingStarted/Installation.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 设置路由守卫
setupRouterGuards(router);

export default router;
