"use client";

import PageBanner from "@/components/PageBanner";
import { Skeleton } from "@/components/ui/skeleton";
import { getSpeakers, SpeakerData } from "@/lib/getSpeakers";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function addParagraphSpacingStart(bio: string) {
  let modifiedBio = "";
  // Split the bio into sentences using punctuation as delimiters.
  let sentences = bio.split(".");

  for (let index = 0; index < 3; index++) {
    modifiedBio += sentences[index] + ". ";
  }
  return modifiedBio;
}

function addParagraphSpacingMid(bio: string) {
  let modifiedBio = "";
  // Split the bio into sentences using punctuation as delimiters.
  let sentences = bio.split(".");
  if (!sentences[3]) {
    return;
  }
  for (let index = 3; index < 8; index++) {
    if (sentences[index]) {
      modifiedBio += sentences[index] + ". ";
    }
  }
  return modifiedBio;
}

function addParagraphSpacingEnd(bio: string) {
  let modifiedBio = "";
  // Split the bio into sentences using punctuation as delimiters.
  let sentences = bio.split(".");

  if (!sentences[8]) {
    return " ";
  }
  for (let index = 8; index < sentences.length - 1; index++) {
    if (sentences[index]) {
      modifiedBio += sentences[index] + ".";
    }
  }
  return modifiedBio;
}

function SpeakerPage({ params }: { params: { speakerId: string } }) {
  const [speaker, setSpeaker] = useState<SpeakerData>();

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const speakersList = await getSpeakers();
        for (const foundSpeaker of speakersList) {
          if (foundSpeaker.id == params.speakerId) {
            setSpeaker(foundSpeaker);
            return;
          }
        }

        // const foundSpeaker = speakersList.find((s) => s.id === params.id);
      } catch (error) {
        console.error("Error fetching speaker:", error);
      }
    }
    fetchSpeakers();
  });

  if (!speaker) {
    return (
      <>
        <PageBanner title="Loading speaker..." />
        <section className="flex flex-col xl:flex-row items-start justify-center w-[90%] xl:w-[60%] mx-auto h-fit py-16 gap-8">
          <div className="flex w-full xl:w-2/3 items-center justify-center flex-col gap-8">
            <Skeleton className="w-[90%] xl:w-[600px] h-[250px]" />
            <Skeleton className="w-[90%] xl:w-[600px] h-[100px]" />
            <Skeleton className="w-[90%] xl:w-[600px] h-[100px]" />
          </div>
          <div className=" rounded-xl w-[90%] mx-auto xl:w-1/3 h-full flex flex-col items-center xl:items-start justify-center xl:justify-start">
            <Skeleton className="w-full xl:w-[300px] h-[500px]" />
          </div>
        </section>
      </>
    ); // Show loading indicator while fetching
  }

  return (
    <main>
      <PageBanner title={`${speaker.speakerName}`} />
      <section className="flex items-center justify-center bg-[#F2F2F2] h-fit w-full py-16">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center bg-[#F2F2F2] h-fit w-full xl:w-[60%] gap-8">
          <div className="bg-white rounded-xl w-[90%] xl:w-2/3 h-full flex flex-col items-center justify-start p-4 xl:p-8 gap-8 text-sm xl:text-lg">
            <Image
              src={speaker.profilePicture!}
              width={500}
              height={250}
              alt={`Image of ${speaker.speakerName}`}
            />
            <div className="w-full h-full font-rubik">
              {addParagraphSpacingStart(speaker.bio!)}
            </div>
            <div className="w-full h-full font-rubik">
              {addParagraphSpacingMid(speaker.bio!)}
            </div>
            <div className="w-full h-full font-rubik">
              {addParagraphSpacingEnd(speaker.bio!)}
            </div>
          </div>
          <div className="bg-white rounded-xl w-[90%] xl:w-1/3 h-full flex flex-col items-start justify-center py-8 sticky top-40">
            <div className="w-full h-fit flex flex-col items-start justify-center px-8 pb-8 gap-4">
              <h2 className="text-lg font-bold font-poppins">
                Speaker details
              </h2>

              {speaker.websiteLink ? (
                <Link
                  href={speaker.websiteLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex flex-wrap gap-2 items-center justify-center hover:text-expoOrange transition-all duration-200"
                >
                  <Icon icon="mdi:external-link" className="w-6 h-6" />
                  Website
                </Link>
              ) : (
                ""
              )}
              {speaker.email ? (
                <Link
                  href={`mailto:${speaker.email}`}
                  className="flex flex-wrap gap-2 items-center justify-center hover:text-expoOrange transition-all duration-200"
                >
                  <Icon icon="ic:outline-email" className="w-6 h-6" />
                  {speaker.email}
                </Link>
              ) : (
                ""
              )}
              {speaker.linkedinProfile ? (
                <Link
                  href={speaker.linkedinProfile}
                  className="flex gap-2 items-center justify-center hover:text-expoOrange transition-all duration-200"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Icon icon="jam:linkedin-circle" className="w-7 h-7" />
                  LinkedIn Profile
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="w-full h-px bg-black/20"></div>
            <div className="flex items-start justify-center flex-col w-full h-fit p-8 gap-2">
              <h4 className="text-sm font-bold tracking-wider text-black/80">
                PROFESSION
              </h4>
              <p className="font-rubik text-black/60">
                {speaker.title?.split("-")[0]}
              </p>
            </div>
            <div className="w-full h-px mx-auto bg-black/20"></div>
            <div className="flex items-start justify-center flex-col w-full h-fit p-8 gap-2">
              <h4 className="text-sm font-bold tracking-wider text-black/80">
                COMPANY
              </h4>
              <p className="font-rubik text-black/60">
                {speaker.title?.split("-")[1]}
              </p>
            </div>
            <div className="w-full h-px mx-auto bg-black/20"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SpeakerPage;
