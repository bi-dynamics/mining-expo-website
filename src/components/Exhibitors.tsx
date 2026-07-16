"use client";
import { Exhibitor } from "@/lib/getEventExhibitors";
import ExhibitorLogo from "./ExhibitorLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Grid,
  Pagination,
  FreeMode,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import "swiper/css/autoplay";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useRef, useState } from "react";
import { X } from "lucide-react";

function Exhibitors({ exhibitorsList }: { exhibitorsList: Exhibitor[] }) {
  const swiperBoundaryRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  interface ModalInfoProps {
    companyName: string;
    companyDescription: string | null;
  }
  const [modalInfo, setModalInfo] = useState<ModalInfoProps | null>(null);

  return (
    <section className="bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top w-full">
      {/* Container */}
      <div className="flex flex-col gap-8 items-center justify-start  w-[90%] lg:w-[80%] mx-auto h-fit py-16">
        {/* <p className="text-black/70 font-rubik text-sm lg:text-lg text-left p-4 rounded-xl bg-slate-100">
          <span className=" font-bold">NB: </span>
          Exhibitors for 2024 will be published soon
        </p> */}
        <div className="h-fit w-full rounded-md flex flex-col gap-8">
          <h3 className="text-xl text-center  lg:text-4xl font-poppins font-bold text-expoBlue ">
            2026 Exhibitors
          </h3>
          {exhibitorsList.length === 0 && (
            <p className="text-black/70 font-rubik text-sm lg:text-lg text-left p-4 rounded-xl bg-slate-100">
              No exhibitors found.
            </p>
          )}

          {exhibitorsList.length > 0 && (
            <Swiper
              grid={{
                rows: 2,
              }}
              autoplay={{ disableOnInteraction: true, pauseOnMouseEnter: true }}
              centeredSlides={true}
              breakpoints={{
                "425": { slidesPerView: 3 },
                "768": { slidesPerView: 6 },
              }}
              passiveListeners={false}
              grabCursor={true}
              pagination={{
                type: "progressbar",
              }}
              loop
              modules={[Grid, Pagination, FreeMode, Navigation, Autoplay]}
              slidesPerView={3}
              navigation
              spaceBetween={20}
              ref={swiperBoundaryRef}
              className="w-full h-[75vh] flex items-start justify-start rounded-lg"
            >
              {exhibitorsList.map((exhibitor) => (
                <SwiperSlide
                  key={exhibitor.id}
                  className="py-4 h-full w-fit flex items-center justify-center"
                  onClick={() => {
                    setOpenModal(true),
                      setModalInfo({
                        companyName: exhibitor.name,
                        companyDescription: exhibitor.description,
                      });
                  }}
                >
                  <HoverCard>
                    <HoverCardTrigger
                      asChild
                      className="h-1/2 mx-auto flex items-center justify-center"
                    >
                      <div>
                        <ExhibitorLogo
                          name={exhibitor.name}
                          logoUrl={exhibitor.logoUrl}
                        />
                      </div>
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
                      <div className="font-bold font-poppins">
                        {exhibitor.name}
                      </div>
                      <div>{exhibitor.description}</div>
                    </HoverCardContent>
                  </HoverCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

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
