import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./Root";
import PageNotFound from "./PageNotFound";
import Enter from "./Enter";
import ReportProducts from "./ReportProducts";
import ReportUsers from "./ReportUsers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<PageNotFound />}>
        <Route path="/report/products" element={<ReportProducts />} />
        <Route path="/report/users" element={<ReportUsers />} />
      </Route>

      <Route path="/enter" element={<Enter />} />
    </>,
  ),
);
