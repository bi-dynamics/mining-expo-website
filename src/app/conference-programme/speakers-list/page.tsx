import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import Speakers from "@/components/Speakers";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Speakers",
  description:
    "Meet the speakers attending the Mining Expo this year. Including, but not limited to: Hon. Tom Alweendo, Aphary Muyongo, Anthony Viljoen, Willy Mertens, Olavi Hangula",
  openGraph: {
    images: [{ url: "../../opengraph-image.jpg" }],
  },
};

const SpeakersListPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <PageBanner title="Speakers" />
      <Speakers />
    </div>
  );
};

export default SpeakersListPage;
