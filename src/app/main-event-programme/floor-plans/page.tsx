import React, { Suspense } from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { FloorPlansWithSuspense } from "@/components/FloorPlansWithSuspense";
import FloorPlanSkeleton from "@/components/FloorPlanSkeleton";

// Floor plans come from Firestore via the Firebase SDK, not fetch(), so this
// route has no other revalidation signal and would otherwise be prerendered
// once at build time — content edits would need a redeploy to appear.
// Matches the 300s window used for the event API in src/lib/eventApi.ts.
export const revalidate = 300;

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

      <Suspense fallback={<FloorPlanSkeleton />}>
        <FloorPlansWithSuspense />
      </Suspense>
    </div>
  );
};

export default FloorPlansPage;
