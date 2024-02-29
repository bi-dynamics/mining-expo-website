import PageBanner from "@/components/PageBanner";
import React, { Suspense } from "react";
import { Metadata } from "next";
import { MainEventScheduleWithSuspense } from "@/components/MainEventScheduleWithSuspense";
import MainEventScheduleSkeleton from "@/components/MainEventScheduleSkeleton";

export const metadata: Metadata = {
  title: "Main Event Programme",
  description:
    "30 - 31 August Our Event Schedule 1st Day 2nd Day 07h30 – 09h00 #Windhoek Show Grounds Office Arrival of Exhibitors 09h00 – 09h10 #Makalani Hall Arrival by H.E. Dr Hage Geingob, President of the Republic of Namibia AU & Namibia Anthems Mr Ricardo Goagoseb - Director of ceremonies AU & Namibia Anthems Mr Ricardo",
  openGraph: {
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
