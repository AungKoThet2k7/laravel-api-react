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
    try {
      const res = await api.post("/logout", {},{
        headers : {
          "Authorization" : `Bearer ${tokenCookie}`
        }
      });
      if (res.data.success === true) {
        removeCookie("token");
        removeCookie("user");
        navigate("/");
        toast.success("Logout Success");
      }
    } catch (error) {
      console.log(error.res.data);
    }
  };

  return (
    <nav className="bg-white border-gray-200 shadow-sm">
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
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Home
            </Link>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className=" cursor-pointer block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
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
