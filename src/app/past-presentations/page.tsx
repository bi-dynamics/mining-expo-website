"use client";

import React, { useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ExhibitorData, getExhibitorsByYear } from "@/lib/getExhibitors";
import { FloorPlanData, getFloorPlansByYear } from "@/lib/getFloorPlans";
import PastExpos from "@/components/PastExpos";

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
        file: "/Past-Presentations/2015/Human_Capital_driving_Swakop_Uranium_to_be_world_Class.pdf",
        alt: "Human Capital driving Swakop Uranium to be world class",
      },
      {
        file: "/Past-Presentations/2015/Namdeb_re-investment_projects_-_Extending_the_land_based_diamond_operations_to_2050__beyond.pdf",
        alt: "Namdeb re-investment projects Extending the land based diamond operations to 2050 beyond",
      },
      {
        file: "/Past-Presentations/2015/Joint_Value_Addition_Committee_VAC_-_Presentation_of_Phase_2_Report.pdf",
        alt: "Joint Value Addition Committee VAC Presentation of Phase 2 Report",
      },
      {
        file: "/Past-Presentations/2015/Implementing_CSR_when_funding_is_scarce-1.pdf",
        alt: "Implementing CSR when funding is scarce",
      },
      {
        file: "/Past-Presentations/2015/Security_of_Power_NamPower_briefing_on_the_status_of_power_supply.pdf",
        alt: "Security of Power NamPower briefing on the status of power supply",
      },
      {
        file: "/Past-Presentations/2015/Mining_and_Gender_-_Promoting_women_in_Mining.pdf",
        alt: "Mining and Gender - Promoting women in Mining",
      },
      {
        file: "/Past-Presentations/2015/Launch_of_2014_SEMP_Report.pdf",
        alt: "Launch of 2014 SEMP Report",
      },
      {
        file: "/Past-Presentations/2015/Otjikoto_Gold_Mine_-_Commissioning_of_the_2nd_gold_mine_in_Namibia.pdf",
        alt: "Otjikoto Gold Mine - Commissioning of the 2nd gold mine in Namibia",
      },
      {
        file: "/Past-Presentations/2015/Tschudi_Copper_Mine_-_Taking_value_addition_to_greater_heights.pdf",
        alt: "Tschudi Copper Mine - Taking value addition to greater heights",
      },
      {
        file: "/Past-Presentations/2015/Mine-Safety-Driving-Zero-harm-in-the-mining-industry.pdf",
        alt: "Mine Safety - Driving Zero harm in the mining industry",
      },
      {
        file: "/Past-Presentations/2015/Mining_Industry_Performance__Challenges_during_2014.pdf",
        alt: "Mining Industry Performance challenges during 2014",
      },
    ],
  },
  {
    year: 2016,
    src: [
      {
        file: "/Past-Presentations/2016/1_Mining_Industry_Performance_during_2015__Final.pdf",
        alt: "Mining Industry Performance Challenges during 2015",
      },
      {
        file: "/Past-Presentations/2016/2_Tracking_the_trends_2016_-_The_top_10_issues_mining_companies_will_face_in_the_coming_year.pdf",
        alt: "Tracking trends - Top 10 issues mining companies will face in the coming year",
      },
      {
        file: "/Past-Presentations/2016/3_Joint_Value_Addition_Committee_VAC_-_Opportunities_beyond_Mining.pdf",
        alt: "Joint Value Addition Committee VAC Presentation",
      },
      {
        file: "/Past-Presentations/2016/4_Marine_Phosphate.pdf",
        alt: "Marine Phosphate Project",
      },
      {
        file: "/Past-Presentations/2016/4_Secure_Electricity_Supply_with_Solar-Diesel-Hybrid_Solutions.pdf",
        alt: "Secure Electricity Supply with Solar-Diesel-Hybrid Solutions",
      },
      {
        file: "/Past-Presentations/2016/5_Mine_Safety_Driving_Zero_Harm_in_the_mining_industry.pdf",
        alt: "Mine Safety – Driving Zero Harm In The Mining Industry",
      },
      {
        file: "/Past-Presentations/2016/6_Launch_of_Semp_Report.pdf",
        alt: "Launch of SEMP Report",
      },
      {
        file: "/Past-Presentations/2016/7_Establishing_the_Namibian_Chamber_of_Environment.pdf",
        alt: "Establishing the Namibian Chamber of Environment",
      },
    ],
  },
  {
    year: 2017,
    src: [
      {
        file: "/Past-Presentations/2017/1._Dynamics_of_the_uranium_market-1.pdf",
        alt: "Dynamics of the uranium market",
      },
      {
        file: "/Past-Presentations/2017/1._Mining_Industry_Performance__Challenges_2016.pdf",
        alt: "Mining Industry Performance Challenges during 2016",
      },
      {
        file: "/Past-Presentations/2017/2._Husab_Uranium_mine_-_the_largest_uranium_mine_in_the_world_comes_into_production.pdf",
        alt: "Husab Uranium Mine - largest uranium mine in the world - comes into production",
      },
      {
        file: "/Past-Presentations/2017/2._Water_Security_concerns_for_mining_industry-1.pdf",
        alt: "Water Security concerns for mining industry",
      },
      {
        file: "/Past-Presentations/2017/3._World_Exploration_Trends_-_How_can_Namibia_get_a_bigger_slice.pdf",
        alt: "World Exploration Trends - How can Namibia get a bigger slice",
      },
      {
        file: "/Past-Presentations/2017/4._Promoting_Gender_in_mining.pdf",
        alt: "Promoting Gender in mining",
      },
      {
        file: "/Past-Presentations/2017/5._Mine_Safety_-_Driving_zero_harm_in_the_mining_industry.pdf",
        alt: "Mine Safety - Driving zero harm in the mining industry",
      },
      {
        file: "/Past-Presentations/2017/7._Launch_of_SEMP_Report.pdf",
        alt: "Launch of SEMP Report",
      },
      {
        file: "/Past-Presentations/2017/7._Mining_Industry_contribution_to_Harambee__NDP5.pdf",
        alt: "Mining Industry contribution to Harambee",
      },
      {
        file: "/Past-Presentations/2017/8._Mining_Industry_joint_CSR_Project_in_non-mining_regions_of_Namibia.pdf",
        alt: "Joint CSR Project in non-mining regions of Namibia",
      },
    ],
  },
  {
    year: 2018,
    src: [
      {
        file: "/Past-Presentations/2018/7._Reiaon_Presentation.pdf",
        alt: "REIAON - Renewable Energy Industry Association of Namibia",
      },
      {
        file: "/Past-Presentations/2018/11._WiMAN_presentation-1.pdf",
        alt: "WiMAN - Women in Mining Association Namibia",
      },
      {
        file: "/Past-Presentations/2018/Celsius_Presentation_Chamber_of_Mines_Namibia_Mining_Conference.pdf",
        alt: "Chamber of Mines Namibia Mining Conference Opuwo Cobalt Project",
      },
      {
        file: "/Past-Presentations/2018/Competing_for_Investment_into_mining_-_Namibias_position_in_the_global_context.pdf",
        alt: "Competing for Investment into mining - Namibias position in the global context",
      },
      {
        file: "/Past-Presentations/2018/Mining_Industry_Performance_2017.pdf",
        alt: "Mining Industry Performance in 2017",
      },
      {
        file: "/Past-Presentations/2018/NAMPOA_Presentation.pdf",
        alt: "OIL & GAS UPSTREAM SECTOR PRESENTATION - NAMIBIA PETROLEUM OPERATOR ASSOCIATION",
      },
      {
        file: "/Past-Presentations/2018/Namwater_Presentation.pdf",
        alt: "NamWater Infrastructure challenges for Mines in the South",
      },
      {
        file: "/Past-Presentations/2018/Pursuing_Nuclear_Power_as_an_option_ofr_Namibia.pdf",
        alt: "Pursuing nuclear power as an option for Namibia",
      },
      {
        file: "/Past-Presentations/2018/PwC_Presentation.pdf",
        alt: "Topical Namibian tax considerations - from a Mining perspective by PwC",
      },
    ],
  },
  {
    year: 2019,
    src: [
      {
        file: "/Past-Presentations/2019/1.-Down-memory-lane-History-of-the-Chamber-of-MinesFinal-2.-8-May-2019.pdf",
        alt: "Down memory lane History of the Chamber of Mines, Present and future outlook",
      },
      {
        file: "/Past-Presentations/2019/1.Mining-Industry-Performance-2018-Final-.-8-May-2019.pdf",
        alt: "Mining Industry Performance in 2018",
      },
      {
        file: "/Past-Presentations/2019/2.-DBMN-Overview-Mining-Expo-9-May-2019.pdf",
        alt: "Debmarine Namibia: Past-Present-Prospects",
      },
      {
        file: "/Past-Presentations/2019/2.2019-Mining-Conference-NLZM-Presentation.pdf",
        alt: "Namib Lead & Zinc Mining",
      },
      {
        file: "/Past-Presentations/2019/3.-Lovisa-Transfer-Mis-Pricing-Final.pdf",
        alt: "Lovisa: Transfer Mis-Pricing",
      },
      {
        file: "/Past-Presentations/2019/4._Implementing_CSR_when_funding_is_scarce.pdf",
        alt: "Implementing CSR when funding is scarce",
      },
      {
        file: "/Past-Presentations/2019/4.Achieving-Sustainable-Growth-Mining-Expo.pdf",
        alt: "ACHIEVING SUSTAINABLE GROWTH OF NAMIBIA’S MINING INDUSTRY",
      },
      {
        file: "/Past-Presentations/2019/6.-AfriTin-Presentation.pdf",
        alt: "AfriTin Mining",
      },
      {
        file: "/Past-Presentations/2019/7.-Namibias-Exploration-Potential.pdf",
        alt: "Exploration potential in Namibia",
      },
      {
        file: "/Past-Presentations/2019/9.-Deepening-of-Upstream-Linkages-through-the-Namibian-Mining-Industry.pdf",
        alt: "Deepening of Upstream Linkages through the Namibian Mining Industry",
      },
      {
        file: "/Past-Presentations/2019/10.-Best-Practice-Guide-Launch.pdf",
        alt: "BEST PRACTICE GUIDE - ENVIRONMENTAL PRINCIPLES FOR MINING IN NAMIBIA",
      },
      {
        file: "/Past-Presentations/2019/11.-A.H.-Naobeb-Trad-Ent-presentation-CoM-Expo19.pdf",
        alt: "A.H. //Naobeb Trading Enterprise cc",
      },
      {
        file: "/Past-Presentations/2019/13.-Mining-Expo-2019_Raising-Capital.pdf",
        alt: "Raising Capital for Exploration in Namibia",
      },
    ],
  },
  {
    year: 2021,
    src: [
      {
        file: "/Past-Presentations/2021/Digital-Transformation-as-an-Enabler-to-Sustainable-Mining-at-the-Trevali-Rosh-Pinah-Mine-2021-Mining-Conf.-01.09.2021.pdf",
        alt: "Technology as an enabler for a sustainable future",
      },
      {
        file: "/Past-Presentations/2021/ESG-Corporate-Governance-in-the-Mining-Industry.-2021-Mining-Conf.-01.09.2021.pdf",
        alt: "ESG and CORPORATE GOVERNANCE IN THE MINING SECTOR",
      },
      {
        file: "/Past-Presentations/2021/Impacts-of-COVID-19-on-the-Mining-Industy.-Mining-Conference-2021.-01.09.2021.pdf",
        alt: "IMPACT OF COVID-19 ON THE MINING INDUSTRY",
      },
      {
        file: "/Past-Presentations/2021/Mine-Closure-and-Sustainable-Town-Transformation.-Mining-Conference-2021.-01.09.2021.pdf",
        alt: "Town Transformations & Mine Closures - Connecting dots",
      },
      {
        file: "/Past-Presentations/2021/Mining-Industry-Support-to-COVID-19-Initiatives-Mining-Conf-01.09.2021.pdf",
        alt: "Mining Industry Support to COVID-19 Initiatives",
      },
      {
        file: "/Past-Presentations/2021/Opportunities-for-Mining-Sector-post-COVID_2021-Mining-Conference.-01.09.2021.pdf",
        alt: "Global, local mining trends & Namibia’s competitiveness and opportunities",
      },
      {
        file: "/Past-Presentations/2021/Progressing-the-Tumas-Project-with-DFS.-2021-Mining-Conference-01.09.2021.pdf",
        alt: "Progressing the Tumas Project with DFS",
      },
      {
        file: "/Past-Presentations/2021/Renewable-Energy-and-Green-Hydrogen-for-Namibias-Mining-Sector.-Mining-Conf-2021.-01.09.2021.pdf",
        alt: "Transitioning Namibian Energy Landscape towards Renewables & Hydrogen",
      },
      {
        file: "/Past-Presentations/2021/Skorpion-Zinc-Refinery-Expansion.-2021-Mining-Conf.-01.09.2021.pdf",
        alt: "Skorpion Zinc Refinery Conversion and Expansion Project",
      },
      {
        file: "/Past-Presentations/2021/Status-Quo-of-Mining-Sector-in-2021-Poised-for-Growth.-2021-Mining-Conf-01.09.2021-1.pdf",
        alt: "Status Quo of Mining Sector in 2021 - Poised for Growth?",
      },
      {
        file: "/Past-Presentations/2021/Update-on-Bannerman-Etango-Project.-2021-Mining-Conference.-01.09.2021-1.pdf",
        alt: "Update on Bannerman Etango Project",
      },
    ],
  },
  {
    year: 2022,
    src: [
      {
        file: "/Past-Presentations/2022/2.-Resurgence-of-Namibia-Uranium-Sector.pdf",
        alt: "THE RESURGENCE OF NAMIBIA’S URANIUM SECTOR",
      },
      {
        file: "/Past-Presentations/2022/3.-Building-a-Global-Tier-1-Uranium-Company.pdf",
        alt: "BUILDING A GLOBAL TIER-1 URANIUM COMPANY",
      },
      {
        file: "/Past-Presentations/2022/4.-Expansion-Projects-and-Growth-Trajectory-of-the-Navachab-Mine.pdf",
        alt: "EXPANSION PROJECTS AND GROWTH TRAJECTORY OF THE NAVACHAB GOLD MINE",
      },
      {
        file: "/Past-Presentations/2022/5.-Benguela-Gem-The-Game-Changer-of-Marine-Diamond-Recovery.pdf",
        alt: "BENGUELA GEM THE GAME CHANGER OF MARINE DIAMOND RECOVERY ",
      },
      {
        file: "/Past-Presentations/2022/6.-From-mineral-potential-through-circular-economy-towards-energy-solutions_1.pdf",
        alt: "From mineral potential through circular economy towards energy solutions",
      },
      {
        file: "/Past-Presentations/2022/7.-NMPs-Sandpiper-Marine-Phosphate-Project-The-Catalyst-for-Establishing-a-Sustainable-and-Environmentally-Responsible-Phosphate-Based-Industry.pdf",
        alt: "NMP's Sandpiper Marine Phosphate Project ",
      },
      {
        file: "/Past-Presentations/2022/8.-Osino-Resources-Twin-Hills-Namibias-Next-Gold-mine.pdf",
        alt: "Namibia's Next Gold Mining Champion",
      },
      {
        file: "/Past-Presentations/2022/9.-ESG-Frontiers-of-Resilience.pdf",
        alt: "ESG: New Frontiers of Resilience",
      },
      {
        file: "/Past-Presentations/2022/10.-Green-Hydrogen-Possible-Applications-in-Namibias-Mining-Industry-The-Case-for-a-Niche-Green-Steel-Industry.pdf",
        alt: "The Case For A Niche Green Steel Industry In Namibia",
      },
      {
        file: "/Past-Presentations/2022/11.Modified-Single-Buyer-Model-–-Impact-for-Energy-Delivery-to-The-Mining-Sector.pdf",
        alt: "Modified Single Buyer Model Impact for Energy Delivery",
      },
      {
        file: "/Past-Presentations/2022/Overview-of-Namibias-Mining-Sector-Pioneer-of-New-Growth-30.08.2022.pdf",
        alt: "Overview Of Namibia's Mining Sector - A Pioneer of New Growth?",
      },
    ],
  },
  {
    year: 2023,
    src: [
      {
        file: "/Past-Presentations/2023/Nuclear-Energy-in-the-Global-Energy-Transition-Implications-for-Namibias-Uranium-Sector.pdf",
        alt: "Nuclear Energy in the Global Energy Transition",
      },
      {
        file: "/Past-Presentations/2023/Redeveloping-the-Okanjande-mine-building-a-leading-graphite-and-processing-company.pdf",
        alt: "Redeveloping the Okanjande mine building a leading graphite and processing company",
      },
      {
        file: "/Past-Presentations/2023/Rare-Earths-Alliance-Namibia-Strategic-Partnerships-for-Namibia-to-become-the-next-rare-earths-producer.pdf",
        alt: "Rare Earths Alliance Namibia Strategic Partnerships for Namibia to become the next rare earths producer",
      },
      {
        file: "/Past-Presentations/2023/MME-position-on-Critical-Raw-materials-and-the-sustainable-supply-of-critical-minerals-Presentation.pdf",
        alt: "MME position on Critical Raw materials and the sustainable supply of critical minerals",
      },
      {
        file: "/Past-Presentations/2023/Overview-of-Critical-Minerals-Deposits-in-Namibia-Geological-Survey-of-Namibia.pdf",
        alt: "Overview of Critical Minerals Deposits in Namibia Geological Survey of Namibia",
      },
      {
        file: "/Past-Presentations/2023/The-Minerals-value-Chains-in-Battery-industry-from-exploration-to-beneficiation-GSK.pdf",
        alt: "The Minerals value Chains in Battery industry from exploration to beneficiation",
      },
      {
        file: "/Past-Presentations/2023/2023-08-31-Speech-by-Mrs-Gosia-Lachut-EU-Deputy-Head-of-Mission-Mining-Conference.pdf",
        alt: "Speech by Mrs. Gosia Lachut EU Deputy Head of Mission Mining Conference",
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
  const [exhibitorsData, setExhibitorsData] = useState<ExhibitorData[] | null>(
    null
  );
  const [floorPlansData, setFloorPlansData] = useState<FloorPlanData[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExpoData = async () => {
      if (currentYear >= 2023) {
        setIsLoading(true);
        setError(null);
        try {
          let exhibitors: ExhibitorData[] = [];
          let floorPlans: FloorPlanData[] = [];

          exhibitors = await getExhibitorsByYear(currentYear);
          floorPlans = await getFloorPlansByYear(currentYear);

          setExhibitorsData(exhibitors);
          setFloorPlansData(floorPlans);
        } catch (e: any) {
          setError(e.message || `Failed to load expo data for ${currentYear}.`);
          setExhibitorsData(null);
          setFloorPlansData(null);
        } finally {
          setIsLoading(false);
        }
      } else {
        setExhibitorsData(null);
        setFloorPlansData(null);
      }
    };

    loadExpoData();
  }, [currentYear]);

  return (
    <div className="flex flex-col  w-full h-full">
      <PageBanner title="Mining Expo & Conference Past Presentations" />
      <div className="py-16 gap-16 flex items-center justify-center flex-col w-[90%] lg:w-[60%]  mx-auto">
        <h2 className="text-xl md:text-5xl font-poppins font-bold text-black text-center">
          Mining Expo & Conference Past Presentations
        </h2>
        <div className="flex flex-wrap gap-2 items-start justify-center">
          {pastPresentations.map((presentation, index) => (
            <div key={index}>
              <Button
                key={index}
                onClick={() => {
                  //Adding this condition because year 2020 is not included
                  //So adding an extra 1 to the current year after 2019 fixes it
                  if (index >= 7) {
                    setCurrentYear(index + 1 + 2013);
                  } else {
                    setCurrentYear(2013 + index);
                  }
                }}
                className={clsx(
                  "w-fit font-bold font-rubik hover:bg-expoOrange/70 bg-expoBlue transition-colors",
                  {
                    "bg-expoOrange": presentation.year === currentYear,
                  }
                )}
              >
                {presentation.year}
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          {filterPresentationsByYear(currentYear).map((presentations) =>
            presentations.src.map((presentation, index) => (
              <Link
                href={presentation.file}
                download={presentation.file}
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
        <div className="py-16 w-full">
          {currentYear >= 2023 && isLoading && (
            <p>Loading Expo Data for {currentYear}...</p>
          )}
          {currentYear >= 2023 && error && (
            <p>
              Error loading Expo Data for {currentYear}: {error}
            </p>
          )}
          {currentYear >= 2023 && exhibitorsData && floorPlansData ? (
            <PastExpos
              exhibitorsList={exhibitorsData}
              floorPlans={floorPlansData}
              currentYear={currentYear}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PastPresentationsPage;
