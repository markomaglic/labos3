import { defineAsyncComponent} from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Weather from "../views/Weather.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Components from "../views/Components.vue"

const Report = defineAsyncComponent(() => import('../views/Report.vue'));
const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/weather/:id?",
    component: Weather,
  }, 
  {
    path: "/about",
    name: "About and some required implementations",
    component: About,
  },
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
  {
    path: "/report",
    component: Report,
  },
  {
  path: "/:catchAll(.*)",
  name: "NotFound",
  component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
