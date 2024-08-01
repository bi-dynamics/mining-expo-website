import Image from "next/image";

function SponsorSlides() {
  return (
    <section className="py-16 bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
      {/* Container */}
      <div className="flex flex-col gap-8 items-center justify-center w-full h-fit">
        <h2 className="font-bold text-3xl lg:text-5xl text-expoBlue font-poppins">
          Sponsored By
        </h2>
        <div className="w-[90%] sm:w-full h-fit flex flex-col md:flex-row justify-between md:justify-center md:gap-4 xl:gap-16 items-center">
          <Image
            src="/AHK-logo-with-flag-RGB.svg"
            alt="Andrada Sponsor"
            width={300}
            height={300}
          />
          <Image
            src="/RMB_Horizontal_Identity_RGB_Black.webp"
            alt="RMB Sponsor"
            width={250}
            height={250}
          />
          {/* <Image
            src="/Continental-Lithium-Africa.webp"
            alt="Continental Lithium Sponsor"
            width={250}
            height={250}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default SponsorSlides;
