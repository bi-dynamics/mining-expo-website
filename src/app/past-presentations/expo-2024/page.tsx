import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import { getExhibitorsByYear } from "@/lib/getExhibitors";
import { getFloorPlansByYear } from "@/lib/getFloorPlans";
import PastExpo from "@/components/PastExpos";

export const metadata: Metadata = {
  title: "2024 Presentations",
};

const pdfFiles = [
  {
    src: "/Past-Presentations/2024/Navigating-the-Green-Shoots-Leveraging-Financial-and-Commodity-Insights-for-Sustainable-Growth-in-Namibias-Mining-Sector.pdf",
    alt: "Navigating the Green Shoots - Leveraging Financial and Commodity Insights for Sustainable Growth in Namibia's Mining Sector",
  },
  {
    src: "/Past-Presentations/2024/Restarting-the-Langer-Heinrich-Uranium-mines.pdf",
    alt: "Restarting the Langer Heinrich Uranium mines",
  },
  {
    src: "/Past-Presentations/2024/NIPDB-Investor-Retention-and-After-Care-Services.pdf",
    alt: "NIPDB Investor Retention and After Care Services",
  },
  {
    src: "/Past-Presentations/2024/Driving-Local-Content-in-Namibias-Mining-Sector-The-Case-of-Kodo-Drilling.pdf",
    alt: "Driving Local Content in Namibia's Mining Sector - The Case of Kodo Drilling",
  },
  {
    src: "/Past-Presentations/2024/Deep-Yellow_JB_MH_Development-of-Tumas-Project-in-a-Resurging-Uranium-Market.pdf",
    alt: "Deep Yellow - Development of the Tumas Project in a resurging uranium market",
  },
  {
    src: "/Past-Presentations/2024/Bannermans-Etango-Project_Surving-the-Uranium-Downtun_Repaired.pdf",
    alt: "Bannerman's Etango Project - Surving the Uranium Downtun",
  },
  {
    src: "/Past-Presentations/2024/A-New-Dawn-for-Namibias-Extractive-Sector.pdf",
    alt: "A New Dawn for Namibia's Extractive Sector - Ministry of Mines and Energy",
  },
];

const Presentations2024Page = async () => {
  const exhibitors = await getExhibitorsByYear(2024);
  const floorplans = await getFloorPlansByYear(2024);
  return (
    <div className="flex flex-col  w-full h-full bg-[url('../../public/gallery-section-bg.png')] bg-cover bg-fixed bg-top">
      <PageBanner title="Expo 2024" />
      <div className="py-16 gap-4 md:gap-[-2px] flex items-center justify-center flex-col w-[90%] lg:w-[70%] mx-auto">
        <h2 className="text-xl md:text-5xl font-poppins font-bold text-black text-center w-full">
          Mining Expo & Conference 2024
        </h2>
        <PastExpo
          exhibitorsList={exhibitors}
          floorPlans={floorplans}
          currentYear={2024}
        />
        <div className="flex flex-col py-16 gap-2 w-full items-start justify-start rounded-md pl-8">
          <h3 className="text-xl pb-6  lg:text-4xl font-poppins font-bold text-expoBlue ">
            2024 Presentations
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
                {file.alt}
              </p>
              <Download className="h-4 w-4 mx-4 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentations2024Page;
