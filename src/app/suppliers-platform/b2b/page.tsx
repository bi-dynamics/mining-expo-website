import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B",
  description:
    "The B2B offering allows the individual supplier or potential customer to set up person-to-person meetings during the Expo. The platform allows exhibitors direct engagement with potential clients to negotiate and conclude deals or explore future business opportunities. NB: The B2B is a service offering for Exhibitors ONLY.",

  openGraph: {
    description:
      "The B2B offering allows the individual supplier or potential customer to set up person-to-person meetings during the Expo. The platform allows exhibitors direct engagement with potential clients to negotiate and conclude deals or explore future business opportunities. NB: The B2B is a service offering for Exhibitors ONLY.",

    images: [{ url: "../../opengraph-image.jpg" }],
  },
};

const B2bPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PageBanner title="B2B" />
      <div className="flex flex-col items-center justify-center w-[90%] xl:w-[80%] max-w-screen-xl gap-16 py-16">
        <h2 className="text-2xl  lg:text-5xl font-poppins text-center font-bold text-black md:text-start">
          Discover Marketing Opportunities
        </h2>
        <div className="w-full h-full items-center justify-start flex flex-wrap gap-4 ">
          <p className="text-black/70 font-rubik text-sm lg:text-lg text-left">
            The B2B offering allows the individual supplier or potential
            customer to set up person-to-person meetings during the Expo. The
            platform allows exhibitors direct engagement with potential clients
            to negotiate and conclude deals or explore future business
            opportunities.
          </p>
          <p className="text-black/70 font-rubik text-sm lg:text-lg text-left p-4 rounded-xl bg-slate-100">
            <span className=" font-bold">NB: </span>The B2B is a service
            offering for Exhibitors ONLY. The platform to arrange meetings will
            close a few days prior to the event.
          </p>
        </div>
        <div className="w-full h-fit flex flex-col xl:flex-row gap-8 items-center xl:items-end justify-between text-black/70 font-rubik">
          <div className=" w-full xl:w-[45%] h-full flex flex-col justify-between gap-8">
            <div className="w-full h-full">
              <h3 className="font-bold text-black/80 text-xl">
                How it will work:
              </h3>
              <p className="h-16">
                <br /> For more information on how to use the B2B function,
                please download the user Manual here:
              </p>
            </div>

            <Button className="w-full h-full text-base xl:text-xl bg-expoOrange">
              <Link href="/b2bManual.pdf" target="_blank">
                B2B User Manual
              </Link>
            </Button>
          </div>
          <div className=" w-full xl:w-[45%] h-full flex flex-wrap justify-between gap-8">
            <div className="w-full h-full">
              <h3 className="font-bold text-black/80 text-xl">Registration:</h3>
              <p className="h-16">
                <br /> To Register & Schedule for a B2B Appointment, click here:
              </p>
            </div>

            <Button className="w-full h-full text-base xl:text-xl bg-expoOrange">
              <Link
                href="https://b2b.miningexponamibia.com/Web/"
                target="_blank"
              >
                Schedule an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2bPage;
