import PageBanner from "@/components/PageBanner";
import { getEventSpeaker } from "@/lib/getEventSpeakers";
import { getAvatarColor, getInitials } from "@/lib/avatar";
import { ArrowLeft, ExternalLink, Linkedin, Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SpeakerPageProps {
  params: { speakerId: string };
}

export async function generateMetadata({
  params,
}: SpeakerPageProps): Promise<Metadata> {
  const speaker = await getEventSpeaker(params.speakerId);
  return {
    title: speaker?.name ?? "Speaker",
    description: speaker
      ? `${speaker.name} — speaker at the Mining Expo & Conference 2026.`
      : undefined,
  };
}

async function SpeakerPage({ params }: SpeakerPageProps) {
  const speaker = await getEventSpeaker(params.speakerId);
  if (!speaker) {
    notFound();
  }

  const linkedin = speaker.socialLinks["linkedin"];
  const avatarColor = getAvatarColor(speaker.name);

  return (
    <main>
      <PageBanner title={speaker.name} />
      <section className="w-full flex items-start justify-start h-fit bg-[#F2F2F2] pt-8 px-[5%] xl:px-[20%]">
        <Link
          href="./"
          className="flex items-center justify-center gap-2 w-fit h-fit px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          <ArrowLeft color="#041a51" />
          <p className="font-medium ">Back to Speakers List</p>
        </Link>
      </section>
      <section className="flex items-center justify-center bg-[#F2F2F2] h-fit w-full py-16">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center bg-[#F2F2F2] h-fit w-full xl:w-[60%] gap-8">
          <div className="bg-white rounded-xl w-[90%] xl:w-2/3 h-full flex flex-col items-center justify-start p-4 xl:p-8 gap-8 text-sm xl:text-lg">
            {speaker.photoUrl ? (
              <Image
                src={speaker.photoUrl}
                width={500}
                height={500}
                alt={`Image of ${speaker.name}`}
                className="w-full max-w-[500px] h-auto rounded-lg"
              />
            ) : (
              <div
                className="w-full max-w-[500px] aspect-square rounded-lg flex items-center justify-center font-poppins font-bold text-8xl"
                style={{
                  backgroundColor: avatarColor.background,
                  color: avatarColor.text,
                }}
              >
                {getInitials(speaker.name)}
              </div>
            )}
            {speaker.bio && (
              <div className="w-full h-full font-rubik whitespace-pre-line">
                {speaker.bio}
              </div>
            )}
          </div>
          <div className="bg-white rounded-xl w-[90%] xl:w-1/3 h-full flex flex-col items-start justify-center py-8 sticky top-40">
            <div className="w-full h-fit flex flex-col items-start justify-center px-8 pb-8 gap-4">
              <h2 className="text-lg font-bold font-poppins">
                Speaker details
              </h2>

              {speaker.website && (
                <Link
                  href={speaker.website}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex flex-wrap gap-2 items-center justify-center hover:text-expoOrange transition-all duration-200"
                >
                  <ExternalLink className="w-6 h-6" />
                  Website
                </Link>
              )}
              {speaker.email && (
                <Link
                  href={`mailto:${speaker.email}`}
                  className="flex flex-wrap gap-2 items-center justify-center hover:text-expoOrange transition-all duration-200"
                >
                  <Mail className="w-6 h-6" />
                  {speaker.email}
                </Link>
              )}
              {linkedin && (
                <Link
                  href={linkedin}
                  className="flex gap-2 items-center justify-center hover:text-expoOrange transition-all duration-200"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Linkedin className="w-6 h-6" />
                  LinkedIn Profile
                </Link>
              )}
            </div>
            <div className="w-full h-px bg-black/20"></div>
            {speaker.title && (
              <>
                <div className="flex items-start justify-center flex-col w-full h-fit p-8 gap-2">
                  <h4 className="text-sm font-bold tracking-wider text-black/80">
                    PROFESSION
                  </h4>
                  <p className="font-rubik text-black/60">{speaker.title}</p>
                </div>
                <div className="w-full h-px mx-auto bg-black/20"></div>
              </>
            )}
            {speaker.company && (
              <>
                <div className="flex items-start justify-center flex-col w-full h-fit p-8 gap-2">
                  <h4 className="text-sm font-bold tracking-wider text-black/80">
                    COMPANY
                  </h4>
                  <p className="font-rubik text-black/60">{speaker.company}</p>
                </div>
                <div className="w-full h-px mx-auto bg-black/20"></div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SpeakerPage;
