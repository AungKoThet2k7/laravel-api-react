import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Navigate } from "react-router-dom";
import reactUseCookie from "react-use-cookie";

const RegisterPage = () => {
  const [userCookie] = reactUseCookie("user");
  if (userCookie) return <Navigate to="/dashboard" />;
  return (
    <section className="mx-auto my-auto">
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
