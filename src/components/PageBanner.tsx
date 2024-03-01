interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <section
      className={` relative bg-[url('../../public/mining-expo-header.webp')] bg-cover bg-center h-[30vh] xl:h-[50vh] w-full flex items-center justify-center tracking-tight`}
    >
      {/* gradient layer */}
      <div className="absolute h-full w-full z-[1] overflow-hidden bg-gradient-to-b from-expoBlue via-transparent to-expoBlue"></div>
      <div className="z-10 flex items-center justify-center sm:justify-start backdrop-filter backdrop-blur-[4px] w-full h-full sm:px-48 pt-10">
        <h1 className="text-expoOrange text-center text-3xl md:text-6xl font-poppins font-bold z-10">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
