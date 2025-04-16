import React, { Suspense } from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { FloorPlansWithSuspense } from "@/components/FloorPlansWithSuspense";
import FloorPlanSkeleton from "@/components/FloorPlanSkeleton";

export const metadata: Metadata = {
  title: "Floor Plans",
  description:
    "View floor plans for all venues of the 2024 Mining Expo & Conference.",
  openGraph: {
    images: [{ url: "../../opengraph-image.jpg" }],
    description:
      "View floor plans for all venues of the 2024 Mining Expo & Conference.",
  },
};

const FloorPlansPage = () => {
  return (
    <div className="w-full h-full">
      <PageBanner title="Floor Plans" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className=" text-5xl font-poppins font-bold text-black text-center">
          Floor Plans Coming Soon
        </h2>
      </section>
      {/* <Suspense fallback={<FloorPlanSkeleton />}>
        <FloorPlansWithSuspense />
      </Suspense> */}
    </div>
  );
};

export default FloorPlansPage;
