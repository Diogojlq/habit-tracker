import Link from "next/link";

export default function AuthButtons() {
  const buttonClass =
    "relative overflow-hidden group w-full md:w-auto p-3 rounded font-bold text-white";

  const gradientBg =
    "absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-300 translate-x-full group-hover:translate-x-0";

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-sm mx-auto">
      {/* Register Button */}
      <Link href="/register" className="w-full md:w-auto">
        <button className={`${buttonClass} bg-blue-600`}>
          <span className={gradientBg}></span>
          <span className="relative z-10">Register</span>
        </button>
      </Link>
      <Link href="/login" className="w-full md:w-auto">
        <button className={`${buttonClass} bg-blue-600`}>
          <span className={gradientBg}></span>
          <span className="relative z-10">Login</span>
        </button>
      </Link>
    </div>
  );
}
