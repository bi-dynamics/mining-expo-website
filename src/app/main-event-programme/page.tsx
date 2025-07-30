import PageBanner from "@/components/PageBanner";
import React, { Suspense } from "react";
import { Metadata } from "next";
import { MainEventScheduleWithSuspense } from "@/components/MainEventScheduleWithSuspense";
import MainEventScheduleSkeleton from "@/components/MainEventScheduleSkeleton";

export const metadata: Metadata = {
  title: "Main Event Programme",
  description:
    "View the main event schedule for mining expo taking place at the Windhoek Show Grounds 5-7 August 2025",
  openGraph: {
    description:
      "View the main event schedule for mining expo taking place at the Windhoek Show Grounds 5-7 August 2025",

    images: [{ url: "../../opengraph-image.jpg" }],
  },
};

const MainEventPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <PageBanner title="Main Event Programme" />
      <Suspense fallback={<MainEventScheduleSkeleton />}>
        <MainEventScheduleWithSuspense />
      </Suspense>
    </div>
  );
};

export default MainEventPage;
