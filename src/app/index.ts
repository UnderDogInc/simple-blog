import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./providers";
import { createHead } from "@unhead/vue/client";
import "@/shared/scss/index.scss";

export const app = createApp(App).use(createHead()).use(router);
