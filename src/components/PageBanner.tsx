interface PageBannerProps {
  title: string;
  backgroundImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, backgroundImage }) => {
  return (
    <section
      className={` relative bg-cover bg-center h-[50vh] flex items-center justify-center tracking-tight`}
    >
      {/* gradient layer */}
      <div className="absolute h-full w-full z-[1] overflow-hidden bg-gradient-to-b from-expoBlue via-transparent to-expoBlue"></div>
      <h1 className="text-expoOrange text-5xl font-poppins font-bold z-10">
        {title}
      </h1>
    </section>
  );
};

export default PageBanner;
