"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import RMBSponsorLogo from "../../public/RMB_SPONSOR_LOGO_resize.webp";

function Footer() {
  return (
    <section className="flex items-center justify-center py-4 w-full h-fit bg-expoBlue">
      {/* container */}
      <div className="flex flex-col gap-4 items-center justify-start mx-auto w-[80%] xl:w-[70%] h-full text-[#F2F2F2] font-rubik">
        {/* Links */}
        <div className="flex flex-wrap items-start justify-start  xl:justify-center w-full h-full py-8">
          <div className="flex w-full h-full text-lg flex-wrap gap-8  justify-between items-center">
            <div className="flex flex-col justify-end w-1/3 h-full">
              <div>
                <Image
                  src={RMBSponsorLogo}
                  alt="RMB Logo"
                  className="h-auto ml-[-1rem] sm:ml-[-2rem] w-fit brightness-75"
                />
              </div>
              <h4 className="font-bold text-lg xl:text-xl mb-4">
                Like or Find us on
              </h4>
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
            <div className="flex flex-col gap-4 text-lg items-start justify-start">
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
              <p className="flex flex-row items-center justify-start flex-wrap gap-2">
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
            </div>
          </div>
        </div>

        <p className="text-white/50 text-center">
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
