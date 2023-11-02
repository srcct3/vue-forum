import { createRouter, createWebHistory } from "vue-router";
import sourceData from "../data.json";
import PageHome from "../components/PageHome.vue";
import PageThreadShow from "../components/PageThreadShow.vue";
import PageNotFound from "../components/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      const theradExists = sourceData.threads.find(
        (t) => t.id === to.params.id
      );

      if (theradExists) {
        return next();
      } else {
        next({
          name: "NotFound",
          params: {
            pathMatch: to.path.substring(1).split("/"),
          },
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
