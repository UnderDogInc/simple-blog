import { createRouter, createWebHistory } from "vue-router";
import { routes, RouteNames } from "./routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.onError((error) => {
  console.error("Router error:", error);

  if (
    error.message.includes("Failed to fetch dynamically imported module") ||
    error.message.includes("Loading chunk") ||
    error.message.includes("resolvedComponent is undefined")
  ) {
    router.push({ name: RouteNames.NOT_FOUND });
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: RouteNames.NOT_FOUND });
    return;
  }

  if (to.matched.some((record) => !record.components)) {
    next({ name: RouteNames.NOT_FOUND });
    return;
  }

  next();
});
