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
// const PageNotFound = React.lazy(() =>
//   import("../components/pages/PageNotFound").then((module) => ({
//     default: module.PageNotFound,
//   }))
// );

const Routes = () => {
  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route element={<SharedLayout />}>
            <Route path={routeNames.home} element={<Home />} />
            <Route path={routeNames.about} element={<About />} />
            {/* <Route path={routeNames.pagenotfound} element={<PageNotFound />} /> */}
          </Route>
        </Route>,
      ),
    );
  }, []);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export { Routes };
