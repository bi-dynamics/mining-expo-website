import PageBanner from "@/components/PageBanner";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Event Programme",
  description:
    "30 - 31 August Our Event Schedule 1st Day 2nd Day 07h30 – 09h00 #Windhoek Show Grounds Office Arrival of Exhibitors 09h00 – 09h10 #Makalani Hall Arrival by H.E. Dr Hage Geingob, President of the Republic of Namibia AU & Namibia Anthems Mr Ricardo Goagoseb - Director of ceremonies AU & Namibia Anthems Mr Ricardo",
};

const MainEventPage = () => {
  return (
    <PageBanner
      title="Main Event Programme"
      backgroundImage="/mining-expo-namibia-venue.webp"
    />
  );
};

export default MainEventPage;
