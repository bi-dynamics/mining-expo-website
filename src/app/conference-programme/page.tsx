import PageBanner from "@/components/PageBanner";
import ProgrammeScheduleSkeleton from "@/components/ProgrammeScheduleSkeleton";
import { ProgrammeScheduleWithSuspense } from "@/components/ProgrammeScheduleWithSuspense";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "View the conference programme event schedule for Day 1 & Day 2.",
  openGraph: {
    images: [{ url: "../opengraph-image.jpg" }],
  },
};

const ConferenceProgrammePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PageBanner title="Conference Programme" />
      <Suspense fallback={<ProgrammeScheduleSkeleton />}>
        <ProgrammeScheduleWithSuspense />
      </Suspense>
    </div>
  );
};

export default ConferenceProgrammePage;
