import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Enter from "../pages/enter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/enter",
    element: <Enter />,
  },
]);
