import { createRouter, createWebHistory } from "vue-router";
import thiepMoi from "../components/thiepmoi.vue";
const routes = [{ path: "/", name: "thiepMoi", component: thiepMoi }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
