import Image from "next/image";
import Map from "../../public/Expo-Venue-Map.jpg";
import Link from "next/link";

async function Maps() {
  return (
    <section className="flex items-center justify-center bg-[url('../../public/mining-expo-namibia-venue_resize.webp')] bg-cover bg-center h-fit">
      {/* gradient layer */}
      <div className="h-full w-full z-[1] bg-expoBlue/80 to-transparent">
        {/* container */}
        <div className="flex flex-col xl:flex-row z-10 items-center  justify-center w-[90%] xl:w-[80%] mx-auto h-full py-8 gap-4 xl:gap-8">
          
           <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.9224857146064!2d17.089950368720206!3d-22.581868729541565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b4503f1ec9f%3A0xfc8d09ca66b1b97b!2sMining%20Expo!5e1!3m2!1sen!2sna!4v1772617704207!5m2!1sen!2sna"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mining Expo Location"
                ></iframe>
                
              </div>
         

          <aside className="flex flex-col gap-8 bg-[#F2F2F2] xl:h-fit w-full xl:w-fit p-10 rounded-xl shadow-xl">
            <h2 className="font-poppins text-3xl xl:text-5xl font-bold text-expoBlue xl:mb-6">
              Directions
            </h2>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg text-expoOrange">Venue</h4>
              <p className="font-medium text-lg text-expoBlue">
                Windhoek Show Grounds
              </p>
            </div>
            <div className="flex flex-col gap-2">
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
