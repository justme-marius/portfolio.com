import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    /* scrollBehavior: () => ({ left: 0, top: 0 }), */
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          top: 50,
          behavior: "smooth",
        };
      }
    },

    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  /* NAVIGATION GUARDS RULES */
  /*   Router.beforeEach(async (to, from) => {
    if (
      // make sure the user is authenticated
      !isAuthenticated &&
      // ❗️ Avoid an infinite redirect
      to.name !== 'Login'
    ) {
      // redirect the user to the login page
      return { name: 'Login' }
    } else false
  })

  //used with await and promises
  Router.beforeEach(async (to, from) => {
    // canUserAccess() returns `true` or `false`
    const canAccess = await canUserAccess(to)
    if (!canAccess) return '/login'
  }) */

  return Router;
});
