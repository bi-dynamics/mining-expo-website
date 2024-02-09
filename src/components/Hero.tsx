"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import backgroundImage from "../../public/mining-expo-hero.webp";
import rmbSponsorLogo from "../../public/RMB_SPONSOR_LOGO.png";
import { Icon } from "@iconify/react";

export default function Hero() {
  // Countdown timer logic
  const [endCountdown, setEndCountdown] = useState(false);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/07/2024 07:30:00");

    const interval = setInterval(() => {
      const dateNow = new Date();
      const difference = target.getTime() - dateNow.getTime();

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

      if (
        daysLeft <= 0 &&
        hoursLeft <= 0 &&
        minutesLeft <= 0 &&
        secondsLeft <= 0
      ) {
        setEndCountdown(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-start justify-center w-full h-full">
      {/* container for image */}
      <div className="absolute top-0 w-full h-full -z-10">
        <Image
          src={backgroundImage}
          alt="Background image"
          quality={100}
          fill
          placeholder="blur"
          sizes="100vw"
          className=" object-cover brightness-75 blur-[5px]"
        />
      </div>
      {/* gradient layer */}
      <div className="absolute h-full w-full z-[-9] bg-gradient-to-b from-blue-950 via-transparent to-blue-950 opacity-80"></div>
      {/* content container */}
      <div className="h-full w-full mt-32 flex flex-col items-center justify-center">
        {/* top half part content */}
        <div className="flex flex-row items-center justify-center gap-8 w-full h-full px-24 py-28">
          {/* Expo logo */}
          <section className="flex flex-row h-fit w-fit p-2 gap-4">
            {/* Left side with text */}
            <div className="flex flex-col gap-2 font-poppins items-center justify-center">
              <span className="text-8xl font-bold text-gray-200 tracking-tighter mb-2">
                Mining
              </span>
              <span className="w-full h-1 bg-gray-300"></span>
              <span className="text-9xl font-bold text-expoOrange tracking-tighter ">
                Expo
              </span>
              <span className=" text-[44px] font-bold tracking-tight text-gray-300">
                & Conference
              </span>
              <span className=" text-xl font-bold tracking-tight text-black bg-expoOrange px-2">
                CHAMBER OF MINES NAMIBIA
              </span>
            </div>
            {/* Right side with number */}
            <div className="flex items-center justify-center">
              <span className="font-poppins text-transparent text-[156px] tracking-tight py-4 px-8 border-[12px] border-expoOrange bg-gradient-to-br from-[#031236] via-[#08329D] to-[#1151F2] bg-clip-text">
                24
              </span>
            </div>
          </section>
          {/* Expo Info */}
          <section className="w-fit h-full flex flex-col items-start justify-between gap-4">
            {/* Dates */}
            <div className="w-fit h-full flex flex-col items-start justify-center gap-2 p-2 font-rubik">
              <h3 className="flex items-center justify-center text-white text-3xl">
                <Icon
                  icon="clarity:date-solid"
                  width="36"
                  height="36"
                  className="text-expoOrange mr-4"
                />{" "}
                <span className="font-bold mr-2">Date:</span>7 & 8 August 2024
              </h3>
              <h3 className="flex items-center justify-center text-white text-3xl">
                <Icon
                  icon="mdi:location"
                  width="36"
                  height="36"
                  className="text-expoOrange mr-4"
                />
                <span className="font-bold mr-2">Venue:</span>
                Windhoek Show Grounds
              </h3>
              <h3 className="flex items-center justify-center gap-4 text-white text-3xl">
                <Icon
                  icon="material-symbols:info"
                  width="36"
                  height="36"
                  className="text-expoOrange"
                />
                Free Public Entry
              </h3>
            </div>
            {/* sponsor logo */}
            <div className="relative top-36 w-full h-full flex items-center justify-end">
              <Image src={rmbSponsorLogo} alt="RMB Logo" height={100} />
            </div>
          </section>
        </div>
        {/* bottom part of content */}
        {/* countdown section */}
        <section className="w-full h-[20vh] bg-expoOrange flex items-center justify-center py-8">
          {endCountdown ? (
            ""
          ) : (
            <div className="w-full h-full flex items-center justify-center gap-8 font-rubik text-white font-bold">
              {/* Days */}
              <span className="h-full w-fit flex flex-col items-center justify-center text-4xl">
                {days}
                {days == 1 ? (
                  <p className="text-base font-bold">Day</p>
                ) : (
                  <p className="text-base font-bold">Days</p>
                )}
              </span>
              <span className="bg-gray-300 h-5/6 w-px"></span>
              {/* Hours */}
              <span className="h-full w-fit flex flex-col items-center justify-center text-4xl">
                {hours}
                {hours == 1 ? (
                  <p className="text-base font-bold">Hour</p>
                ) : (
                  <p className="text-base font-bold">Hours</p>
                )}
              </span>
              <span className="bg-gray-300 h-5/6 w-px"></span>
              {/* Minutes */}
              <span className="h-full w-fit flex flex-col items-center justify-center text-4xl">
                {minutes}
                <p className="text-base font-bold">Minutes</p>
              </span>
              <span className="bg-gray-300 h-5/6 w-px"></span>
              {/* Seconds */}
              <span className="h-full w-fit flex flex-col items-center justify-center text-4xl">
                {seconds}
                <p className="text-base font-bold">Seconds</p>
              </span>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
