import React, { Suspense } from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { ExhibitorsWithSuspense } from "@/components/ExhibitorsWithSuspense";
import ExhibitorsSkeleton from "@/components/ExhibitorsSkeleton";

export const metadata: Metadata = {
  title: "Exhibitors",
  description:
    "View all exhibitors attending the Mining Expo & Conference 2025",
  openGraph: {
    images: [{ url: "../../opengraph-image.jpg" }],
  },
};

const ExhibitorsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PageBanner title="Exhibitors" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className=" text-5xl font-poppins font-bold text-black text-center">
          Exhibitors to be announced soon
        </h2>
      </section>
      {/* <Suspense fallback={<ExhibitorsSkeleton />}>
        <ExhibitorsWithSuspense />
      </Suspense> */}
    </div>
  );
};

export default ExhibitorsPage;
