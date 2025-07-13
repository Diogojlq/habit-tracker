"use client";
import React, { useState } from "react";
import HabitForm from "../components/HabitForm";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  const [showHabitForm, setShowHabitForm] = useState(false);

  return (
    <div className="flex min-h-screen">      
      <Sidebar />
      <main>
          <h2 className="top-0 left-0 mt-4 ml-4 text-2xl font-bold">
            today&apos;s habits
          </h2>
        <div className="w-full max-w-2xl p-8 rounded-xl shadow-2xl bg-white/10 backdrop-blur border border-white/20">
          <h1 className="text-4xl font-bold text-center mb-4">Your Dashboard</h1>
          <p className="text-center mb-8">
            Welcome to your habit dashboard! Here you can track your progress, add new habits, and stay motivated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded-lg p-6 shadow flex flex-col items-center">
              <span className="text-2xl font-bold mb-2">Habits Tracked</span>
              <span className="text-5xl font-extrabold text-cyan-300">7</span>
            </div>
            <div className="bg-white/20 rounded-lg p-6 shadow flex flex-col items-center">
              <span className="text-2xl font-bold mb-2">Streak</span>
              <span className="text-5xl font-extrabold text-cyan-300">12</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <button
              className="px-6 py-2 rounded bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              onClick={() => setShowHabitForm(true)}
            >
              + Add New Habit
            </button>
            <HabitForm open={showHabitForm} onClose={() => setShowHabitForm(false)} />
          </div>
        </div>
      </main>
    </div>
  );
}
