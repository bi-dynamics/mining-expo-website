function Maps() {
  return (
    <section className="flex items-center justify-center bg-[url('../../public/mining-expo-namibia-venue.webp')] bg-cover bg-center h-[60vh]">
      {/* gradient layer */}
      <div className="h-full w-full z-[1] bg-expoBlue/80 to-transparent">
        {/* container */}
        <div className="flex z-10 items-center justify-center w-[80%] mx-auto h-full py-16">
          <div className="w-2/3 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.1830881050723!2d17.08665710810099!3d-22.582692914905927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b301fee73b3%3A0x12e61a9a365062cd!2sWindhoek%20Showgrounds!5e1!3m2!1sen!2sna!4v1707124436472!5m2!1sen!2sna"
              width="600"
              height="450"
              className="w-full h-full rounded-s-xl shadow-xl"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <aside className="flex flex-col gap-4 bg-[#F2F2F2] h-full w-fit py-16 px-8 rounded-e-xl shadow-xl">
            <h2 className="font-poppins text-5xl font-bold text-expoBlue mb-6">
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
