import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import reactUseCookie, { removeCookie } from "react-use-cookie";
import api from "../../../services/api";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const [tokenCookie] = reactUseCookie("token");

  const handleLogout = async () => {
    removeCookie("token");
    removeCookie("user");
    try {
      const res = await api.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenCookie}`,
          },
        }
      );
      if (res.data.success === true) {
        navigate("/");
        toast.success("Logout Success");
      }
    } catch (error) {
      console.log(error.res.data);
    }
  };

  return (
    <nav className="bg-white border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse self-center text-2xl font-semibold whitespace-nowrap text-gray-900"
        >
          React
        </Link>
        <ul
          className="font-medium flex rounded-lg
           flex-row md:space-x-8 rtl:space-x-reverse mt-0 bg-white"
        >
          <li className="my-auto mx-auto">
            <Link
              to="/dashboard"
              className="py-2 px-3 inline-flex items-center gap-x-2 font-medium rounded-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              Dashboard
            </Link>
          </li>

          <li className="my-auto mx-auto">
            <div className=" hs-dropdown [--trigger:hover] relative inline-flex">
              <button
                id="hs-dropdown-hover-event"
                type="button"
                className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 font-medium rounded-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                Product
                <svg
                  className="hs-dropdown-open:rotate-180 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-32 bg-white shadow-md border border-gray-100 rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-hover-event"
              >
                <div className="p-1 space-y-0.5">
                  <Link
                    to={"/dashboard/products"}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                  >
                    Products list
                  </Link>

                  <Link
                    to={"/dashboard/product-create"}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                  >
                    New Product
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li className="my-auto mx-auto">
            <button
              onClick={handleLogout}
              className=" cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 font-medium rounded-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
