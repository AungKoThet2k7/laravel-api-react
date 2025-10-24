import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import reactUseCookie from "react-use-cookie";
import toast from "react-hot-toast";

const ProductCreatePage = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [tokenCookie] = reactUseCookie("token");

  const handleStoreProduct = async (data) => {
    console.log(data);
    try {
      const res = await api.post("/products", data, {
        headers: {
          Authorization: `Bearer ${tokenCookie}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201) {
        toast.success("Product created successfully");
        reset();
        // console.log(res);
      }
    } catch (error) {
      console.log(error);
      const errors = error.response.data.errors;

      toast.error(error.response.data.message);

      Object.keys(errors).forEach((error) => {
        setError(error, {
          type: "server",
          message: errors[error][0],
        });
      });
    }
  };

  return (
    <>
      {/* {isLoading && <ProgressBar />} */}
      <section className=" rounded-lg bg-white p-5 shadow-md my-16 mx-20">
        <h1 className="text-3xl font-bold mb-2">Product List</h1>

        <form
          onSubmit={handleSubmit(handleStoreProduct)}
          action=""
          method="post"
          encType="multipart/form-data"
        >
          <div className="max-w-lg my-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-3 w-80"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={
                " shadow-sm bg-white text-black py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              }
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="max-w-lg my-5">
            <label
              htmlFor="price"
              className="block text-sm font-medium mb-3 w-80"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              {...register("price")}
              className={
                " shadow-sm bg-white text-black py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              }
            />
            {errors.price && (
              <p className="mt-2 text-sm text-red-500">
                {errors.price.message}
              </p>
            )}
          </div>

          <div className="max-w-lg my-5">
            <label
              htmlFor="stock"
              className="block text-sm font-medium mb-3 w-80"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              {...register("stock")}
              className={
                " shadow-sm bg-white text-black py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              }
            />
            {errors.stock && (
              <p className="mt-2 text-sm text-red-500">
                {errors.stock.message}
              </p>
            )}
          </div>

          <div className="max-w-lg my-5">
            <label
              htmlFor="photos"
              className="block text-sm font-medium mb-3 w-80"
            >
              Photos
            </label>
            <input
              type="file"
              id="photos"
              {...register("photos")}
              multiple
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
   "
            />
            {errors.photos && (
              <p className="mt-2 text-sm text-red-500">
                {errors.photos.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Create
          </button>
        </form>
      </section>
    </>
  );
};

export default ProductCreatePage;
