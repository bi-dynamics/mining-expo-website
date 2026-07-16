import React from "react";
import { Speaker } from "@/lib/getEventSpeakers";
import { getAvatarColor, getInitials } from "@/lib/avatar";
import Image from "next/image";
import Link from "next/link";

function SpeakerPhoto({ speaker }: { speaker: Speaker }) {
  if (speaker.photoUrl) {
    return (
      <Image
        src={speaker.photoUrl}
        alt={`Image of ${speaker.name}`}
        fill={true}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-110 transition-all duration-1000 w-full relative h-full shrink-0"
      />
    );
  }

  const color = getAvatarColor(speaker.name);
  return (
    <div
      className="absolute inset-0 flex items-center justify-center font-poppins font-bold text-6xl"
      style={{ backgroundColor: color.background, color: color.text }}
    >
      {getInitials(speaker.name)}
    </div>
  );
}

function Speakers({ speakersList }: { speakersList: Speaker[] }) {
  return (
    <section className="h-full w-full bg-white">
      <div className="flex flex-wrap gap-8 items-start justify-center w-full xl:w-[80%] h-full mx-auto py-16">
        {speakersList.map((speaker) => (
          <div
            key={speaker.id}
            className="w-full md:w-[45vw] xl:w-[35vw] flex flex-col xl:flex-row h-fit group shadow-[0_0_15px_rgba(0,0,0,0.10)] hover:shadow-[0_0_15px_rgba(0,0,0,0.30)] transition-all duration-200 overflow-hidden rounded-xl"
          >
            <div className="relative xl:w-1/3 h-[30vh] xl:h-[40vh] flex items-center justify-center shrink-0">
              <Link
                href={`/conference-programme/speakers-list/${speaker.id}`}
                className="flex items-end justify-center w-full h-full relative overflow-hidden"
              >
                <SpeakerPhoto speaker={speaker} />
                <div className="bottom-0 flex items-end justify-center w-full h-full bg-gradient-to-t from-expoBlue to-transparent to-30% relative">
                  <p className="relative bottom-4 md:bottom-8 font-rubik text-sm font-medium w-fit text-center text-expoOrange outline outline-1 outline-offset-4 hover:text-expoOrange">
                    VIEW DETAILS
                  </p>
                </div>
              </Link>
            </div>
            <div className="p-4 gap-4 bg-white sm:w-full xl:w-2/3 flex flex-col items-start justify-center shrink-0 xl:py-8">
              <div className="font-bold text-black font-poppins h-fit w-fit flex flex-col gap-px">
                <h3 className="text-2xl font-bold font-poppins text-Black pb-2 w-fit">
                  {speaker.name}
                </h3>
                {speaker.title && (
                  <h4 className="font-bold text-base text-black/70 w-full mt-2">
                    {speaker.title}
                  </h4>
                )}
                {speaker.company && (
                  <h4 className="font-semibold text-xs text-black/50">
                    {speaker.company}
                  </h4>
                )}
              </div>
              {speaker.bio && (
                <p className=" line-clamp-4 font-rubik font-light h-fit w-full xl:w-[90%] text-black/50 mt-4">
                  {speaker.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
