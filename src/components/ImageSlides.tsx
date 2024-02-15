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
import image1 from "../../public/mining-expo-gallery-1.webp";
import image2 from "../../public/mining-expo-gallery-2.webp";
import image3 from "../../public/mining-expo-gallery-3.webp";
import image4 from "../../public/mining-expo-gallery-4.webp";
import image5 from "../../public/mining-expo-gallery-5.webp";
import image6 from "../../public/mining-expo-gallery-6.webp";
import image7 from "../../public/mining-expo-gallery-7.webp";
import image8 from "../../public/mining-expo-gallery-8.webp";
import image9 from "../../public/mining-expo-gallery-9.webp";
import image10 from "../../public/mining-expo-gallery-10.webp";
import image11 from "../../public/mining-expo-gallery-11.webp";
import image12 from "../../public/mining-expo-gallery-12.jpg";
import image13 from "../../public/mining-expo-gallery-13.jpg";

const images = [
  { src: image1, alt: "First Image" },
  { src: image2, alt: "Second Image" },
  { src: image3, alt: "Third Image" },
  { src: image4, alt: "Fourth Image" },
  { src: image5, alt: "Fith Image" },
  { src: image6, alt: "Sixth Image" },
  { src: image7, alt: "Seventh Image" },
  { src: image8, alt: "Eigth Image" },
  { src: image9, alt: "Ninth Image" },
  { src: image10, alt: "Tenth Image" },
  { src: image11, alt: "Eleventh Image" },
  { src: image12, alt: "Twelfth Image" },
  { src: image13, alt: "Thirteenth Image" },
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
                  className="block h-full w-full object-cover rounded-xl z-50"
                  placeholder="blur"
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
