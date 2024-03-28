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
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-gallery-1_resize.webp?alt=media&token=3427f917-bd07-462c-a637-4b6a6be899fd",
    alt: "First Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-gallery-2_resize.webp?alt=media&token=9078be81-f428-4bd6-9a5f-406510bc84a6",
    alt: "Second Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-gallery-3_resize.webp?alt=media&token=e76f0940-a9d9-42d0-8432-8334278d8254",
    alt: "Third Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-gallery-4_resize.webp?alt=media&token=ce0178d1-d71b-4d56-a54b-476669b0706d",
    alt: "Fourth Image",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-gallery-5_resize.webp?alt=media&token=3ea396fe-5c0a-47a8-9a63-b268870f43b1",
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
