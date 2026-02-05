import React, { Suspense, useMemo } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

import { routeNames } from "./routeNames";
import { SharedLayout } from "../layout";

const Home = React.lazy(() =>
  import("../components/pages/Home").then((module) => ({
    default: module.Home,
  })),
);
const About = React.lazy(() =>
  import("../components/pages/About").then((module) => ({
    default: module.About,
  })),
);
const Services = React.lazy(() =>
  import("../components/pages/Services").then((module) => ({
    default: module.Services,
  })),
);
const NotFound = React.lazy(() =>
  import("../components/pages/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);

function Routes() {
  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route element={<SharedLayout />}>
            <Route path={routeNames.home} element={<Home />} />
            <Route path={routeNames.about} element={<About />} />
            <Route path={routeNames.services} element={<Services />} />
            <Route path={routeNames.notfound} element={<NotFound />} />
          </Route>
        </Route>
      )
    );
  }, []);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export { Routes };
