"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import RMBSponsorLogo from "../../public/RMB_SPONSOR_LOGO.png";

function Footer() {
  return (
    <section className="flex items-center justify-center py-8 w-full h-fit bg-expoBlue">
      {/* container */}
      <div className="flex flex-col gap-4 items-center justify-start mx-auto w-[80%] xl:w-[90%] h-full text-[#F2F2F2] font-rubik">
        {/* Links */}
        <div className="flex flex-wrap items-start justify-start  xl:justify-center w-full h-full gap-8">
          <div className="flex flex-col gap-4 text-sm items-start">
            <h4 className="font-bold text-lg mb-4">MINING EXPO</h4>
            <Link
              href="/main-event-programme"
              className=" hover:text-expoOrange"
            >
              Main Event Programme
            </Link>
            <Link
              href="/main-event-programme/registration-info"
              className=" hover:text-expoOrange"
            >
              Registration & Exhibitor Information
            </Link>
            <Link
              href="/main-event-programme/floor-plans"
              className=" hover:text-expoOrange"
            >
              Floor Plan
            </Link>
            <Link
              href="/main-event-programme/exhibitors"
              className=" hover:text-expoOrange"
            >
              Exhibitors
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm items-start">
            <h4 className="font-bold text-lg mb-4">CONFERENCE</h4>
            <Link
              href="/conference-programme"
              className=" hover:text-expoOrange"
            >
              Programme
            </Link>
            <Link
              href="/conference-programme/speakers-list"
              className=" hover:text-expoOrange"
            >
              Speakers
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm items-start">
            <h4 className="font-bold text-lg mb-4">MARKETING OPPORTUNITIES</h4>
            <Link href="/suppliers-platform" className=" hover:text-expoOrange">
              Supplier&#39;s PLatform
            </Link>
            <Link
              href="/suppliers-platform/b2b"
              className=" hover:text-expoOrange"
            >
              B2B
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm items-start">
            <h4 className="font-bold text-lg mb-4">PAST EVENTS</h4>
            <Link
              href="/past-presentations/"
              className=" hover:text-expoOrange"
            >
              Past Presentations
            </Link>
            <Link
              href="/past-presentations/2023-presentations"
              className=" hover:text-expoOrange"
            >
              2023 Presentations
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm items-start">
            <h4 className="font-bold text-lg mb-4">CONTACT</h4>
            <Link
              href="https://maps.app.goo.gl/9qvpi1GzQvyYyMCf8"
              target="blank_"
              className="flex items-center justify-center gap-2 hover:text-expoOrange"
            >
              <Icon
                icon="carbon:location"
                width="24"
                height="24"
                className="text-expoOrange"
              />
              Address: Jan Jonker Street, Windhoek, Namibia
            </Link>
            <p className="flex items-center justify-center gap-2">
              <Icon
                icon="mynaui:users-group"
                width="24"
                height="24"
                className="text-expoOrange"
              />
              Exhibitor Coordinator: Loide Armas
            </p>
            <p className="flex flex-wrap items-center justify-start gap-2">
              <Icon
                icon="material-symbols:mail-outline"
                width="24"
                height="24"
                className="text-expoOrange"
              />
              Mail:{" "}
              <Link
                href="mailto:miningexponam@gmail.com"
                className="hover:text-expoOrange"
              >
                miningexponam@gmail.com
              </Link>
              /
              <Link
                href="mailto:info@chamberofmines.org.na"
                className="hover:text-expoOrange"
              >
                info@chamberofmines.org.na
              </Link>
            </p>
            <Link
              href="tel:+26461237925"
              className="flex items-center justify-center gap-2 hover:text-expoOrange"
            >
              <Icon
                icon="mdi:phone-outline"
                width="24"
                height="24"
                className="text-expoOrange"
              />
              Tel: +264 61 237 925
            </Link>
            <div className="flex gap-2 w-full h-full">
              <Link
                href="https://www.linkedin.com/in/chamber-of-mines-namibia-92270414a/"
                target="blank_"
                className="flex items-center justify-center gap-2"
              >
                <Icon
                  icon="entypo-social:linkedin-with-circle"
                  width="45"
                  height="45"
                  className="text-expoOrange hover:text-white hover:animate-pulse"
                />
              </Link>
              <Link
                href="https://twitter.com/CoMinesNamibia"
                target="blank_"
                className="rounded-full flex items-center justify-center"
              >
                <Icon
                  icon="pajamas:twitter"
                  width="45"
                  height="45"
                  className="text-expoBlue bg-expoOrange hover:bg-white hover:animate-pulse p-2 rounded-full"
                />
              </Link>
              <Link
                href="https://www.facebook.com/CoMNamibia/"
                target="blank_"
                className="flex items-center justify-center gap-2"
              >
                <Icon
                  icon="ic:baseline-facebook"
                  width="50"
                  height="50"
                  className="text-expoOrange hover:text-white hover:animate-pulse"
                />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={RMBSponsorLogo}
          alt="RMB Logo"
          className="mx-auto h-20 xl:h-40 w-auto"
        />
        <p className="text-white/80 text-center">
          © 2024,{" "}
          <Link
            href="http://bi-dynamics.com/"
            className="font-bold text-white underline underline-offset-2 hover:text-expoOrange"
          >
            BI-Dynamics PTY LTD.
          </Link>{" "}
          All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
