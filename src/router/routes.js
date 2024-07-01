const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  {
    path: "/user",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      { path: "/user", component: () => import("pages/UserIndexPage.vue") },
    ],
  },
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
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
