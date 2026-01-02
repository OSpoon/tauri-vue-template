import { useColorMode } from "@vueuse/core";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

import "./style.css";

// 配置自动跟随系统主题
const mode = useColorMode({
  initialValue: "auto",
});

// 确保初始模式为自动跟随系统
mode.value = "auto";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
