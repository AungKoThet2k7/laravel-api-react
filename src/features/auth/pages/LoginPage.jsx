import React from "react";
import LoginForm from "../components/LoginForm";
import reactUseCookie from "react-use-cookie";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [userCookie] = reactUseCookie("user");
  if (userCookie) return <Navigate to="/dashboard" />;
  return (
    <section className="mx-auto my-auto">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
