import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { getAccount } from "../api";

import { routePath } from "./paths";

import { Root, rootId } from "./Root";
import { PageNotFound } from "./PageNotFound";
import { Enter } from "./Enter";
import { ReportProducts } from "./ReportProducts";
import { ReportUsers } from "./ReportUsers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        id={rootId}
        path={routePath.root}
        element={<Root />}
        errorElement={<PageNotFound />}
        loader={getAccount}
      >
        <Route path={routePath.reportProducts} element={<ReportProducts />} />

        <Route path={routePath.reportUsers} element={<ReportUsers />} />
      </Route>

      <Route path={routePath.enter} element={<Enter />} />
    </>,
  ),
);
