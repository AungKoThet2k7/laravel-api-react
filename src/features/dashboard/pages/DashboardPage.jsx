import React from "react";
import { Navigate } from "react-router-dom";
import reactUseCookie from "react-use-cookie";

const DashboardPage = () => {
  const [tokenCookie] = reactUseCookie("token");
  if (!tokenCookie) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>DashboardPage</h1>
    </div>
  );
};

export default DashboardPage;
