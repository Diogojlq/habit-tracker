export default function Logo({ size = 60 }: { size?: number }) {
  return (
    <svg
      width={size * 3.5}
      height={size}
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Habit Tracker"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <style>
          {`.label {
              font-family: Inter, sans-serif;
              font-weight: 600;
              font-size: 20px;
              fill: #1e3a8a;
            }
            .check {
              fill: url(#grad);
            }`}
        </style>
      </defs>

      <g transform="translate(10, 15)">
        <rect x="0" y="0" width="30" height="30" rx="6" fill="#e0e7ff" />
        <path
          className="check"
          d="M8 16l5 5 10-10"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="url(#grad)"
          fill="none"
        />
      </g>

      <text x="50" y="35" className="label">Habit Tracker</text>
    </svg>
  );
}
