export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 space-y-16 min-h-screen bg-base-200 text-base-content">
      
      {/* Hero */}
      <section className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          Develop a better life with Habit Tracker
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Track, improve and conquer your routine with a simple and powerful app.
        </p>
        <button className="btn btn-primary btn-lg mt-4">Começar agora</button>
      </section>

      {/* Preview visual */}
      <section className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-xl rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Hábito #{i + 1}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Mark as done, see progress, and keep the momentum going.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="text-center space-y-4 max-w-2xl">
        <h2 className="text-2xl font-semibold">Made for your everyday life</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
            <li>✅ Simple and quick to use</li>
            <li>🌙 Dark mode support</li>
            <li>📊 See your progress</li>
          </ul>
      </section>
    </main>
  );
}
