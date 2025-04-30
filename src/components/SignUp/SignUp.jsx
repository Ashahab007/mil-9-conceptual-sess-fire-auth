import React, { useContext } from "react";
import { Link } from "react-router";
import { valueContext } from "../../Root/Root";

const SignUp = () => {
  // 1.5 use the useContext and import the valueContext in useContext and set it into the same name variable
  const { handleSignUp } = useContext(valueContext);
  console.log(handleSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    console.log(name, email, password, confirmpassword);
    // 3.0 there is password validation using regular expression in conceptual session it is skipped here. I will do it letter from conceptual session part-5 on 9:00 mins.

    // 1.6 Now call the handleSignUp thats created in 1.3 and pass the email, password. Now the account is created in Firebase
    handleSignUp(email, password);
  };
  return (
    <div className="flex flex-col max-w-md mx-auto mt-10 p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
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
              type="submit"
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
              className="hover:underline text-violet-400 ml-2"
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
