import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "View the conference programme event schedule for Day 1 & Day 2.",
  openGraph: {
    images: [{ url: "../opengraph-image.jpg" }],
  },
};

const ConferenceProgrammePage = () => {
  return <div>ConferenceProgrammePage</div>;
};

export default ConferenceProgrammePage;
