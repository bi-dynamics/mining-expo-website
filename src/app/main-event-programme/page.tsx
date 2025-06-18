import PageBanner from "@/components/PageBanner";
import React, { Suspense } from "react";
import { Metadata } from "next";
import { MainEventScheduleWithSuspense } from "@/components/MainEventScheduleWithSuspense";
import MainEventScheduleSkeleton from "@/components/MainEventScheduleSkeleton";

export const metadata: Metadata = {
  title: "Main Event Programme",
  description:
    "View the main event schedule for mining expo Day 1 & Day 2 taking place at the Windhoek Show Grounds 7-8 August 2024",
  openGraph: {
    description:
      "View the main event schedule for mining expo Day 1 & Day 2 taking place at the Windhoek Show Grounds 7-8 August 2024",

    images: [{ url: "../../opengraph-image.jpg" }],
  },
};

const MainEventPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <PageBanner title="Main Event Programme" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className=" text-5xl font-poppins font-bold text-black text-center">
          Schedule to be released soon
        </h2>
      </section>
      {/* <Suspense fallback={<MainEventScheduleSkeleton />}>
        <MainEventScheduleWithSuspense />
      </Suspense> */}
    </div>
  );
};

export default MainEventPage;
