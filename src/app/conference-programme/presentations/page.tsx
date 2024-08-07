import React from "react";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const pastPresentations = [
  {
    year: 2024,
    src: [
      {
        file: "/2024-Presentations/Navigating-the-Green-Shoots-Leveraging-Financial-and-Commodity-Insights-for-Sustainable-Growth-in-Namibias-Mining-Sector.pdf",
        alt: "Navigating the Green Shoots - Leveraging Financial and Commodity Insights for Sustainable Growth in Namibia's Mining Sector",
      },
    ],
  },
];

const PresentationsPage = () => {
  return (
    <div className="flex flex-col  w-full h-full">
      <PageBanner title="2024 Presentations" />
      <div className="py-16 gap-16 flex items-center justify-center flex-col w-[90%] lg:w-[60%]  mx-auto">
        <h2 className="text-xl md:text-5xl font-poppins font-bold text-black text-center">
          Conference Presentations
        </h2>

        <div className="flex flex-col gap-2 items-start justify-center">
          {pastPresentations.map((presentations) =>
            presentations.src.map((presentation, index) => (
              <Link
                href={presentation.file}
                download={presentation.file}
                key={index}
                target="_blank"
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
