function CircularScore({ score }) {
  const radius = 80;
  const stroke = 10;

  const normalizedRadius = radius - stroke * 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex justify-center">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background */}

        <circle
          stroke="#334155"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress */}

        <circle
          stroke="#22c55e"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: "stroke-dashoffset .8s",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-white text-3xl font-bold"
        >
          {score}%
        </text>
      </svg>
    </div>
  );
}

export default CircularScore;
