import React from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import reactUseCookie from "react-use-cookie";

const DashboardLayout = () => {

  const [tokenCookie] = reactUseCookie('token');

  if (!tokenCookie) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="bg-gray-100">
      <Header />
      <Outlet />
      <Toaster
        toastOptions={{
          duration: 3000,
          position: "top-right",
          style: {
            borderRadius: "40px",
          },
        }}
      />
    </main>
  );
};

export default DashboardLayout;
