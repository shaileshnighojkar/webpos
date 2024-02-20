import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import ItemsPage from "../views/ItemsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "login",
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/items",
      component: ItemsPage,
    },
  ],
});

export default router;
