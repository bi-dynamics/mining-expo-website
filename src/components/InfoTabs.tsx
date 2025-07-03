"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const InfoTabs = () => {
  const [tab, setTab] = useState(2);
  const renderSwitch = (tab: number) => {
    switch (tab) {
      case 1:
        return (
          <>
            {/* Image carousel */}
            <div className="flex items-center justify-start w-full h-[70%] xl:h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-about.webp?alt=media&token=1f55da11-3bf0-4e3c-aeb0-356a1286b3e6')] bg-cover bg-top duration-300 transition-all">
              {/* gradient layer */}
              <div className="h-full w-full z-[1] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent backdrop-filter backdrop-brightness-50"></div>
              {/* Content */}
              <div className="absolute h-fit w-full z-[2] flex items-center justify-start gap-4">
                {/* Orange tag */}
                <div className="w-12 h-52 bg-expoOrange hidden sm:block"></div>
                <div className="font-rubik flex flex-col gap-4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-3xl lg:text-5xl text-white font-bold">
                    Mining Expo 2024
                  </h2>
                  <p className="text-lg text-white/80 font-medium">
                    The Chamber of Mines will be hosting its 11th Mining Expo &
                    Conference on the 07th & 08th August 2024 at the Windhoek
                    Show Grounds. RMB is the proud sponsor and title partner of
                    this event, which includes the Mining Conference, Supplier’s
                    Platform, Business 2 Business networking for exhibitors and
                    the annual networking cocktail function.
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            {/* Image carousel */}
            <div className="flex items-center justify-start w-full h-[100%] xl:h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-event-theme.webp?alt=media&token=05d47b71-5c4f-45c7-821f-8f1f53c9a07c')] bg-cover bg-center duration-300 transition-all">
              {/* Content */}
              <div className="absolute h-fit w-[90%] mx-auto z-[2] flex items-center justify-start sm:gap-4">
                {/* Orange tag */}
                <div className="w-6 sm:w-12 h-52 bg-expoOrange"></div>
                <div className="font-rubik flex flex-col gap-4 4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-3xl lg:text-5xl text-white font-bold">
                    Mining Conference 2025 Theme
                  </h2>
                  <p className="text-lg text-white/80 font-medium">
                    “Mining for Namibia&apos;s Future: Job Creation, Local
                    Empowerment, and Economic Transformation”
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Image carousel */}
            <div className="flex items-center justify-start w-full h-[70%] xl:h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Foil-and-gas-sector.webp?alt=media&token=fa29dc9a-983d-403f-a352-13358056237f')] bg-cover bg-center duration-300 transition-all">
              {/* gradient layer */}
              <div className="h-full w-full z-[1] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent backdrop-filter backdrop-brightness-50"></div>
              {/* Content */}
              <div className="absolute h-fit w-full z-[2] flex items-center justify-start gap-4">
                {/* Orange tag */}
                <div className="w-12 h-52 bg-expoOrange hidden sm:block"></div>
                <div className="font-rubik flex flex-col gap-4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-3xl lg:text-5xl text-white font-bold">
                    New Sector: Oil & Gas
                  </h2>
                  <p className="text-lg text-white/80 font-medium">
                    The Chamber is looking forward to hosting another jam packed
                    and exciting event that will look to exploit the new
                    business opportunities from a growing mining industry, along
                    with the wider inclusion of extractives through Namibia’s
                    oil and gas industry
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            {/* Image carousel */}
            <div className="flex items-center justify-start w-full h-[70%] xl:h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-about.webp?alt=media&token=1f55da11-3bf0-4e3c-aeb0-356a1286b3e6')] bg-cover bg-top transition-all">
              {/* gradient layer */}
              <div className="h-full w-full z-[1] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent"></div>
              {/* Content */}
              <div className="absolute h-fit w-full z-[2] flex items-center justify-start gap-4">
                {/* Orange tag */}
                <div className="w-12 h-52 bg-expoOrange"></div>
                <div className="font-rubik flex flex-col gap-4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-3xl lg:text-5xl text-white font-bold">
                    Mining Expo 2024
                  </h2>
                  <p className="text-lg text-white/80 font-medium">
                    The Chamber of Mines will be hosting its 11th Mining Expo &
                    Conference on the 07th & 08th August 2024 at the Windhoek
                    Show Grounds. RMB is the proud sponsor and title partner of
                    this event, which includes the Mining Conference, Supplier’s
                    Platform, Business 2 Business networking for exhibitors and
                    the annual networking cocktail function.
                  </p>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <section className="flex flex-col py-0 gap-0 h-[90dvh] w-full bg-expoBlue">
      {/* Heading and buttons */}
      <div className="flex flex-col gap-0 mx-auto w-[90%] xl:px-16 items-start justify-start">
        {/* gradient layer */}
        <div className="h-[90dvh] w-full absolute left-0 z-[2] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent backdrop-filter backdrop-brightness-50"></div>

        {/* <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => setTab(1)}
            className={
              tab === 1
                ? "bg-expoOrange hover:bg-expoOrange"
                : "bg-expoOrange/60 hover:bg-expoOrange/80 active:bg-expoOrange"
            }
          >
            ABOUT
          </Button>
          <Button
            onClick={() => setTab(2)}
            className={
              tab === 2
                ? "bg-expoOrange hover:bg-expoOrange"
                : "bg-expoOrange/60 hover:bg-expoOrange/80 active:bg-expoOrange"
            }
          >
            EVENT THEME
          </Button>
          <Button
            onClick={() => setTab(3)}
            className={
              tab === 3
                ? "bg-expoOrange hover:bg-expoOrange"
                : "bg-expoOrange/60 hover:bg-expoOrange/80 active:bg-expoOrange"
            }
          >
            OIL AND GAS SECTOR
          </Button>
        </div> */}
      </div>
      {renderSwitch(tab)}
    </section>
  );
};

export default InfoTabs;
