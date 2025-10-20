import axios from "axios";
import React from "react";
import api from "../../../services/api";
import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ProgressBar from "../../../components/progressbar";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [tokenCookie, setTokenCookie] = useCookie("token");
  const [userCookie, setUserCookie] = useCookie("user");

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    // console.log(data);
    try {
      const res = await api.post("/login", data);
      if (res.status === 200) {
        setTokenCookie(res.data.token);
        setUserCookie(JSON.stringify(res.data.user));
        navigate("/dashboard");
        toast.success("Login Success");
        // console.log(res);
      }
    } catch (error) {
      if (error.response) {
        const errors = error.response.data.errors;

        // toast error message
        toast.error(error.response.data.message);

        //errors obj ထဲက key ပဲယူ
        Object.keys(errors).forEach((error) => {
          // console.log(errors[error][0]);

          //error တစ်ခုစီ useForm ထဲထည့်
          setError(error, {
            type: "server",
            message: errors[error][0],
          });
        });
      }
    }
  };

  return (
    <>
      {isSubmitting && <ProgressBar />}
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-md text-white"
      >
        <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
        <hr />
        <div className="max-w-sm my-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-3 w-80"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={
              "bg-white text-black py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            }
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="max-w-sm mb-5">
          <label htmlFor="password" className="block text-sm font-medium mb-3">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="bg-white text-black py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <Link to="/register">
            <p className="text-white">Register</p>
          </Link>
          <button
            type="submit"
            className="bg-white rounded-lg px-4 py-2 text-blue-500"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
