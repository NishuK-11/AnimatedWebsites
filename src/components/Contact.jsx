import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-slate-900">
      <div className="w-[500px] p-6 shadow-lg border rounded-md bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required.</span>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required.</span>}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("message", { required: true })}
              rows={4}
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">This field is required.</span>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Submit
            </button>
            <p>
              Not registered?{" "}
              <Link to="/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

