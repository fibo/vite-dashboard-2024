import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function Root() {
  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
}
