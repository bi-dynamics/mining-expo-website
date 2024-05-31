import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import { getExhibitors } from "@/lib/getExhibitors";
import { getFloorPlans } from "@/lib/getFloorPlans";
import PastExpo from "@/components/Expo2023";

export const metadata: Metadata = {
  title: "2023 Presentations",
};

const pdfFiles = [
  {
    src: "/2023-Presentations/Nuclear-Energy-in-the-Global-Energy-Transition-Implications-for-Namibias-Uranium-Sector.pdf",
  },
  {
    src: "/2023-Presentations/Redeveloping-the-Okanjande-mine-building-a-leading-graphite-and-processing-company.pdf",
  },
  {
    src: "/2023-Presentations/Rare-Earths-Alliance-Namibia-Strategic-Partnerships-for-Namibia-to-become-the-next-rare-earths-producer.pdf",
  },
  {
    src: "/2023-Presentations/MME-position-on-Critical-Raw-materials-and-the-sustainable-supply-of-critical-minerals-Presentation.pdf",
  },
  {
    src: "/2023-Presentations/Overview-of-Critical-Minerals-Deposits-in-Namibia-Geological-Survey-of-Namibia.pdf",
  },
  {
    src: "/2023-Presentations/The-Minerals-value-Chains-in-Battery-industry-from-exploration-to-beneficiation-GSK.pdf",
  },
  {
    src: "/2023-Presentations/2023-08-31-Speech-by-Mrs-Gosia-Lachut-EU-Deputy-Head-of-Mission-Mining-Conference.pdf",
  },
];

const Presentations2023Page = async () => {
  const exhibitors = await getExhibitors();
  const floorplans2023 = await getFloorPlans();
  return (
    <div className="flex flex-col  w-full h-full bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
      <PageBanner title="Expo 2023" />
      <div className="py-16 gap-4 md:gap-[-2px] flex items-center justify-center flex-col w-[90%] lg:w-[70%] mx-auto">
        <h2 className="text-xl md:text-5xl font-poppins font-bold text-black text-center w-full">
          Mining Expo & Conference 2023
        </h2>
        <PastExpo exhibitorsList={exhibitors} floorPlans={floorplans2023} />
        <div className="flex flex-col gap-2 w-full items-start justify-start border-l-expoBlue border-l-8 rounded-md pl-8">
          <h3 className="text-xl pb-6  lg:text-4xl font-poppins font-bold text-expoBlue ">
            2023 Presentations
          </h3>
          {pdfFiles.map((file, index) => (
            <Link
              href={file.src}
              download={file.src}
              key={index}
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center shrink bg-expoBlue rounded-xl font-semibold"
            >
              <p className="text-sm lg:text-lg w-full text-white p-4">
                {file.src.split("/")[2].split(".pdf")[0].split("-").join(" ")}
              </p>
              <Download className="h-4 w-4 mx-4 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentations2023Page;
