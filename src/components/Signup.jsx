import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Form Data:", data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-slate-900">
      <div className="w-[600px] border-2 shadow-md p-5 rounded-md bg-white dark:bg-gray-800 dark:text-white relative">

        {/* Close Icon */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-gray-700 dark:text-white hover:text-pink-500"
          aria-label="Go to home"
        >
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </Link>

        <h3 className="font-bold text-lg text-center">Signup</h3>

        {/* FORM STARTS HERE */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name Input */}
          <div className="mt-4 space-y-2">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full px-3 py-3 border rounded-md outline-none"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          {/* Email Input */}
          <div className="mt-4 space-y-2">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full px-3 py-3 border rounded-md outline-none"
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          </div>

          {/* Password Input */}
          <div className="mt-4 space-y-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full px-3 py-3 border rounded-md outline-none"
            />
            {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
          </div>

          {/* Signup Button and Login Link */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
            >
              Signup
            </button>
            <p>
              Already have an account?{' '}
              <Link to="/" className="underline text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;



