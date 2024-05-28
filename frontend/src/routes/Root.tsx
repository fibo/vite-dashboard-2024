import { Outlet, useRouteLoaderData } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function Root() {
  const { isAuthenticated } = useRouteLoaderData("root") as {
    isAuthenticated: boolean;
  };
  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        {isAuthenticated ? (
          <Outlet />
        ) : (
          <div className="h-screen grid items-center">
            <span>You are not authenticated</span>
          </div>
        )}
      </div>
    </>
  );
}
