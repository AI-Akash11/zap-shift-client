import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/services">Services</NavLink>
      </li> */}
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/send-parcel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      {/* <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/blog">Blog</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/contact">Contact</NavLink>
      </li> */}

      {
        user && <>
        <li>
          <NavLink to={'/dashboard/my-parcels'}>My Parcels</NavLink>
        </li>
        </>
      }
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm mb-10">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <span>
            <Logo></Logo>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-outline border-secondary text-secondary font-black"
            >
              Log Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-outline border-secondary text-secondary font-black"
            >
              Login
            </Link>
          )}
          <Link to={"/rider"} className="btn btn-primary ml-1 text-secondary font-black">
            Be a Rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
