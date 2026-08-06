import React from "react";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const pastPresentations = [
  {
    year: 2026,
    src: [
      {
        file: "/Past-Presentations/2026/Leading-through-Change-Riaan-Burger.pdf",
        alt: "Tough as a Diamond: Leading through Change - Riaan Burger",
      },
      {
        file: "/Past-Presentations/2026/Creating-Lasting-Value-Through-B2Golds-Otjikoto-Gold-Mine-John-Roos.pdf",
        alt: "Creating Lasting Value Through B2Gold's Otjikoto Gold Mine - John Roos",
      },
      {
        file: "/Past-Presentations/2026/Delivering-Investment-Jobs-and-Regional-Growth-through-the-Tumas-Uranium-Project-Zebra-Kasete.pdf",
        alt: "Delivering Investment, Jobs and Regional Growth Through the Tumas Uranium Project - Zebra Kasete",
      },
      {
        file: "/Past-Presentations/2026/The-ProLith-Project-Innovating-Lithium-Extraction-in-Namibia-Timothy-Marais.pdf",
        alt: "The ProLith Project: Innovating Lithium Extraction in Namibia - Timothy Marais",
      },
      {
        file: "/Past-Presentations/2026/Reflections-on-Minings-Commitments-and-the-Path-Forward-Fabian-Shaanika.pdf",
        alt: "Reflections on Mining's Commitments and the Path Forward - Fabian Shaanika",
      },
      {
        file: "/Past-Presentations/2026/Conference-Context-on-Minings-Commitments-One-Year-on-from-NamPPF-George-Botshiwe.pdf",
        alt: "Conference Context on Mining's Commitments One Year on from NamPPF - George Botshiwe",
      },
      {
        file: "/Past-Presentations/2026/Appian-in-Namibia-Creating-Opportunities.pdf",
        alt: "Appian in Namibia: Creating Opportunities with Rosh Pinah Zinc, Omitiomire Copper and beyond",
      },
    ],
  },
];

const PresentationsPage = () => {
  return (
    <div className="flex flex-col  w-full h-full">
      <PageBanner title="2026 Presentations" />
      <div className="py-16 gap-16 flex items-center justify-center flex-col w-[90%] lg:w-[60%]  mx-auto">
        <h2 className="text-xl md:text-5xl font-poppins font-bold text-black text-center">
          2026 Conference Presentations
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
