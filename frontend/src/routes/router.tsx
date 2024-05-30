import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { routePath } from "./paths";

import { Root, rootId, rootLoader } from "./Root";
import { PageNotFound } from "./PageNotFound";
import { Enter, enterAction, enterLoader } from "./Enter";

import { Dashboard } from "./Dashboard";
import { ReportProducts } from "./ReportProducts";
import { ReportUsers } from "./ReportUsers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        id={rootId}
        element={<Root />}
        errorElement={<PageNotFound />}
        loader={rootLoader}
        path={routePath.root}
      >
        <Route element={<Dashboard />} index />

        <Route element={<ReportProducts />} path={routePath.reportProducts} />

        <Route element={<ReportUsers />} path={routePath.reportUsers} />
      </Route>

      <Route
        action={enterAction}
        element={<Enter />}
        loader={enterLoader}
        path={routePath.enter}
      />
    </>,
  ),
);
