import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";
import sectionBackground from "../../public/section-background.png";
import videoThumbnail from "../../public/conference-video-thumbnail.jpg";
import ButtonWithIcon from "@/components/ui/buttonWithIcon";
import { ButtonIcon } from "@/components/ui/buttonIcon";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import InfoTabs from "@/components/InfoTabs";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home - Mining Expo Namibia 2024 </title>
      </Head>
      <main className="flex flex-col">
        <Hero />
        {/* About section */}
        <section className="flex items-center justify-center px-24 py-16 gap-48 w-full h-[60vh]">
          {/* container for image */}
          <div className="absolute top-auto w-full h-full -z-10 ">
            <Image
              src={sectionBackground}
              alt="Background image"
              quality={100}
              fill
              placeholder="blur"
              sizes="100vw"
              className=" object-cover brightness-50 contrast-[5]"
            />
          </div>
          {/* gradient layer */}
          <div className="absolute h-full w-full z-[-9] bg-gradient-to-b from-expoBlue to-expoBlue/70"></div>
          {/* Text */}
          <div className="flex flex-col items-start justify-start gap-6 w-[40%] line-clamp-3 text-white h-full px-4">
            <h3 className=" font-rubik text-lg text-expoOrange">
              Mining Exhibition
            </h3>
            <h2 className="font-poppins text-5xl font-bold">
              Welcome to the Mining Expo & Conference <br /> 2024
            </h2>
            <p className="text-base font-rubik text-white/80">
              The 11th edition of the Mining Expo & Conference will be held from
              07 – 08 August, 2024 at the Windhoek Show Grounds, bringing the
              entire extractives sector under one roof.
            </p>
            <ButtonWithIcon>Registration</ButtonWithIcon>
          </div>
          {/* Video */}
          <div className="flex items-center justify-center w-[40%] h-fit">
            <div className="absolute">
              <ButtonIcon />
            </div>
            <Image
              src={videoThumbnail}
              alt="Mining Expo Video Thumbnail"
              className="rounded-xl"
            />
          </div>
        </section>
        <InfoTabs />
      </main>
    </>
  );
}