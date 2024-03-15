import Image from "next/image";
import Map from "../../public/Expo-Venue-Map.jpg";

async function Maps() {
  return (
    <section className="flex items-center justify-center bg-[url('../../public/mining-expo-namibia-venue_resize.webp')] bg-cover bg-center h-fit">
      {/* gradient layer */}
      <div className="h-full w-full z-[1] bg-expoBlue/80 to-transparent">
        {/* container */}
        <div className="flex flex-col xl:flex-row z-10 items-center  justify-center w-[90%] xl:w-[80%] mx-auto h-full py-8 xl:gap-8">
          <Image
            src={Map}
            alt="Mining Expo Venue"
            className="xl:w-2/3 rounded-xl"
          />
          {/* <div className="w-full xl:w-2/3 h-fit relative overflow-hidden border border-pink-500">
          </div> */}
          <aside className="flex flex-col gap-4 bg-[#F2F2F2] xl:h-fit w-full xl:w-fit p-10 xl:rounded-xl shadow-xl">
            <h2 className="font-poppins text-3xl xl:text-5xl font-bold text-expoBlue xl:mb-6">
              Directions
            </h2>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-lg text-expoOrange">Venue</h4>
              <p className="font-medium text-lg text-expoBlue">
                Windhoek Show Grounds
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-lg text-expoOrange">Address</h4>
              <p className="font-medium text-lg text-expoBlue">
                Jan Jonker Street, Windhoek, Namibia
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Maps;
