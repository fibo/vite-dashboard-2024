import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { routePath } from "../routes/paths";

export function Sidebar() {
  return (
    <aside id="default-sidebar" className={styles.aside} aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to={routePath.root}
              className={({ isActive }) => `${styles.item}
${isActive ? styles.item_active : ""} group`}
            >
              <img className="w-5 h-5" src="/vite.svg" alt="logo" />
              <span className="ms-3">Vite Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={routePath.reportUsers}
              className={({ isActive }) => `${styles.item}
${isActive ? styles.item_active : ""} group`}
            >
              <svg
                className={styles.itemIcon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className={styles.itemText}>Users</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={routePath.reportProducts}
              className={({ isActive }) => `${styles.item}
${isActive ? styles.item_active : ""} group`}
            >
              <svg
                className={styles.itemIcon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className={styles.itemText}>Products</span>
            </NavLink>
          </li>

          <li>
            <Link to={routePath.enter} className={`${styles.item} group`}>
              <svg
                className={styles.itemIcon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className={styles.itemText}>Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
