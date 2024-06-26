import { Outlet, useRouteLoaderData } from "react-router-dom";
import { getAccount } from "../api";
import { Sidebar } from "../components/Sidebar";

export const rootId = "root";

export const rootLoader = getAccount;

export function Root() {
  const { isAuthenticated } = useRouteLoaderData(rootId) as {
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
