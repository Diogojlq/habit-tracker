import Image from "next/image";
import CallToActionButton from "./components/CallToActionButton";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
    <Header ></Header>
    <main className="flex flex-col items-center justify-center px-6 py-12 space-y-16 min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full max-w-6xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Develop a better life with Habit Tracker
          </h1>
          <p className="text-lg text-white/80">
            Track, improve and conquer your routine with a simple and powerful app.
          </p>
          < CallToActionButton />
        </div>

        <div className="flex justify-center">
          <Image
            src="/healthy-habits-illustration.png"
            alt="Healthy habits illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-xl"
            priority
            ></Image>
        </div>
      </section>

      <section className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-xl rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Habit #{i + 1}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Mark as done, see progress, and keep the momentum going.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center space-y-4 max-w-2xl">
        <h2 className="text-2xl font-semibold">Made for your everyday life</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
            <li>✅ Simple and quick to use</li>
            <li>🌙 Dark mode support</li>
            <li>📊 See your progress</li>
          </ul>
      </section>
    </main>
    </div>
  );
}
