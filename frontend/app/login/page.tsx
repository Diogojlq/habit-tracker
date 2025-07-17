"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/user/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("Welcome back! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1200);
      } else {
        const data = await res.json();
        setMessage(data.error || "Login failed.");
      }
    } catch (err) {
      setMessage("An error occurred: " + err);
    }
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-customColor3">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-customColor4 backdrop-blur border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back!</h2>
        <p className="text-center text-black mb-8">Sign in to continue tracking your habits</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 rounded border border-gray-300 text-black"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 rounded bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
        {message && (
          <p className="mt-6 text-center text-white font-semibold animate-fade-in">
            {message}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center">
          <span className="text-black">Dont have an account?</span>
          <a
            href="/register"
            className="mt-1 text-blue-600 hover:underline font-semibold transition"
          >
            Create one now
          </a>
        </div>
      </div>
    </main>
  );
}