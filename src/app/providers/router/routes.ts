import { DefaultLayout } from "@/layouts/default-layout";
import type { RouteRecordRaw } from "vue-router";

export enum RouteNames {
  HOME = "Home",
  POST = "Post",
  NOT_FOUND = "NotFound",
}
type RouteMeta = {
  layout?: typeof DefaultLayout;
  requiresAuth?: boolean;
  title?: string;
};

type AppRouteRecordRaw = RouteRecordRaw & {
  name: RouteNames;
  meta?: RouteMeta;
};

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.HOME]: "/",
  [RouteNames.POST]: "/post/:id",
  [RouteNames.NOT_FOUND]: "/:pathMatch(.*)*",
};

export const routes: AppRouteRecordRaw[] = [
  {
    path: RoutePaths[RouteNames.HOME],
    name: RouteNames.HOME,
    component: () => import("@/pages/posts"),
    meta: {
      layout: DefaultLayout,
      title: "Главная страница",
    },
  },
  {
    path: RoutePaths[RouteNames.POST],
    name: RouteNames.POST,
    component: () => import("@/pages/post"),
    meta: {
      layout: DefaultLayout,
      title: "Страница поста",
    },
  },
  {
    path: RoutePaths[RouteNames.NOT_FOUND],
    name: RouteNames.NOT_FOUND,
    component: () => import("@/pages/not-found/ui/NotFound.vue"),
    meta: {
      layout: DefaultLayout,
      title: "Страница не найдена",
    },
  },
];
