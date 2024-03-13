import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import suppliersPlatform from "../../../public/suppliers-platform.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Supplier's Platform`,
};

const SuppliersPlatformPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PageBanner title="Suppliers Platform" />
      <div className="flex flex-col items-center justify-center w-[90%] xl:w-[80%] gap-16 py-16">
        <h2 className="text-2xl  lg:text-5xl font-poppins text-center font-bold text-black md:text-start">
          Discover Marketing Opportunities
        </h2>
        <div className="w-full h-full flex flex-wrap gap-4 ">
          <p className="text-black/70 font-rubik text-sm lg:text-lg text-left">
            The Supplier&#39;s platform is a centrally located presentation area
            for exhibitors to display their unique service and product offerings
            to a broader spectrum of Expo-goers and other exhibitors. This
            platform provides suppliers with greater exposure and access to
            business opportunities by directing participants and interested
            customers to exhibitor stands for further meetings and engagements.
          </p>
          <p className="text-black/70 font-rubik text-sm lg:text-lg text-left">
            The programme for this platform will be divided into 15-minute slots
            for each supplier. Once all the slots have been booked and
            allocated, the event organisers will advertise the programme on
            their marketing channels.
          </p>
        </div>
        {/* Add image */}
        <div>
          <Image
            src={suppliersPlatform}
            alt="Suppliers Platform"
            className="block h-full w-full object-cover rounded-xl z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default SuppliersPlatformPage;
