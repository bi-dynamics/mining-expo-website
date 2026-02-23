"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fgallery__2025_1.jpg?alt=media&token=3f203813-4282-4d31-9de4-3f4125d89d98",
    alt: "First Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fgallery_2025_2.jpg?alt=media&token=c42ac565-3d6f-456d-8bea-3fe015903581",
    alt: "Second Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fgallery_2025_3.jpg?alt=media&token=bac0c6cc-0748-448e-96a1-c0632964fb3d",
    alt: "Third Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fgallery_2025_4.jpg?alt=media&token=112572bb-592c-4dd1-8b7c-10231d5a54a3",
    alt: "Fourth Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fgallery_2025_5.jpg?alt=media&token=c595eba1-fdcb-4f6e-827e-edd1bf0a3b60",
    alt: "Fith Image",
  },
];

function ImageSlides() {
  return (
    <section className="py-16 bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
      {/* Container */}
      <div className="flex flex-col gap-8 items-center justify-center w-full h-fit">
        <h2 className="font-bold text-3xl lg:text-5xl text-expoBlue font-poppins">
          Gallery
        </h2>
        <Swiper
          navigation={true}
          loop={true}
          grabCursor={true}
          zoom={{ minRatio: 1, maxRatio: 2 }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Navigation, Pagination, Zoom, EffectCoverflow]}
          slidesPerView={1.3}
          breakpoints={{
            "768": { slidesPerView: 2.3 },
          }}
          centeredSlides={true}
          coverflowEffect={{
            slideShadows: false,
            modifier: 2,
            rotate: 20,
          }}
          effect={"coverflow"}
          className="h-full w-full md:w-[90%] rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="md:px-10 md:py-14">
              <div className="swiper-zoom-container flex flex-row h-fit w-full items-center justify-center my-8">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
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

export default ImageSlides;
