import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";

const rootRoute = createRootRoute({
  component: () => {
    return <Layout />;
  },
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const routeTree = rootRoute.addChildren([homeRoute]);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({
  routeTree,
});
