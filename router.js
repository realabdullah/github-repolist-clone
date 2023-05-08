import Router from "vue-router";

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;

  let isSubDomain = false;

  if (process.server && ssrContext?.nuxt && ssrContext?.req) {
    const domainLevel =
      (ssrContext.req.headers.host.match(/\./g) || []).length + 1;

    if (domainLevel === 2) isSubDomain = true;

    // save to nuxt context for access on client-side
    ssrContext.nuxt.isSubDomain = isSubDomain;
  }

  if (process.client && window.__NUXT__?.isSubDomain) {
    isSubDomain = window.__NUXT__.isSubDomain;
  }

  // If it's a subdomain, we need to change the routes to match the subdomain
  const newRoutes = isSubDomain
    ? options.routes
        .filter((route) => route.path.includes("/testing"))
        .map((route) => {
          return {
            ...route,
            path: route.path.replace("/testing", ""),
          };
        })
    : options.routes;

  // Create a new router with the new routes
  return new Router({
    ...options,
    routes: newRoutes,
  });
}
