"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pastPresentations = [
  {
    year: 2013,
    src: [
      {
        file: "/Past-Presentations/2013/Mining-Industry-Performance-during-2012.pdf",
        alt: "Mining Industry Performance during 2012",
      },
      {
        file: "/Past-Presentations/2013/nampower.pdf",
        alt: "NamPower briefing on status power supply",
      },
      {
        file: "/Past-Presentations/2013/AFRPresentation.pdf",
        alt: "AFR Sese Presentation to Chamber of Mines",
      },
      {
        file: "/Past-Presentations/2013/Swakop-Uranium.pdf",
        alt: "Swakop Uranium",
      },
      {
        file: "/Past-Presentations/2013/securityofwater.pdf",
        alt: "Security of water supply to mining industry",
      },
      {
        file: "/Past-Presentations/2013/Mini-safety-challenge.pdf",
        alt: "Mine Safety and Challenges - Mathews Amunghete",
      },
      {
        file: "/Past-Presentations/2013/Upstream_Downstream.pdf",
        alt: "Upstream Downstream",
      },
      {
        file: "/Past-Presentations/2013/Implementation.pdf",
        alt: "Implementation of the Environmental Management Act, 2007 - Role of Mining Industry",
      },
      {
        file: "/Past-Presentations/2013/Implementing_Environmental_Governance.pdf",
        alt: "Implementing Environmental Governance",
      },
      {
        file: "/Past-Presentations/2013/benefits.pdf",
        alt: "Who Benefits from the Mining Industry",
      },
      {
        file: "/Past-Presentations/2013/The-role-of-epangelo-in-the-Namibian-Mining-Industry.pdf",
        alt: "The role of Epangelo in the Namibian Mining Industry",
      },
    ],
  },
  {
    year: 2014,
    src: [
      {
        file: "/Past-Presentations/2014/MineAdvert.pdf",
        alt: "Mine Advert",
      },
      {
        file: "/Past-Presentations/2014/The_Role_of_Epangelo_in_the_Namibian_Mining_Industry.pdf",
        alt: "The Role of Epangelo in the Namibian Mining Industry",
      },
      {
        file: "/Past-Presentations/2014/Security_of_Power_Nampower_briefing_on_the_status_of_power_supply.pdf",
        alt: "Security of Power, Nampower briefing on the status of power supply",
      },
      {
        file: "/Past-Presentations/2014/Namibia_Uranium_Association__NAU__Safeguarding_the_Namibian_brand_of_uranium.pdf",
        alt: "Namibian Uranium Association NAU Safeguarding the Namibian brand of uranium",
      },
      {
        file: "/Past-Presentations/2014/Security_of_water_supply_to_mining_industry.pdf",
        alt: "Security of water supply to mining industry",
      },
      {
        file: "/Past-Presentations/2014/Namport_Expansion_initiative_to_support_the_Mining_Industry.pdf",
        alt: "Namport Expansion Initiatives to support the Mining Industry",
      },
      {
        file: "/Past-Presentations/2014/B2Gold_Othiokoto_Gold_Project.pdf",
        alt: "B2Gold Otjikoto Gold Project",
      },
      {
        file: "/Past-Presentations/2014/Downstream_beneficiation_to_Minerals_Presentation_on_progress_to_VAC.pdf",
        alt: "Downstream benefication to Minerals Presentation on progress to VAC",
      },
      {
        file: "/Past-Presentations/2014/Mining_Industry_Performance_and_Challenges_during_2013.pdf",
        alt: "Mining Industry Performance and Challenges during 2013",
      },
      {
        file: "/Past-Presentations/2014/Tschudi_Copper_Project.pdf",
        alt: "Tschudi Copper Project",
      },
      {
        file: "/Past-Presentations/2014/Mine_Safety_and_Challenges.pdf",
        alt: "Mine Safety and Challenges",
      },
      {
        file: "/Past-Presentations/2014/Husab_project_progress.pdf",
        alt: "Husab Project Progress",
      },
    ],
  },
  {
    year: 2015,
    src: [
      {
        file: "/Past-Presentations/2014/Mining_Industry_Performance__Challenges_during_2014.pdf",
        alt: "Mining Industry Performance Challenges during 2014",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Namdeb re-investment projects Extending the land based diamond operations to 2050 beyond",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Joint Value Addition Committee VAC Presentation of Phase 2 Report",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Human Capital driving Swakop Uranium to be world Class",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Implementing CSR when funding is scarce",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Security of Power NamPower briefing on the status of power supply",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Mining and Gender - Promoting women in Mining",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Launch of 2014 SEMP Report",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Otjikoto Gold Mine - Commissioning of the 2nd gold mine in Namibia",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Tschudi Copper Mine - Taking value addition to greater heights",
      },
      {
        file: "/Past-Presentations/2014/.pdf",
        alt: "Mine Safety - Driving Zero harm in the mining industry",
      },
    ],
  },
];

const PastPresentationsPage = () => {
  function filterPresentationsByYear(yearToFilter: number) {
    return pastPresentations.filter(
      (presentation) => presentation.year === yearToFilter
    );
  }

  const [currentYear, setCurrentYear] = useState(2013);
  return (
    <div className="flex flex-col  w-full h-full">
      <PageBanner title="Mining Expo & Conference Past Presentations" />
      <div className="py-16 gap-16 flex items-center justify-center flex-col w-[90%] lg:w-[60%]  mx-auto">
        <h2 className="text-xl md:text-5xl font-poppins font-bold text-black text-center">
          Mining Expo & Conference Past Presentations
        </h2>
        <div className="flex flex-wrap gap-2 items-start justify-center">
          {pastPresentations.map((year, index) => (
            <div key={index}>
              <Button
                key={index}
                onClick={() => {
                  setCurrentYear(2013 + index);
                }}
                className="w-fit font-bold font-rubik bg-expoBlue"
              >
                {year.year}
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          {
            <p className="font-xs font-mono text-black/50 self-end">
              {currentYear}
            </p>
          }
          {filterPresentationsByYear(currentYear).map((presentations) =>
            presentations.src.map((presentation, index) => (
              <Link
                href={presentation.file}
                download={presentation.file}
                key={index}
                className="w-full flex items-center justify-center shrink bg-expoBlue rounded-xl font-semibold"
              >
                <p className="text-sm lg:text-lg w-full text-white p-4">
                  {presentation.alt}
                </p>
                <Download className="h-4 w-4 mx-4 text-white" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PastPresentationsPage;
