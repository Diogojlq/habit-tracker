import React, { useState } from "react";

const daysOfWeekList = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export default function HabitForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    daily: true,
    daysOfWeek: [] as string[],
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, checked } = target;
    if (name === "daily") {
      setForm({ ...form, daily: checked, daysOfWeek: [] });
    } else if (name === "daysOfWeek") {
      const day = value;
      setForm((prev) => ({
        ...prev,
        daysOfWeek: checked
          ? [...prev.daysOfWeek, day]
          : prev.daysOfWeek.filter((d) => d !== day),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:8080/habits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          date: form.date ? new Date(form.date).toISOString() : undefined,
        }),
      });
      if (res.ok) {
        setMessage("Habit created successfully!");
        setForm({ name: "", date: "", daily: true, daysOfWeek: [] });
        setTimeout(() => {
          setMessage("");
          onClose();
        }, 1200);
      } else {
        const data = await res.json();
        setMessage(data.error || "Failed to create habit.");
      }
    } catch (err) {
      setMessage("An error occurred: " + err);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-300 ease-in-out animate-fade-in">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-white/90 text-black relative transform transition-all duration-300 ease-in-out scale-95 animate-popup">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Create a New Habit</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Habit Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded border border-gray-300"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 font-semibold">
              Start Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full p-2 rounded border border-gray-300"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="daily"
              name="daily"
              checked={form.daily}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="daily" className="font-semibold">
              Daily Habit
            </label>
          </div>
          {!form.daily && (
            <div>
              <span className="block mb-1 font-semibold">Select Days of the Week</span>
              <div className="grid grid-cols-2 gap-2">
                {daysOfWeekList.map((day) => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      name="daysOfWeek"
                      value={day}
                      checked={form.daysOfWeek.includes(day)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>
          )}
          <button
            type="submit"
            className="w-full p-2 rounded bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          >
            Create Habit
          </button>
        </form>
        {message && (
          <p className="mt-6 text-center text-blue-900 font-semibold animate-fade-in">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}