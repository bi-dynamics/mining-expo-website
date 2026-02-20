"use client";
import React, { useState, useEffect, useMemo } from "react";

function CountDownTimer() {
  const targetDate = useMemo(() => new Date("08/07/2024 07:30:00"), []);

  // Calculate initial difference and determine if countdown should end
  const initialDifference = targetDate.getTime() - new Date().getTime();
  const initialEndCountdown = initialDifference <= 0;

  const [endCountdown, setEndCountdown] = useState(initialEndCountdown);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (endCountdown) {
      return; // If already ended, no need to set up interval
    }

    const interval = setInterval(() => {
      const dateNow = new Date();
      const difference = targetDate.getTime() - dateNow.getTime();

      const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(daysLeft);

      const hoursLeft = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hoursLeft);

      const minutesLeft = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(minutesLeft);

      const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(secondsLeft);

      if (difference <= 0) {
        setEndCountdown(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, endCountdown]);
  return (
    <section className="w-full h-fit bg-expoOrange flex items-center justify-center py-8">
      {endCountdown ? (
        ""
      ) : (
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-8 font-rubik text-white font-bold">
          {/* Days */}
          <span className="h-full w-fit flex flex-col items-center justify-center text-4xl gap-3">
            {days}
            {days == 1 ? (
              <p className="text-base font-bold">Day</p>
            ) : (
              <p className="text-base font-bold">Days</p>
            )}
          </span>

          {/* Hours */}
          <span className="h-full w-fit flex flex-col items-center justify-center text-4xl gap-3">
            {hours}
            {hours == 1 ? (
              <p className="text-base font-bold">Hour</p>
            ) : (
              <p className="text-base font-bold">Hours</p>
            )}
          </span>

          {/* Minutes */}
          <span className="h-full w-fit flex flex-col items-center justify-center text-4xl gap-3">
            {minutes}
            <p className="text-base font-bold">Minutes</p>
          </span>

          {/* Seconds */}
          <span className="h-full w-fit flex flex-col items-center justify-center text-4xl gap-3">
            {seconds}
            <p className="text-base font-bold">Seconds</p>
          </span>
        </div>
      )}
    </section>
  );
}

export default CountDownTimer;
