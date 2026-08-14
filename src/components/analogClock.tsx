import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";

type Time = {
  hour: number;
  minute: number;
};

const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 120;

export default function AnalogClock() {

    const { darkTheme } = useContext(ThemeContext);

  const [time, setTime] = useState<Time>({
    hour: 10,
    minute: 15,
  });

  const minuteAngle = time.minute * 6;
  const hourAngle = time.hour * 30 + time.minute * 0.5;

  function polarToCartesian(angle: number, length: number) {
    const rad = ((angle - 90) * Math.PI) / 180;

    return {
      x: CENTER + Math.cos(rad) * length,
      y: CENTER + Math.sin(rad) * length,
    };
  }

  function updateMinute(
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - CENTER;
    const y = e.clientY - rect.top - CENTER;

    let angle = Math.atan2(y, x) * (180 / Math.PI);

    angle += 90;

    if (angle < 0) angle += 360;

    const minute = Math.round(angle / 6) % 60;

    setTime((prev) => ({
      ...prev,
      minute,
    }));
  }

  const minuteHand = useMemo(
    () => polarToCartesian(minuteAngle, 90),
    [minuteAngle]
  );

  const hourHand = useMemo(
    () => polarToCartesian(hourAngle, 60),
    [hourAngle]
  );

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <svg
        width={SIZE}
        height={SIZE}
        onMouseMove={(e) => {
          if (e.buttons === 1) updateMinute(e);
        }}
        onMouseDown={updateMinute}
        className="cursor-pointer select-none"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="white"
          stroke="#333"
          strokeWidth={4}
        />

        {[...Array(12)].map((_, i) => {
          const angle = i * 30;
          const pos = polarToCartesian(angle, 105);

          return (
            <text
              key={i}
              x={pos.x}
              y={pos.y + 6}
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
            >
              {i === 0 ? 12 : i}
            </text>
          );
        })}

        <line
          x1={CENTER}
          y1={CENTER}
          x2={hourHand.x}
          y2={hourHand.y}
          stroke="black"
          strokeWidth={6}
          strokeLinecap="round"
        />

        <line
          x1={CENTER}
          y1={CENTER}
          x2={minuteHand.x}
          y2={minuteHand.y}
          stroke="#2563eb"
          strokeWidth={4}
          strokeLinecap="round"
        />

        <circle
          cx={CENTER}
          cy={CENTER}
          r={6}
          fill="#2563eb"
        />
      </svg>

      <div className="flex w-full justify-center items-center text-4xl font-bold gap-1">
        <div className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-300 text-black`} rounded-lg p-3 transition-all duration-300`}>
            {String(time.hour).padStart(2, "0")}
        </div>

        <div className={`${darkTheme ? `text-[#484848]` : `text-gray-300`} flex h-full items-center text-5xl p-3 transition-all duration-300`}>
            <p className="flex">:</p>
        </div>
        
        <div className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-300 text-black`} rounded-lg p-3 transition-all duration-300`}>
            {String(time.minute).padStart(2, "0")}
        </div>
      </div>

    </div>
  );
}