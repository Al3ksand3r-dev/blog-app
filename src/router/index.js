import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/pages/Signup.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("SET_LOADER");
  setTimeout(() => {
    next();
    store.commit("SET_LOADER");
  }, 1500);
});

export default router;
