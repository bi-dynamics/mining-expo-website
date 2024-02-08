"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Images
import image1 from "../../public/about-info-tab.jpg";
import image2 from "../../public/about-info-tab2.jpg";
import image3 from "../../public/about-info-tab3.jpg";
import image4 from "../../public/conference-video-thumbnail.jpg";

const images = [
  { src: image1, alt: "First Image" },
  { src: image2, alt: "Second Image" },
  { src: image3, alt: "Third Image" },
  { src: image4, alt: "Fourth Image" },
];

function ImageSlides() {
  return (
    <section className="py-16 bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
      {/* Container */}
      <div className="flex flex-col gap-8 items-center justify-center w-full h-fit">
        <h2 className="font-bold text-5xl text-expoBlue font-poppins">
          Gallery
        </h2>
        <Swiper
          navigation={true}
          loop={true}
          grabCursor={true}
          zoom={{ minRatio: 1, maxRatio: 2 }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Navigation, Pagination, Zoom, EffectCoverflow]}
          slidesPerView={3}
          centeredSlides={true}
          coverflowEffect={{
            slideShadows: false,
            modifier: 2,
            rotate: 20,
          }}
          effect={"coverflow"}
          className="h-full w-[90%] rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="px-10 py-14">
              <div className="swiper-zoom-container flex flex-row h-fit w-full items-center justify-center my-8">
                <Image
                  src={image.src}
                  alt={image.alt}
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
