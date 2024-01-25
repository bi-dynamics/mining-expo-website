import Image from "next/image";
import React from "react";
import background from "../../public/hero-background.jpg";

export default function Hero() {
  return (
    <section>
      <div className="absolute w-full h-full z-[1] bg-gradient-to-b from-blue-950 via-transparent to-blue-950 opacity-75 brightness-90"></div>
      <Image
        src={background}
        alt="Mountains"
        quality={100}
        fill
        sizes="100vw"
        className=" z-0 object-cover bg-gradient-to-r from-cyan-500 to-blue-500"
      />
    </section>
  );
}
