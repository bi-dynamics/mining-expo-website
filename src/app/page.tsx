import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";
import AndradaLogo from "../../public/Andrada_logo_green-black_rgb.webp";
import ContinentalLogo from "../../public/Continental-Lithium-Africa.webp";
import RMBLogo from "../../public/RMB_Horizontal_Identity_RGB_Black.webp";
import ButtonWithIcon from "@/components/ui/buttonWithIcon";
import IframeVideoComponent from "@/components/IframeVideoComponent";
import Link from "next/link";
import dynamic from "next/dynamic";

//lazy load components
const ImageSlidesComponent = dynamic(() => import("@/components/ImageSlides"), {
  ssr: false,
});
const InfoTabsComponent = dynamic(() => import("@/components/InfoTabs"), {
  ssr: false,
});
const StatisticsInfoComponent = dynamic(
  () => import("@/components/StatisticsInfo"),
  {
    ssr: false,
  }
);
const MapsComponent = dynamic(() => import("@/components/Maps"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    default: "Home | MINING EXPO Namibia",
    absolute: "Home | MINING EXPO Namibia",
  },

  description:
    "Mining Expo & Conference 2024 07-08 August, 2024 Windhoek, Namibia located at the Windhoek Show Grounds. Public Entry is Free.. Stay Connected by Downloading our Mobile Application Welcome to the Mining Expo & Conf 2024 The 11th edition of the Mining Expo & Conference will be held from 07 – 08 August, 2024 at the Windhoek Show Grounds.",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Hero />
        {/* About section */}

        <section className="relative py-16 flex flex-col-reverse xl:flex-row items-center justify-center gap-16 w-full h-fit bg-[url('../../public/section-background.png')] bg-bottom">
          {/* gradient layer */}
          <div className="absolute h-full w-full z-[1] bg-gradient-to-b from-expoBlue to-expoBlue/80"></div>
          {/* Text */}
          <div className="z-[2] flex flex-col items-start justify-start gap-6 w-[90%] xl:w-[40%] line-clamp-3 text-white h-full px-4">
            <h3 className="font-rubik text-lg text-expoOrange">
              Mining Exhibition
            </h3>
            <h2 className="font-poppins text-3xl xl:text-5xl font-bold">
              Welcome to the Mining Expo & Conference <br /> 2024
            </h2>
            <p className="text-base font-rubik text-white/80">
              The 11th edition of the Mining Expo & Conference will be held from
              07 – 08 August, 2024 at the Windhoek Show Grounds, bringing the
              entire extractives sector under one roof.
            </p>
            <Link
              href="/main-event-programme/registration-info"
              className="w-fit"
            >
              <ButtonWithIcon>Exhibitor Registration</ButtonWithIcon>
            </Link>
          </div>
          {/* Video */}

          <IframeVideoComponent />
        </section>
        <InfoTabsComponent />
        <ImageSlidesComponent />

        <StatisticsInfoComponent />
        {/* Sponsor Section */}
        {/* <section className="flex items-center justify-center bg-white">
          
          <div className="flex flex-col items-center justify-center w-[80%] mx-auto gap-8 py-8">
            <h2 className="font-poppins text-2xl xl:text-5xl font-bold text-expoBlue text-center">
              Proudly Sponsored By
            </h2>
            <div className="flex items-center justify-center gap-4 xl:flex-row flex-wrap">
              <Image
                src={RMBLogo}
                alt="RMB logo"
                className="h-20 sm:h-32 w-auto xl:h-72"
              />
              <Image
                src={AndradaLogo}
                alt="Andrada logo"
                className="h-24  sm:h-36 w-auto xl:h-72"
              />
              <Image
                src={ContinentalLogo}
                alt="Continental logo"
                className="h-20  sm:h-32 w-auto xl:h-72"
              />
            </div>
          </div>
        </section> */}
        <MapsComponent />
      </main>
    </>
  );
}
