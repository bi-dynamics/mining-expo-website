import React, { Suspense, useEffect, useState } from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SpeakerCardSkeleton from "@/components/SpeakerCardSkeleton";
import { SpeakersListWithSuspense } from "@/components/SpeakersWithSuspense";

export const metadata: Metadata = {
  title: "Speakers",
  description:
    "Meet the speakers attending the Mining Expo this year. Including, but not limited to: Hon. Tom Alweendo, Aphary Muyongo, Anthony Viljoen, Willy Mertens, Olavi Hangula",
  openGraph: {
    images: [{ url: "../../opengraph-image.jpg" }],
  },
};

export default async function SpeakersListPage() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <PageBanner title="Speakers" />
      <Suspense fallback={<SpeakerCardSkeleton />}>
        <SpeakersListWithSuspense />
      </Suspense>
    </div>
  );
}
