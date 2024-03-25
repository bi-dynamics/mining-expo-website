"use client";
import { ExhibitorData } from "@/lib/getExhibitors";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

function Exhibitors({ exhibitorsList }: { exhibitorsList: ExhibitorData[] }) {
  const sortedExhibitorsList = exhibitorsList.sort(
    (a: any, b: any) => a.id - b.id
  );

  return (
    <section className="bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top w-[99vw]">
      {/* Container */}
      <div className="flex flex-col gap-2 items-center justify-start w-full h-fit sm:py-16">
        <Swiper
          grid={{
            rows: 3,
          }}
          breakpoints={{
            "425": { slidesPerView: 2 },
            "768": { slidesPerView: 3 },
          }}
          passiveListeners={false}
          grabCursor={true}
          pagination={{ type: "bullets", clickable: true }}
          modules={[Grid, Pagination, FreeMode]}
          slidesPerView={2}
          className="xl:h-[110vh] h-[80vh] w-full md:w-[60%] flex items-center justify-start rounded-lg"
        >
          {sortedExhibitorsList.map((image, index) =>
            image.logo ? (
              <SwiperSlide
                key={index}
                className="h-fit flex items-center justify-center"
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="swiper-zoom-container relative flex flex-col h-fit w-full items-center justify-center my-8">
                      <Image
                        src={image.logo as string}
                        alt={image.name as string}
                        width={250}
                        height={250}
                        className="block h-1/2 sm:h-3/4 w-1/2 sm:w-3/4 object-cover rounded-xl z-30"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    className="w-80 z-40"
                    side="bottom"
                    align="center"
                  >
                    <div className="font-bold font-poppins">{image.name}</div>
                    <div>{image.description}</div>
                  </HoverCardContent>
                </HoverCard>
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Exhibitors;
