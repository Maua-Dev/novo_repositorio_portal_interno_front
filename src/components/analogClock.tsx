import { useContext, useMemo, useState, type ChangeEvent } from "react";
import { ThemeContext } from "../contexts/themeContext";

type Time = {
  hour: number;
  minute: number;
};

type Dragging = "hour" | "minute" | null;

const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 120;

export default function AnalogClock() {
  const { darkTheme } = useContext(ThemeContext);

  const today = new Date();
  const [time, setTime] = useState<Time>(() => {
    return {
      hour: today.getHours(),
      minute: today.getMinutes(),
    };
  });

  const handleInputMinutes = (e: ChangeEvent<HTMLInputElement>) => {
    setTime({hour: time.hour, minute: Number(e.target.value)})
  };

  const handleInputHours = (e: ChangeEvent<HTMLInputElement>) => {
    setTime({hour: Number(e.target.value), minute: time.minute})
  };
  
  const [dragging, setDragging] = useState<Dragging>(null);

  /*
   * Minutos:
   *
   * 00 = 0°
   * 15 = 90°
   * 30 = 180°
   * 45 = 270°
   */
  const minuteAngle = time.minute * 6;

  /*
   * Horas:
   *
   * Cada hora vale 30°.
   * Os minutos fazem o ponteiro avançar gradualmente:
   *
   * 10:00 = 300°
   * 10:30 = 315°
   *
   * O % 12 permite trabalhar com horários de 24h.
   */
  const hourAngle =
    (time.hour % 12) * 30 + time.minute * 0.5;

  function polarToCartesian(angle: number, length: number) {
    const rad = ((angle - 90) * Math.PI) / 180;

    return {
      x: CENTER + Math.cos(rad) * length,
      y: CENTER + Math.sin(rad) * length,
    };
  }

  /**
   * Calcula o ângulo do ponteiro a partir da posição do mouse/touch.
   */
  function getAngle(
    e: React.PointerEvent<SVGSVGElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      CENTER;

    const y =
      e.clientY -
      rect.top -
      CENTER;

    let angle =
      Math.atan2(y, x) *
      (180 / Math.PI);

    angle += 90;

    if (angle < 0) {
      angle += 360;
    }

    return angle;
  }

  /**
   * Atualiza os minutos.
   */
  function updateMinute(
    e: React.PointerEvent<SVGSVGElement>
  ) {
    const angle = getAngle(e);

    const minute =
      Math.round(angle / 6) % 60;

    setTime((prev) => ({
      ...prev,
      minute,
    }));
  }

  /**
   * Atualiza a hora.
   *
   * O relógio visual possui 12 posições,
   * mas o estado interno utiliza 24 horas.
   *
   * Exemplo:
   *
   * 10h → 10
   * 22h → 22
   *
   * Se o horário atual for PM, mantemos o período.
   */
  function updateHour(
    e: React.PointerEvent<SVGSVGElement>
  ) {
    const angle = getAngle(e);

    const hour12 =
      Math.round(angle / 30) % 12;

    setTime((prev) => {
      const isPM = prev.hour >= 12;

      let hour = hour12;

      if (isPM) {
        hour += 12;
      }

      return {
        ...prev,
        hour,
      };
    });
  }

  /**
   * Decide qual ponteiro será manipulado.
   *
   * Se o clique estiver mais próximo do centro,
   * selecionamos o ponteiro das horas.
   *
   * Caso contrário, selecionamos o ponteiro dos minutos.
   */
  function handlePointerDown(
    e: React.PointerEvent<SVGSVGElement>
  ) {
    e.currentTarget.setPointerCapture(e.pointerId);

    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      CENTER;

    const y =
      e.clientY -
      rect.top -
      CENTER;

    const distance =
      Math.sqrt(x * x + y * y);

    /*
     * Ponteiro das horas tem 60px.
     * Ponteiro dos minutos tem 90px.
     *
     * Usamos 75px como região de decisão.
     */
    if (distance <= 75) {
      setDragging("hour");
      updateHour(e);
    } else {
      setDragging("minute");
      updateMinute(e);
    }
  }

  /**
   * Continua atualizando o ponteiro enquanto
   * o usuário mantém o mouse/touch pressionado.
   */
  function handlePointerMove(
    e: React.PointerEvent<SVGSVGElement>
  ) {
    if (!dragging) {
      return;
    }

    if (dragging === "hour") {
      updateHour(e);
    }

    if (dragging === "minute") {
      updateMinute(e);
    }
  }

  /**
   * Finaliza o arraste.
   */
  function handlePointerUp(
    e: React.PointerEvent<SVGSVGElement>
  ) {
    try {
      e.currentTarget.releasePointerCapture(
        e.pointerId
      );
    } catch {
      // Pointer capture pode não existir em alguns casos.
    }

    setDragging(null);
  }

  const minuteHand = useMemo(
    () =>
      polarToCartesian(
        minuteAngle,
        90
      ),
    [minuteAngle]
  );

  const hourHand = useMemo(
    () =>
      polarToCartesian(
        hourAngle,
        60
      ),
    [hourAngle]
  );

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`select-none touch-none ${
          dragging
            ? "cursor-grabbing"
            : "cursor-pointer"
        }`}
      >
        {/* Fundo do relógio */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="white"
          stroke="#333"
          strokeWidth={4}
        />

        {/* Números */}
        {[...Array(12)].map((_, i) => {
          const angle = i * 30;

          const pos =
            polarToCartesian(
              angle,
              105
            );

          return (
            <text
              key={i}
              x={pos.x}
              y={pos.y + 6}
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
              className="select-none"
            >
              {i === 0 ? 12 : i}
            </text>
          );
        })}

        {/* Ponteiro das horas */}
        <line
          x1={CENTER}
          y1={CENTER}
          x2={hourHand.x}
          y2={hourHand.y}
          stroke="black"
          strokeWidth={6}
          strokeLinecap="round"
        />

        {/* Ponteiro dos minutos */}
        <line
          x1={CENTER}
          y1={CENTER}
          x2={minuteHand.x}
          y2={minuteHand.y}
          stroke="#2563eb"
          strokeWidth={4}
          strokeLinecap="round"
        />

        {/* Centro */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={6}
          fill="#2563eb"
        />
      </svg>

      {/* Display digital */}
      <div className="flex w-full items-center justify-center gap-1 text-4xl font-bold">
        {/* Hora */}
        <input
        type="text" onChange={handleInputHours} value={String(time.hour)}
          className={`${
            darkTheme
              ? "bg-[#484848] text-white"
              : "bg-gray-300 text-black"
          } md:w-16 md:h-16 text-center rounded-lg focus:outline-none transition-all duration-300`}
        >
          {/* {String(time.hour).padStart(
            2,
            "0"
          )} */}
        </input>

        {/* : */}
        <div
          className={`${
            darkTheme
              ? "text-[#484848]"
              : "text-gray-300"
          } flex h-full items-center p-3 text-5xl transition-all duration-300`}
        >
          <p className="flex">
            :
          </p>
        </div>

        {/* Minuto */}
        <input
        type="text" onChange={handleInputMinutes} value={String(time.minute) === "0" ? "00" : String(time.minute)}
          className={`${
            darkTheme
              ? "bg-[#484848] text-white"
              : "bg-gray-300 text-black"
          } md:w-16 md:h-16 text-center rounded-lg focus:outline-none transition-all duration-300`}
        >
          {/* {String(time.minute).padStart(
            2,
            "0"
          )} */}
        </input>
      </div>
    </div>
  );
}
