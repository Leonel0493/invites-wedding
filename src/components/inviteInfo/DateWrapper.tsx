import React, { useEffect, useState } from "react";

interface DateWrapperProps {
  targetDate: Date;
}

const DateWrapper: React.FC<DateWrapperProps> = ({ targetDate }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect");
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const timeRemaining = targetDate.getTime() - now;

      if (timeRemaining > 0) {
        setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(
          Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
        );
        setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    // Inicia el cálculo de tiempo restante al montar el componente
    calculateTimeRemaining();

    // Actualiza el cálculo cada segundo
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      id="date-wrapper"
      className="w-full h-1/5 bg-white flex justify-center items-center py-8"
    >
      {/* date */}
      <div
        id="target-date"
        className="h-full w-2/5 flex flex-col justify-center items-end text-3xl pr-5 font-monserrat"
      >
        <p>Sábado 7 de diciembre de 2024</p>
      </div>
      {/* end date */}

      {/* ornament separator */}
      <div
        id="ornament-separator"
        className="h-full w-1/5 flex flex-col justify-center items-center"
      >
        <img
          src="/src/components/inviteInfo/Ornament.svg"
          className="size-32"
        />
      </div>
      {/* end ornament separator */}

      {/* timer */}
      <div
        id="timer"
        className="h-full w-2/5 flex flex-col justify-center items-start text-5xl font-monserrat pl-5"
      >
        {/* countdown */}
        <div id="countdown" className="flex flex-row space-x-7">
          {/* days */}
          <div
            id="day-wrapper"
            className="w-auto flex flex-col justify-center items-center"
          >
            <div id="days">{days}</div>
            <p className="text-4xl font-missFajardose">Días</p>
          </div>
          {/* end days */}

          {/* hours */}
          <div
            id="hours-wrapper"
            className="w-auto flex flex-col justify-center items-center"
          >
            <div id="hours">{hours}</div>
            <p className="text-4xl font-missFajardose">Horas</p>
          </div>
          {/* end hours */}

          {/* minutes */}
          <div
            id="minutes-wrapper"
            className="w-auto flex flex-col justify-center items-center"
          >
            <div id="minutes">{minutes}</div>
            <p className="text-4xl font-missFajardose">Minutos</p>
          </div>
          {/* end minutes */}

          {/* seconds */}
          <div
            id="seconds-wrapper"
            className="w-auto flex flex-col justify-center items-center"
          >
            <div id="seconds">{seconds}</div>
            <p className="text-4xl font-missFajardose">Segundos</p>
          </div>
          {/* end seconds */}
        </div>
        {/* end countdown */}
      </div>
      {/* end timer */}
    </div>
  );
};

export default DateWrapper;
