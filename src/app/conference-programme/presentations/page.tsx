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
        alt: "Financing the Future: How Mining can Deliver Namibia's Development Promise - Angelique Peake",
      },
      {
        file: "/2025-Presentations/Namibias-Diamond-Future-Debmarine-Namibia-navigating-the-course-to-resilience-through-the-downturn-cycles-Willy-Mertens.pdf",
        alt: "Namibia's Diamond Future: Debmarine Namibia navigating the course to resilience through the downturn cycles - Willy Mertens",
      },
      {
        file: "/2025-Presentations/Otjikoto-Gold-Mine-A-Pioneer-in-Namibias-Mining-Revolution-John-Roos.pdf",
        alt: "Otjikoto Gold Mine: A Pioneer in Namibia's Mining Revolution - John Roos",
      },
      {
        file: "/2025-Presentations/Navachab-Gold-Mine-Expansion-Unlocking-Jobs-Innnovation-and-Economic-Transformation-George-Botshiwe.pdf",
        alt: "Navachab Gold Mine Expansion: Unlocking Jobs, Innovation and Economic Transformation - George Botshiwe",
      },
      {
        file: "/2025-Presentations/Husab-Mine-Building-a-World-Class-Namibian-Uranium-Company-Irvinne-Simataa.pdf",
        alt: "Husab Mine: Building a World-Class Namibian Uranium Company - Irvinne Simataa",
      },
      {
        file: "/2025-Presentations/Building-Namibias-Intergrated-Marine-Phosphate-Industry-to-Fuel-Economic-Diversification-and-Value-Creation-Mike-Woodbone-and-Chris-Jordinson.pdf",
        alt: "Building Namibia's Integrated Marine Phosphate Industry to Fuel Economic Diversification and Value Creation - Mike Woodbone and Chris Jordinson",
      },
      {
        file: "/2025-Presentations/Etango-Contribution-to-Local-Economic-Growth-Werner-Ewald.pdf",
        alt: "Etango: Contribution to Local Economic Growth - Werner Ewald",
      },
      {
        file: "/2025-Presentations/The-Transformative-Impact-of-the-Tumas-Uranium-Project-John-Borshoff.pdf",
        alt: "The Transformative Impact of the Tumas Uranium Project - John Borshoff",
      },
    ],
  },
];

const PresentationsPage = () => {
  return (
    <div className="flex flex-col  w-full h-full">
      <PageBanner title="2025 Presentations" />
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
