import { createRouter, createWebHistory } from "vue-router";
import thiepmoi from "../components/thiepMoi.vue";
const routes = [{ path: "/", name: "thiepmoi", component: thiepmoi }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
