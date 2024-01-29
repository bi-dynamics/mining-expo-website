import Image from "next/image";
import React from "react";
import background from "../../public/hero-background.jpg";

export default function Hero() {
  return (
    <section className=" flex items-start justify-center w-full h-[100vh]">
      {/* container for image */}
      <div className="absolute top-0 w-full h-full -z-10 ">
        <Image
          src={background}
          alt="Background image"
          quality={100}
          fill
          placeholder="blur"
          sizes="100vw"
          className=" object-cover"
        />
      </div>
      {/* gradient layer */}
      <div className="absolute h-full w-full z-[-9] bg-gradient-to-b from-blue-950 via-transparent to-blue-950 opacity-70 brightness-90"></div>
      {/* content container */}
      <div className="h-[90vh] w-full mt-32 flex items-center justify-center ">
        {/* Expo logo */}
        <section className="flex flex-row h-fit w-fit">
          <div className="flex flex-col gap-2">
            <span>Mining</span>
            <span></span>
            <span>Expo</span>
            <span>& Conference</span>
            <span>CHAMBER OF MINES NAMIBIA</span>
          </div>
          <div className="flex items-center justify-center">
            <span>24</span>
          </div>
        </section>
        {/* Expo Info */}
        <section></section>
      </div>
    </section>
  );
}
