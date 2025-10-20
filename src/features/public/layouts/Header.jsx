import React from "react";
import { Link } from "react-router-dom";
import reactUseCookie from "react-use-cookie";

const Header = () => {
  const [userCookie] = reactUseCookie("user");
  return (
    <nav className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse self-center text-2xl font-semibold whitespace-nowrap "
        >
          React
        </Link>
        <ul
          className="font-medium flex rounded-lg
           flex-row md:space-x-8 rtl:space-x-reverse mt-0 "
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Home
            </Link>
          </li>

          {userCookie ? (
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Dashboard
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
