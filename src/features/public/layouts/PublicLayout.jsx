import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { set } from "react-hook-form";
import { Toaster } from "react-hot-toast";

const PublicLayout = () => {
  useEffect(() => {
    //mount
  }, []);

  return (
    <main className="bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col h-dvh">
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

export default PublicLayout;
