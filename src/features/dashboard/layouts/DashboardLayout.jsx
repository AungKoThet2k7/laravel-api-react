import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  return (
    <>
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
    </>
  );
};

export default DashboardLayout;
