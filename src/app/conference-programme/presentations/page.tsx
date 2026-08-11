import React from "react";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface Presentation {
  file: string;
  alt: string;
}

interface PresentationSection {
  title: string;
  /** Shown in place of the list while a programme has nothing published yet. */
  emptyMessage?: string;
  presentations: Presentation[];
}

const sections: PresentationSection[] = [
  {
    title: "Mining Conference",
    presentations: [
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
      {
        file: "/Past-Presentations/2026/Marine-Phosphate-Mining-A-Strategic-Opportunity-Mike-Woodborne-and-Chris-Jordinson.pdf",
        alt: "Marine Phosphate Mining: A Strategic Opportunity for Namibia's Next Phase of Economic Growth - Mike Woodborne and Chris Jordinson",
      },
    ],
  },
  {
    title: "Health & Safety Conference",
    presentations: [
      {
        file: "/Past-Presentations/2026/Legal-Compliance-Safety-Accountability-and-Leadership-in-Namibian-Mining-Zeka-Alberto.pdf",
        alt: "Legal Compliance: Safety, Accountability and Leadership in Namibian Mining - Zeka Alberto",
      },
      {
        file: "/Past-Presentations/2026/Legal-Compliance-A-Regulators-View-Presley-Kamuvi.pdf",
        alt: "Legal Compliance: A Regulator's View - Presley Kamuvi",
      },
      {
        file: "/Past-Presentations/2026/Leadership-Development-for-Health-and-Safety-Rudzani-Petrus-Mulaudzi.pdf",
        alt: "Leadership Development for Health & Safety - Rudzani Petrus Mulaudzi",
      },
      {
        file: "/Past-Presentations/2026/The-Debmarine-Namibia-Safety-Maturity-Journey-Charlotte-Maenge-Shipiki-Kali.pdf",
        alt: "The Debmarine Namibia Safety Maturity Journey - Charlotte Maenge Shipiki-Kali",
      },
    ],
  },
  {
    title: "NamXplore",
    emptyMessage: "NamXplore presentations will be published here once available.",
    presentations: [],
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

        {sections.map((section) => (
          <section key={section.title} className="w-full flex flex-col gap-6">
            <h3 className="text-lg md:text-3xl font-poppins font-bold text-expoBlue text-center">
              {section.title}
            </h3>

            {section.presentations.length > 0 ? (
              <div className="flex flex-col gap-2 items-start justify-center">
                {section.presentations.map((presentation, index) => (
                  <Link
                    href={presentation.file}
                    download={presentation.file}
                    target="_blank"
                    key={presentation.file}
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
                ))}
              </div>
            ) : (
              <p className="text-sm lg:text-lg text-center text-black/60 font-rubik border border-dashed border-black/20 rounded-xl p-6">
                {section.emptyMessage}
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PresentationsPage;
