import React from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 border border-gray-200 rounded">
        <h2 className="text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded bg-blue-600 text-white font-bold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
