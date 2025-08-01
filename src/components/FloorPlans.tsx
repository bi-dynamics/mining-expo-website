// "use client";
// import { FloorPlanData2024 } from "@/lib/getFloorPlans2024";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Zoom, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/zoom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function FloorPlans({
//   floorPlansList,
// }: {
//   floorPlansList: FloorPlanData2024[];
// }) {
//   const sortedFloorPlansList = floorPlansList.sort(
//     (a: any, b: any) => a.id - b.id
//   );

//   return (
//     <section className="py-16 bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
//       {/* Container */}
//       <div className="flex flex-col gap-2 items-center justify-center w-full h-fit">
//         {/* <p className="text-black/70 font-rubik text-sm lg:text-lg text-left p-4 rounded-xl bg-slate-100">
//           <span className=" font-bold">NB: </span>
//           2024 Floor Plans will be published soon.
//         </p> */}
//         <Swiper
//           navigation={true}
//           loop={true}
//           grabCursor={true}
//           zoom={{ minRatio: 1, maxRatio: 2 }}
//           pagination={{ type: "fraction" }}
//           modules={[Navigation, Pagination, Zoom, EffectFade]}
//           slidesPerView={1}
//           centeredSlides={true}
//           fadeEffect={{ crossFade: true }}
//           effect={"fade"}
//           className="xl:h-[85vh] w-full md:w-[60%] flex items-center justify-center rounded-lg"
//         >
//           {sortedFloorPlansList.map((image, index) => (
//             <SwiperSlide
//               key={index}
//               className="md:px-10 md:py-14 w-full mx-auto"
//             >
//               <div className="swiper-zoom-container flex flex-col h-fit w-full items-center justify-center gap-4 my-8">
//                 <p className="font-semibold text-xl lg:text-4xl font-poppins">
//                   {image.alt}
//                 </p>
//                 <Image
//                   src={image.image as string}
//                   alt={image.alt as string}
//                   width={750}
//                   height={750}
//                   className="block h-full w-full object-cover rounded-xl z-50"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default FloorPlans;

"use client";
import { useState } from "react";
import { FloorPlanData2024 } from "@/lib/getFloorPlans2024";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import { CircleDashed, CircleEllipsis } from "lucide-react";

function FloorPlans({
  floorPlansList,
}: {
  floorPlansList: FloorPlanData2024[];
}) {
  const currentYear = new Date().getFullYear();
  const sortedFloorPlansList = floorPlansList
    .sort((a: any, b: any) => a.id - b.id)
    .filter((plan) =>
      Array.isArray(plan.sourceYears)
        ? plan.sourceYears.some(
            (year) => year.year === currentYear || year.year === currentYear - 1
          )
        : false
    ); //filter to current year or previous year as fallback

  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextFloorPlan = () => {
    setIsLoading(true);
    setCurrentFloorPlanIndex(
      (prevIndex) => (prevIndex + 1) % sortedFloorPlansList.length
    );
    setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
  };

  const handlePrevFloorPlan = () => {
    setIsLoading(true);
    // Wrap around to the last item if at the beginning
    setCurrentFloorPlanIndex(
      (prevIndex) =>
        (prevIndex - 1 + sortedFloorPlansList.length) %
        sortedFloorPlansList.length
    );
    setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
  };

  const currentFloorPlan = sortedFloorPlansList[currentFloorPlanIndex];

  return (
    <section className="py-16 h-fit px-4 bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
      {/* Container */}
      <div className="flex flex-col gap-8 items-center justify-center w-full h-fit">
        {/* <p className="text-black/70 font-rubik text-sm lg:text-lg text-left p-4 rounded-xl bg-slate-100">
          <span className=" font-bold">NB: </span>
          2024 Floor Plans will be published soon.
        </p> */}
        <div className="w-full h-fit flex flex-col justify-center items-center gap-16">
          <p className="font-semibold text-center text-4xl md:text-6xl font-poppins">
            {currentFloorPlan.alt}
          </p>
          {isLoading ? (
            <div className="h-[60vh] w-full flex items-center justify-center rounded-lg mb-8">
              <CircleDashed className=" animate-spin " />
            </div>
          ) : (
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
              className="h-[60vh] w-full flex items-center justify-center rounded-lg mb-8"
            >
              <SwiperSlide className="md:px-10 md:py-14 px-8 w-full mx-auto">
                <div className="swiper-zoom-container flex flex-col h-full w-full items-center justify-center gap-4 ">
                  <Image
                    src={
                      currentFloorPlan.sourceYears?.find(
                        (year) => year.year === currentYear
                      )?.src as string
                    }
                    alt={currentFloorPlan.alt as string}
                    fill
                    className="block h-full w-full object-cover rounded-xl z-50"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          )}

          {/* Nested Swiper for Exhibitors
          {currentFloorPlan.exhibitors && (
            <Swiper
              slidesPerView={2.3}
              breakpoints={{
                "425": { slidesPerView: 3.3 },
                "768": { slidesPerView: 4.3 },
              }}
              spaceBetween={20}
              className="xl:h-[60vh] w-full flex items-center justify-center rounded-lg mb-0 py-4"
            >
              {currentFloorPlan.exhibitors.map((exhibitor, exhibitorIndex) => (
                <SwiperSlide
                  key={exhibitorIndex}
                  className="w-full h-full py-4 mx-auto"
                >
                  <div className="flex flex-col bg-white items-center justify-center gap-4 p-4 rounded-lg shadow-lg h-full w-full">
                    <div className="relative w-full h-full overflow-hidden mx-auto flex items-center justify-center">
                      <Image
                        src={exhibitor.image}
                        alt={exhibitor.name}
                        fill
                        className="block object-contain rounded-xl z-50"
                      />
                    </div>
                    <div className="w-full h-2/3 flex flex-col items-center justify-center">
                      <p className="text-lg text-center font-medium text-expoBlue">
                        {exhibitor.name}
                      </p>
                      <p className="text-base text-black/70">
                        Stand No. {exhibitor.standNumber}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )} */}
        </div>
        <div className="mt-4 flex gap-8 text-expoBlue disabled:scale-75 disabled:text-expoBlue/50 font-poppins disabled:bg-pink-400 font-medium text-xl">
          <Button onClick={handlePrevFloorPlan} disabled={isLoading}>
            Previous Plan
          </Button>
          <Button onClick={handleNextFloorPlan} disabled={isLoading}>
            Next Plan
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FloorPlans;
