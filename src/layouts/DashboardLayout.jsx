import React from "react";
import { BiHome, BiPackage, BiSidebar } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { Link, NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer max-w-[1200px] mx-auto lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 font-semibold">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <BiSidebar className="w-5 h-5"></BiSidebar>
          </label>
          <div className="px-4 font-black"><span className="text-secondary font-bold">Zap Shift</span> Dashboard</div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <BiHome className="w-5 h-5" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            <li>
              <NavLink
                to={"/dashboard/my-parcels"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Parcels"
              >
                <BiPackage className="w-5 h-5" />
                <span className="is-drawer-close:hidden">My Parcels</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                <FcSettings className="w-5 h-5" />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
