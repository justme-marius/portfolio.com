const routes = [
  {
    path: "/",
    component: () => import("layouts/StartLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      }
    ],
  },
  /* path: "/home",
  component: () => import("layouts/MainLayout.vue"),
  children: [
    {
      path: "",
      component: () => import("pages/HomePage.vue"),
      children: []
    },
  ], */



  /*   {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ContactPage.vue") }],
  },
  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/BlogPage.vue") }],
  }, */
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/E404.vue"),
  },
];

export default routes;
