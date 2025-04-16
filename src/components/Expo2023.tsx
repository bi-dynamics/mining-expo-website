"use client";
import { ExhibitorData } from "@/lib/getExhibitors";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Grid,
  Pagination,
  FreeMode,
  Navigation,
  Zoom,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import clsx from "clsx";
import { FloorPlanData } from "@/lib/getFloorPlans";
import { X } from "lucide-react";

const pastEvents = [
  {
    year: 2023,
  },
  {
    year: 2022,
  },
];

function Expo2023({
  exhibitorsList,
  floorPlans,
}: {
  exhibitorsList: ExhibitorData[];
  floorPlans: FloorPlanData[];
}) {
  const sortedExhibitorsList = exhibitorsList.sort(
    (a: any, b: any) => a.id - b.id
  );

  const sortedFloorplans2023 = floorPlans.sort((a: any, b: any) => a.id - b.id);

  const swiperBoundaryRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(2023);
  const [openModal, setOpenModal] = useState(false);

  interface ModalInfoProps {
    companyName: string | undefined;
    companyDescription: string | undefined;
  }

  const [modalInfo, setModalInfo] = useState<ModalInfoProps | null>(null);

  return (
    <section className="bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top w-full">
      {/* Container */}
      <div className="flex flex-col gap-8 items-center justify-start w-full h-fit sm:pt-16">
        {/* <div className="flex flex-wrap gap-2 items-start justify-center">
          {pastEvents.map((pastEvent, index) => (
            <Button
              key={index}
              onClick={() => setCurrentYear(pastEvent.year)}
              className={clsx(
                "w-fit font-bold font-rubik hover:bg-expoOrange/70 bg-expoBlue transition-colors",
                {
                  "bg-expoOrange": pastEvent.year === currentYear,
                }
              )}
            >
              {pastEvent.year}
            </Button>
          ))}
        </div> */}

        {currentYear === 2023 && (
          <div className="h-fit w-full border-l-expoBlue border-l-8 rounded-md flex flex-col gap-8 pl-8">
            <h3 className="text-xl  lg:text-4xl font-poppins font-bold text-expoBlue ">
              2023 Exhibitors
            </h3>

            <Swiper
              grid={{
                rows: 1,
              }}
              centeredSlides={true}
              breakpoints={{
                "425": { slidesPerView: 3 },
                "768": { slidesPerView: 4 },
              }}
              passiveListeners={false}
              grabCursor={true}
              pagination={{
                type: "progressbar",
              }}
              loop
              modules={[Grid, Pagination, FreeMode, Navigation]}
              slidesPerView={3}
              navigation
              spaceBetween={30}
              ref={swiperBoundaryRef}
              className="w-full h-fit md:h-[50vh] flex items-start justify-start rounded-lg"
            >
              {sortedExhibitorsList.map((image, index) =>
                image.logo ? (
                  <SwiperSlide
                    key={index}
                    className="h-full py-4 w-fit flex items-center justify-center"
                    onClick={() => {
                      setOpenModal(true),
                        setModalInfo({
                          companyName: image.name,
                          companyDescription: image.description,
                        });
                    }}
                  >
                    <HoverCard>
                      <HoverCardTrigger
                        asChild
                        className="h-fit flex items-start justify-start"
                      >
                        <Image
                          src={image.logo as string}
                          alt={image.name as string}
                          width={250}
                          height={250}
                          className="block object-cover rounded-xl z-30"
                        />
                      </HoverCardTrigger>

                      <HoverCardContent
                        className="w-80 max-h-80 overflow-y-scroll z-40"
                        side="right"
                        align="center"
                        avoidCollisions
                        collisionBoundary={
                          swiperBoundaryRef?.current &&
                          swiperBoundaryRef.current
                        }
                        collisionPadding={10}
                      >
                        <div className="font-bold font-poppins">
                          {image.name}
                        </div>
                        <div>{image.description}</div>
                      </HoverCardContent>
                    </HoverCard>
                  </SwiperSlide>
                ) : (
                  ""
                )
              )}
            </Swiper>
            {openModal && (
              <div className="w-[90vw] p-4 max-h-[30vh] fixed bottom-2 right-2 md:hidden mx-auto overflow-y-scroll z-40 bg-expoBlue border-2 border-expoOrange text-white rounded-lg">
                <div
                  onClick={() => setOpenModal(false)}
                  className="w-full h-fit flex items-end justify-end"
                >
                  <X />
                </div>

                <div className="font-bold font-poppins py-4">
                  {modalInfo?.companyName}
                </div>

                <div>{modalInfo?.companyDescription}</div>
              </div>
            )}

            <h3 className="text-xl mt-16  lg:text-4xl font-poppins font-bold text-expoBlue ">
              2023 Floor Plans
            </h3>
            <Swiper
              navigation={true}
              loop={true}
              grabCursor={true}
              zoom={{ minRatio: 1, maxRatio: 2 }}
              pagination={{
                type: "progressbar",
              }}
              modules={[Navigation, Pagination, Zoom, EffectFade]}
              slidesPerView={1}
              centeredSlides={true}
              fadeEffect={{ crossFade: true }}
              effect={"fade"}
              className="w-full xl:h-[85vh] flex items-center justify-start rounded-lg"
            >
              {sortedFloorplans2023.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="md:px-10 md:py-8 w-full mx-auto"
                >
                  <p className="font-semibold text-expoBlue text-lg text-center lg:text-3xl font-poppins">
                    {image.alt}
                  </p>
                  <div className="swiper-zoom-container flex flex-col relative h-fit w-fit items-center justify-center my-0">
                    <Image
                      src={image.image as string}
                      alt={image.alt as string}
                      width={900}
                      height={900}
                      className="object-cover -p-8 rounded-xl z-50"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}

export default Expo2023;
