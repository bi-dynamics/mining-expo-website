"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import backgroundImage from "../../public/mining-expo-hero_1440x960_resize.webp";
import rmbSponsorLogo from "../../public/RMB_SPONSOR_LOGO.png";
import heroLogo from "../../public/hero-logo.png";
import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <section className="relative flex items-start justify-center w-full h-full">
      {/* container for image */}
      <div className="absolute top-0 w-full h-full -z-10">
        <Image
          src={backgroundImage}
          alt="Background image"
          quality={40}
          fill
          placeholder="blur"
          loading="eager"
          sizes="100vw"
          className=" object-cover brightness-75 blur-[5px]"
        />
      </div>
      {/* gradient layer */}
      <div className="absolute h-full w-full z-[-9] bg-gradient-to-b from-blue-950 via-transparent to-blue-950 opacity-80"></div>
      {/* content container */}
      <div className="h-full w-full mt-32 flex flex-col items-center justify-center">
        {/* top half part content */}
        <div className="flex flex-wrap items-center justify-center gap-8 w-[100%] h-fit py-20 xl:py-28">
          {/* Expo logo */}
          <section className="flex shrink-0 h-full w-fit">
            <Image
              src={heroLogo}
              alt="hero image"
              quality={100}
              loading="eager"
              className=" object-cover shrink-0"
            />
          </section>
          {/* Expo Info */}
          <section className="w-fit h-full flex flex-col items-center justify-between gap-8">
            {/* Dates */}
            <div className="w-fit h-full flex flex-col items-start justify-center gap-2 p-2 font-rubik">
              <h3 className="flex items-center justify-center text-white text-sm md:text-3xl">
                <Icon
                  icon="clarity:date-solid"
                  width="36"
                  height="36"
                  className="text-expoOrange mr-4"
                />{" "}
                <span className="font-bold mr-2">Date:</span>7 & 8 August 2024
              </h3>
              <h3 className="flex items-center justify-center text-white text-sm md:text-3xl">
                <Icon
                  icon="mdi:location"
                  width="36"
                  height="36"
                  className="text-expoOrange mr-4"
                />
                <span className="font-bold mr-2">Venue:</span>
                Windhoek Show Grounds
              </h3>
              <h3 className="flex items-center justify-center gap-4 text-white text-sm md:text-3xl">
                <Icon
                  icon="material-symbols:info"
                  width="36"
                  height="36"
                  className="text-expoOrange"
                />
                Free Public Entry
              </h3>
            </div>

            <Link href="/delegate-registration" className="w-full">
              <Button className="block xl:hidden w-full bg-expoOrange">
                Registration
              </Button>
            </Link>
            {/* sponsor logo */}
            <div className="relative xl:top-24 top-20 w-full h-full flex items-center justify-center xl:justify-end">
              <Image src={rmbSponsorLogo} alt="RMB Logo" height={100} />
            </div>
          </section>
        </div>
        {/* bottom part of content */}
        {/* countdown section */}
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
      </div>
    </section>
  );
}
