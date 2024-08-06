"use client";
import { ExhibitorData } from "@/lib/getExhibitors";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useRef, useState } from "react";
import { X } from "lucide-react";

function Exhibitors({ exhibitorsList }: { exhibitorsList: ExhibitorData[] }) {
  const sortedExhibitorsList = exhibitorsList.sort(
    (a: any, b: any) => a.id - b.id
  );

  const swiperBoundaryRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  interface ModalInfoProps {
    companyName: string | undefined;
    companyDescription: string | undefined;
  }
  const [modalInfo, setModalInfo] = useState<ModalInfoProps | null>(null);

  return (
    <section className="bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top w-full">
      {/* Container */}
      <div className="flex flex-col gap-8 items-center justify-start  w-[90%] lg:w-[70%] mx-auto h-fit py-16">
        {/* <p className="text-black/70 font-rubik text-sm lg:text-lg text-left p-4 rounded-xl bg-slate-100">
          <span className=" font-bold">NB: </span>
          Exhibitors for 2024 will be published soon
        </p> */}
        <div className="h-fit w-full rounded-md flex flex-col gap-8">
          <h3 className="text-xl text-center  lg:text-4xl font-poppins font-bold text-expoBlue ">
            2024 Exhibitors
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
            className="w-full h-[50vh] flex items-start justify-start rounded-lg"
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
                      className="h-1/2 mx-auto flex items-center justify-center"
                    >
                      <Image
                        src={image.logo as string}
                        alt={image.name as string}
                        width={250}
                        height={250}
                        className="block object-contain rounded-xl z-30"
                      />
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-80 max-h-80 overflow-y-scroll z-40"
                      side="bottom"
                      align="center"
                      avoidCollisions
                      collisionBoundary={
                        swiperBoundaryRef?.current && swiperBoundaryRef.current
                      }
                      collisionPadding={10}
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
        </div>
      </div>
    </section>
  );
}

export default Exhibitors;
