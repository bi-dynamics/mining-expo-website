"use client";
import Image from "next/image";
import React from "react";
import heroLogo from "../../public/hero-logo-2025.png";
import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import Link from "next/link";
import CountDownTimer from "./CountDownTimer";
import rmbSponsorLogo from "../../public/RMB_SPONSOR_LOGO_resize.webp";

export default function Hero() {
  return (
    <section className="relative flex items-start justify-center w-full h-full">
      {/* container for image */}
      <div className="absolute top-0 w-full h-full -z-10">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-hero_1440x960_resize.webp?alt=media&token=5481fd88-c1d3-43f6-9d0f-1d0d3b4985b2"
          alt="Background image"
          quality={40}
          fill={true}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhwCAABXRUJQVlA4WAoAAAAgAAAABQAAAwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLgAAANABAJ0BKgYABAADgFolAE6P4AK5NjEgAPzZW1eMXM6VIwZEPg8yqL6u6hDtoAA="
          loading="eager"
          sizes="100vw"
          className=" object-cover brightness-50 blur-[5px]"
        />
      </div>
      {/* gradient layer */}
      <div className="absolute h-full w-full z-[-9] bg-gradient-to-b from-blue-950 via-transparent to-blue-950 opacity-80"></div>
      {/* content container */}
      <div className="h-full w-full mt-32 flex flex-col items-center justify-center">
        {/* top half part content */}
        <div className="flex flex-wrap items-center justify-center gap-8 w-[90%] h-fit py-20 xl:py-28">
          {/* Expo logo */}
          <section className="flex shrink-0 h-full w-fit">
            <Image
              src={heroLogo}
              alt="hero image"
              quality={100}
              priority
              loading="eager"
              className=" object-cover h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
            />
          </section>
          {/* Expo Info */}
          <section className="w-fit h-full flex flex-col items-center justify-between gap-8">
            {/* Dates */}
            <div className="w-fit h-full flex flex-col items-start justify-center gap-4 p-2 font-rubik">
              <h3 className="flex flex-col items-start justify-center text-white text-sm md:text-3xl">
                <div className="flex items-center justify-center mb-2">
                  <Icon
                    icon="clarity:date-solid"
                    width="36"
                    height="36"
                    className="text-expoOrange mr-4"
                  />{" "}
                  <span className="font-bold mr-2">
                    Public Opening and Closing Times
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 md:text-base">
                  <div className="flex flex-col items-start justify-center ">
                    <span className="font-medium md:text-xl">
                      Tuesday, 5 August 2025
                    </span>
                    12h00 - 19h00
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="font-medium md:text-xl">
                      Wednesday, 6 August 2025
                    </span>
                    07h30 - 19h00
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="font-medium md:text-xl">
                      Thursday, 7 August 2025 (Final Day)
                    </span>
                    08h00 - 17h30
                  </div>
                </div>
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

            <Link
              href="/main-event-programme/registration-info"
              className="w-full"
            >
              <Button className="block xl:hidden w-full bg-expoOrange">
                Exhibitor Registration
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
        <CountDownTimer />
      </div>
    </section>
  );
}
