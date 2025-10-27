import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg text-center">
        {/* Logo */}
        <img
          src="https://cdn.shopify.com/s/files/1/0956/9624/files/banarasee_logo_0f8f1ab0-bed4-497c-9de0-f8a502cc8f76_200x60@2x.png?v=1690955608.webp"
          alt="Banarasee Logo"
          className="mx-auto mb-6 w-28 sm:w-32 md:w-20"
        />

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Sign in
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-6">
          Choose how you'd like to sign in
        </p>

        {/* Sign in with */}
        <button className="w-full bg-gray-900 text-white py-2 sm:py-3 rounded-lg mb-3 hover:bg-gray-800 transition">
          Sign in with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="grow border-gray-300" />
        </div>

        {/* Email input */}
        <div className="text-left mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-medium mb-1">
            Enter your email and we'll send you a verification code
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Continue button */}
        <button className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition">
          Continue
        </button>

        {/* Terms of Service */}
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-6 leading-snug">
          By continuing, you agree to our{" "}
          <span className="text-purple-600 hover:underline cursor-pointer">
            Terms of service
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
