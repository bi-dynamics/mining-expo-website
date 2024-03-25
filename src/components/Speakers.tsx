import React from "react";
import { SpeakerData } from "@/lib/getSpeakers";
import Image from "next/image";
import Link from "next/link";

function Speakers({ speakersList }: { speakersList: SpeakerData[] }) {
  // useEffect(() => {
  //   async function fetchSpeakers() {
  //     console.log("getting speakers");
  //     const speakersList = await getSpeakers();
  //     console.log("got speakers");
  //     setSpeakers(speakersList);
  //   }
  //   fetchSpeakers();
  // }, []);

  return (
    <section className="h-full w-full bg-white">
      <div className="flex flex-wrap gap-8 items-start justify-center w-full xl:w-[80%] h-full mx-auto py-16">
        <h2 className="text-xl md:text-3xl  font-semibold text-expoOrange">
          Coming Soon
        </h2>
        {/* {speakersList.map((speaker) => (
          <div
            key={speaker.id}
            className="w-full md:w-[45vw] xl:w-[35vw] flex flex-col xl:flex-row h-fit shadow-[0_0_15px_rgba(0,0,0,0.10)] hover:shadow-[0_0_15px_rgba(0,0,0,0.30)] transition-all duration-200 overflow-hidden rounded-xl"
          >
            <div className="relative xl:w-1/3 h-[30vh] xl:h-[40vh] flex items-center justify-center shrink-0 pb-4">
              <Link
                href={`/conference-programme/speakers-list/${speaker.id}`}
                className="flex items-end justify-center w-full h-full pb-2 relative"
              >
                <Image
                  src={speaker.profilePicture as string}
                  alt={`Image of ${speaker.speakerName}`}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain w-full relative h-full shrink-0"
                />
                <p className="relative bottom-0 font-rubik text-sm font-medium w-fit text-center text-expoOrange outline outline-1 outline-offset-4 xl:text-black/50 hover:text-expoOrange">
                  VIEW DETAILS
                </p>
              </Link>
            </div>

            <div className="p-4 gap-4 bg-white sm:w-full xl:w-2/3 flex flex-col items-start justify-center shrink-0 xl:py-8">
              <div className="font-bold text-black font-poppins h-fit w-fit flex flex-col gap-px">
                <h3 className="text-2xl font-bold font-poppins text-Black pb-2 w-fit">
                  {speaker.speakerName}
                </h3>
                <h4 className="font-bold text-black/70 w-full">
                  {speaker.title?.split("-")[0]}
                </h4>
                <h4 className="font-semibold text-black/50">
                  {speaker.title?.split("-")[1]}
                </h4>
              </div>
              <p className=" line-clamp-4 font-rubik font-light h-fit w-full xl:w-[90%]">
                {speaker.bio}
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
}

export default Speakers;
