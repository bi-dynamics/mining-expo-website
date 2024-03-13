"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const InfoTabs = () => {
  const [tab, setTab] = useState(1);
  const renderSwitch = (tab: number) => {
    switch (tab) {
      case 1:
        return (
          <>
            {/* Image carousel */}
            <div className="flex items-center justify-start w-full h-[70%] xl:h-full bg-[url('../../public/mining-expo-about.webp')] bg-cover bg-top duration-300 transition-all">
              {/* gradient layer */}
              <div className="h-full w-full z-[1] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent backdrop-filter backdrop-brightness-50"></div>
              {/* Content */}
              <div className="absolute h-fit w-full z-[2] flex items-center justify-start gap-4">
                {/* Orange tag */}
                <div className="w-12 h-52 bg-expoOrange hidden sm:block"></div>
                <div className="font-rubik flex flex-col gap-4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-5xl text-white font-bold">
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
            <div className="flex items-center justify-start w-full h-[100%] xl:h-full bg-[url('../../public/mining-expo-event-theme.webp')] bg-cover bg-center duration-300 transition-all">
              {/* gradient layer */}
              <div className="h-full w-full z-[1] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent backdrop-filter backdrop-brightness-50"></div>
              {/* Content */}
              <div className="absolute h-fit w-full z-[2] flex items-center justify-start gap-4">
                {/* Orange tag */}
                <div className="w-12 h-52 bg-expoOrange hidden sm:block"></div>
                <div className="font-rubik flex flex-col gap-4 4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-5xl text-white font-bold">
                    Mining Conference 2024 Theme
                  </h2>
                  <p className="text-lg text-white/80 font-medium">
                    The Theme for this year’s event is “Namibia’s role in the
                    sustainable supply of minerals to support the global energy
                    transition.” With untapped resources of critical minerals
                    and uranium, Namibia is increasing its prominence to support
                    the global shift to more sustainable uses of energy giving
                    rise to new economic opportunities in the mining sector.
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
            <div className="flex items-center justify-start w-full h-[70%] xl:h-full bg-[url('../../public/oil-and-gas-sector.webp')] bg-cover bg-center duration-300 transition-all">
              {/* gradient layer */}
              <div className="h-full w-full z-[1] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent backdrop-filter backdrop-brightness-50"></div>
              {/* Content */}
              <div className="absolute h-fit w-full z-[2] flex items-center justify-start gap-4">
                {/* Orange tag */}
                <div className="w-12 h-52 bg-expoOrange hidden sm:block"></div>
                <div className="font-rubik flex flex-col gap-4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-5xl text-white font-bold">
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
            <div className="flex items-center justify-start w-full h-[70%] xl:h-full bg-[url('../../public/mining-expo-about.webp')] bg-cover bg-top transition-all">
              {/* gradient layer */}
              <div className="h-full w-full z-[1] overflow-hidden bg-gradient-to-r from-expoBlue via-expoBlue/80 to-transparent"></div>
              {/* Content */}
              <div className="absolute h-fit w-full z-[2] flex items-center justify-start gap-4">
                {/* Orange tag */}
                <div className="w-12 h-52 bg-expoOrange"></div>
                <div className="font-rubik flex flex-col gap-4 w-[80%] mx-auto sm:mx-0 xl:w-1/2 h-fit">
                  <h2 className=" text-5xl text-white font-bold">
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
    <section className="flex flex-col py-16 gap-4 h-[130vh] md:h-[90vh] w-full bg-expoBlue">
      {/* Heading and buttons */}
      <div className="flex flex-col gap-4 mx-auto w-[90%] xl:px-24 items-start justify-start">
        <h2 className="font-poppins text-5xl font-bold text-white">THE EXPO</h2>
        <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
      {renderSwitch(tab)}
    </section>
  );
};

export default InfoTabs;
