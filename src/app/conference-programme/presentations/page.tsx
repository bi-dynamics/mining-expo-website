import React from "react";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const pastPresentations = [
  {
    year: 2025,
    src: [
      {
        file: "/2025-Presentations/Financing-the-Future-How-Mining-can-Deliver-Namibias-Development-Promise-Angelique-Peake.pdf",
        alt: "Financing the Future - How Mining can Deliver Namibia's Development Promise - Angelique Peake",
      },
      {
        file: "/2025-Presentations/Namibias-Diamond-Future-Demarine-Namibia.pdf",
        alt: "Namibia's Diamond Future: Demarine Namibia navigating the course to resilience through the downturn cycles",
      },
      // {
      //   file: "/2024-Presentations/NIPDB-Investor-Retention-and-After-Care-Services.pdf",
      //   alt: "NIPDB Investor Retention and After Care Services",
      // },
      // {
      //   file: "/2024-Presentations/Driving-Local-Content-in-Namibias-Mining-Sector-The-Case-of-Kodo-Drilling.pdf",
      //   alt: "Driving Local Content in Namibia's Mining Sector - The Case of Kodo Drilling",
      // },
      // {
      //   file: "/2024-Presentations/Deep-Yellow_JB_MH_Development-of-Tumas-Project-in-a-Resurging-Uranium-Market.pdf",
      //   alt: "Deep Yellow - Development of the Tumas Project in a resurging uranium market",
      // },
      // {
      //   file: "/2024-Presentations/Bannermans-Etango-Project_Surving-the-Uranium-Downtun_Repaired.pdf",
      //   alt: "Bannerman's Etango Project - Surving the Uranium Downtun",
      // },
      // {
      //   file: "/2024-Presentations/A-New-Dawn-for-Namibias-Extractive-Sector.pdf",
      //   alt: "A New Dawn for Namibia's Extractive Sector - Ministry of Mines and Energy",
      // },
    ],
  },
];

const PresentationsPage = () => {
  return (
    <div className="flex flex-col  w-full h-full">
      <PageBanner title="2024 Presentations" />
      <div className="py-16 gap-16 flex items-center justify-center flex-col w-[90%] lg:w-[60%]  mx-auto">
        <h2 className="text-xl md:text-5xl font-poppins font-bold text-black text-center">
          2025 Conference Presentations
        </h2>

        <div className="flex flex-col gap-2 items-start justify-center">
          {pastPresentations.map((presentations) =>
            presentations.src.map((presentation, index) => (
              <Link
                href={presentation.file}
                download={presentation.file}
                target="_blank"
                key={index}
                className={clsx(
                  "w-full flex items-center justify-center shrink group bg-expoBlue hover:bg-expoOrange transition-colors rounded-xl font-semibold",
                  { "bg-expoBlue/85": index % 2 !== 0 }
                )}
              >
                <p className="text-sm lg:text-lg w-full text-white p-4">
                  {presentation.alt}
                </p>
                <Download className="h-4 w-4 mx-4 text-white transition-colors group-hover:text-expoBlue" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PresentationsPage;
