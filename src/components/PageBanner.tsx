interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <section
      className={` relative bg-[url('https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2Fmining-expo-header_resize.webp?alt=media&token=f4d445cb-7b1b-43d2-9b57-4736ee85c73b')] bg-cover bg-center h-[30vh] xl:h-[50vh] w-full flex items-center justify-center tracking-tight brightness-90`}
    >
      {/* gradient layer */}
      <div className="absolute h-full w-full z-[1] overflow-hidden bg-gradient-to-tr from-expoBlue/85 from-30% via-transparent to-expoBlue"></div>
      <div className="z-10 flex items-center justify-center xl:justify-start backdrop-filter backdrop-blur-[4px] w-full h-full sm:px-48 pt-10">
        <h1 className="text-expoOrange text-center text-3xl md:text-4xl lg:text-6xl font-poppins font-bold z-10">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
