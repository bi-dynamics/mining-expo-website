import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exhibitor Registration",
  description:
    "Exhibitor Registration Information; Please read this important information before submitting your registration. Payment due date: 8 August 2024.",
  openGraph: {
    title: "Exhibitor Registration & Information",
    description:
      "Exhibitor Information; Please read this important information before submitting your registration. Payment due date: 8 August 2024.",
    images: [{ url: "../../opengraph-image.jpg" }],
  },
};

const boothPackages = [
  {
    title:
      "Chamber Members: Class D & Associate Members and Namibian Companies",
    price: "N$ 33,441.00",
    priceNB: "per 9m\u00B2 (3m x 3m) booth - exclusitve of VAT",
    features: [
      {
        one: "2x lunch tickets",
        two: "2x cocktail function access tickets",
        three: "Suppliers Platform",
        four: "B2B",
      },
    ],
  },
  {
    title: "Chamber Member Class A, B & C",
    price: "N$ 34,939",
    priceNB: "per 9m\u00B2 (3m x 3m) booth - exclusitve of VAT",
    features: [
      {
        one: "2x lunch tickets",
        two: "2x cocktail function access tickets",
        three: "Suppliers Platform",
        four: "B2B",
      },
    ],
  },
  {
    title: "SADC Member States",
    price: "N$ 59,895",
    priceNB: "per 9m\u00B2 (3m x 3m) booth - exclusitve of VAT",
    features: [
      {
        one: "2x lunch tickets",
        two: "2x cocktail function access tickets",
        three: "Suppliers Platform",
        four: "B2B",
      },
    ],
  },
  {
    title: "International Companies",
    price: "N$ 99,825",
    priceNB: "per 9m\u00B2 (3m x 3m) booth - exclusitve of VAT",
    features: [
      {
        one: "2x lunch tickets",
        two: "2x cocktail function access tickets",
        three: "Suppliers Platform",
        four: "B2B",
      },
    ],
  },
];

const RegistrationInfoPage = () => {
  return (
    <main>
      <PageBanner title="Exhibitor Registration" />
      <section className="flex flex-col w-full h-fit gap-6 py-16 justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[80%] gap-4">
          <h2 className="text-2xl  lg:text-5xl font-poppins font-bold text-black text-center">
            Exhibitor Information for Registration
          </h2>
          <h3 className="text-base lg:text-xl text-center font-semibold font-rubik text-expoOrange">
            Please read this important information before submitting your
            registration
          </h3>
          <p className="text-black/70 font-semibold font-rubik text-sm lg:text-lg text-center p-4 bg-slate-100 rounded-xl">
            Payment due date: 25 July 2025 <br />
            <span className="font-semibold text-red-500">
              Stands will only be erected upon receipt of 100% payment.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center h-full w-[90%] xl:w-[80%] py-16">
          <Accordion type="single" collapsible className="w-full xl:w-[60%]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange">
                STAND ALLOCATION & REQUIREMENTS
              </AccordionTrigger>
              <AccordionContent>
                For your convenience, the floor plan will be uploaded on the
                website prior to the event.{" "}
                <span className="font-bold text-black/80">
                  A maximum of two people per nine square metre stand is
                  permitted.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange">
                DISMANTLING OF STANDS
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-red-500">
                  NB! No breaking down/dismantling of exhibition spaces is
                  allowed on the last day of the EXPO
                </span>
                <br />
                This includes the removal of products. There will be guards at
                the entrance gates and on the Show Grounds during these periods
                and entrance is restricted to authorized persons only. The
                Windhoek Show Grounds are guarded throughout the night.
                <br />
                <br />
                Friday,{" "}
                <span className="font-bold text-black/80">
                  09 August 2025
                </span>{" "}
                - Gates and Halls will open for Exhibitors at 07h00 Halls will
                close at 16h00. <br />
                <br /> Saturday,{" "}
                <span className="font-bold text-black/80">
                  10 August 2025
                </span>{" "}
                - Gates and Halls will open for Exhibitors at 08h30 Halls will
                close at 13h00.
                <br />
                <br />
                <span className="font-semibold text-red-500">
                  The Chamber of Mines of Namibia, as the organisers of the
                  event, does not accept any responsibility or liability for the
                  loss, damage or theft of the exhibitor’s equipment, items on
                  display, stand and/or personal belongings.
                </span>
                <br />
                <br />
                We agree to abide by the terms and conditions and by any
                amendment which may be made by the Organisers and/or the hall
                owner
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange">
                TERMS AND CONDITIONS
              </AccordionTrigger>
              <AccordionContent>
                <span className="text-red-500 font-semibold">
                  The exhibitor is legally bound to take part in the trade
                  exhibition on receipt of the completed registration form.
                </span>{" "}
                The rented area specified on the registration form shall apply
                for the duration of the event. Every square meter or part
                thereof shall be charged in full.{" "}
                <span className="font-bold text-black/80">
                  All prices are quoted exclusive of VAT.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange">
                CANCELLATION TERMS
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-black">Cancellation fee:</span>
                <br />
                <br />
                If the exhibitor cancels or withdraws his application, the
                following cancellation charges shall apply:
                <br />
                <span className="font-bold text-red-500">
                  ​04 June – 04 July 2025
                </span>{" "}
                = 50% of total stand fee.
                <br />
                <span className="font-bold text-red-500">
                  05 July – 05 August 2025 to the start of the fair
                </span>{" "}
                = 100% of total stand rent.
                <br />A{" "}
                <span className=" font-semibold text-red-500 underline">
                  no-show
                </span>{" "}
                will constitute a cancellation and will be charged 100% of total
                stand fee. In all cases all taxes, contributions, fees and extra
                costs will also have to paid.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <h2 className="text-2xl lg:text-5xl font-poppins font-bold text-black">
          Packages
        </h2>
        <div className="flex flex-wrap gap-4 items-center justify-center h-full w-[90%] xl:w-[80%] pt-4">
          {boothPackages.map((boothPackage, index) => (
            <div
              key={index}
              className="pb-8 flex flex-col items-center justify-center border border-black/10 w-full sm:w-[40vw] xl:w-[33%] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.10)]  hover:-mt-2 hover:shadow-[0_0_15px_rgba(0,0,0,0.20)]  transition-all duration-200"
            >
              <h3 className="text-center text-lg font-bold text-expoOrange bg-expoBlue w-full h-20 py-4 rounded-t-lg px-3">
                {boothPackage.title}
              </h3>
              <div className="w-full text-center pb-4 textl-lg lg:text-2xl font-rubik font-semibold text-white bg-expoBlue ">
                <p>{boothPackage.price}</p>
                <p className=" text-sm text-white/80 w-[80%] mx-auto">
                  {boothPackage.priceNB}
                </p>
              </div>
              <div className=" w-full flex flex-col items-start justify-center gap-4 px-10 p-8">
                <div className="w-full h-px bg-expoBlue/20"></div>
                <p className="text-center font-semibold">Package Includes:</p>
                {boothPackage.features.map((feature, index) => (
                  <ul
                    key={index}
                    className="list-disc list-inside text-sm font-rubik font-regular text-expoBlue/80 w-full"
                  >
                    <li>{feature.one}</li>
                    <li>{feature.two}</li>
                    <li>{feature.three}</li>
                    <li>{feature.four}</li>
                  </ul>
                ))}
              </div>
              <Button
                asChild
                className=" w-[80%] bg-expoOrange text-expoBlue hover:text-expoOrange hover:bg-expoBlue"
                size="lg"
              >
                <Link href="/delegate-registration">Register Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RegistrationInfoPage;
