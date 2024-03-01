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
  },
};

const FloorPlansPage = () => {
  return (
    <div className="w-full h-full">
      <PageBanner title="Floor Plans" />
      <Suspense fallback={<FloorPlanSkeleton />}>
        <FloorPlansWithSuspense />
      </Suspense>
    </div>
  );
};

export default FloorPlansPage;
