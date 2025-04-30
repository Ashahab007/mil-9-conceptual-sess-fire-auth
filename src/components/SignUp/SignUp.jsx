import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex flex-col max-w-md mx-auto mt-10 p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
      </div>
      <form className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
            >
              Sign Up
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have account?
            <Link
              to="/signin"
              rel="noopener noreferrer"
              className="hover:underline text-violet-400"
            >
              Sign In
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
