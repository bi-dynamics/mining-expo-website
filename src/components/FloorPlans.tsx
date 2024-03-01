"use client";
import { FloorPlanData } from "@/lib/getFloorPlans";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FloorPlans({ floorPlansList }: { floorPlansList: FloorPlanData[] }) {
  const sortedFloorPlansList = floorPlansList.sort(
    (a: any, b: any) => a.id - b.id
  );
  console.log(floorPlansList);

  return (
    <section className="py-16 bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
      {/* Container */}
      <div className="flex flex-col gap-2 items-center justify-center w-full h-fit">
        <Swiper
          navigation={true}
          loop={true}
          grabCursor={true}
          zoom={{ minRatio: 1, maxRatio: 2 }}
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination, Zoom, EffectFade]}
          slidesPerView={1}
          centeredSlides={true}
          fadeEffect={{ crossFade: true }}
          effect={"fade"}
          className="xl:h-[85vh] w-full md:w-[60%] flex items-center justify-center rounded-lg"
        >
          {sortedFloorPlansList.map((image, index) => (
            <SwiperSlide
              key={index}
              className="md:px-10 md:py-14 w-full mx-auto"
            >
              <div className="swiper-zoom-container flex flex-col h-fit w-full items-center justify-center my-8">
                <p className="font-semibold text-xl lg:text-4xl font-poppins">
                  {image.alt}
                </p>
                <Image
                  src={image.image as string}
                  alt={image.alt as string}
                  width={750}
                  height={750}
                  className="block h-full w-full object-cover rounded-xl z-50"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FloorPlans;
