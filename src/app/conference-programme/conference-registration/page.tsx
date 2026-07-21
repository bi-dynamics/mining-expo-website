import { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import conferenceRegistration from "../../../../public/conference-registration.png";

export const metadata: Metadata = {
  title: "Conference Registration",
  description:
    "Register for the 2026 Mining Expo & Conference through the official Mining Expo Namibia app. Get conference registration, free entrance tickets, programmes, speakers and the exhibitor directory in one place.",
};

const APP_STORE_URL =
  "https://apps.apple.com/na/app/mining-expo-namibia/id6779627592";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bpih.miningexpo&pcampaignid=web_share";

function delegateRegistrationPage() {
  return (
    <main>
      <PageBanner title="Conference Registration" />
      <section className="flex flex-col gap-12 items-center justify-center w-[90%] xl:w-[80%] max-w-screen-xl h-fit mx-auto py-16">
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-black text-center">
          Conference Registration
        </h2>
        <p className="font-medium text-center max-w-3xl text-black/70 font-rubik">
          Registration for delegates and visitors to the 2026 Conference will
          open in July 2026. There is no cost attached to registration; it is
          required purely for logistics and administrative purposes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
          <div className="relative w-full">
            <Image
              src={conferenceRegistration}
              alt="Everything you need in one app — Mining Expo & Conference 2026, 4-6 August 2026, Windhoek Showgrounds"
              className="w-full h-auto rounded-2xl shadow-lg"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-expoBlue text-center lg:text-left">
              Everything you need in one app
            </h3>
            <p className="text-black/70 font-rubik text-base lg:text-lg text-center lg:text-left">
              Download the official Mining Expo Namibia app to complete your
              conference registration, claim free entrance tickets, and browse
              the full Expo and Conference programmes, speakers and exhibitor
              directory — all from your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-expoBlue hover:bg-expoOrange transition-colors rounded-xl px-6 py-3.5 text-white font-semibold"
                aria-label="Download the Mining Expo Namibia app on the App Store"
              >
                <svg
                  viewBox="0 0 384 512"
                  className="h-6 w-6 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[0.65rem] font-normal opacity-90">
                    Download on the
                  </span>
                  <span className="text-base">App Store</span>
                </span>
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-expoBlue hover:bg-expoOrange transition-colors rounded-xl px-6 py-3.5 text-white font-semibold"
                aria-label="Get the Mining Expo Namibia app on Google Play"
              >
                <svg
                  viewBox="0 0 512 512"
                  className="h-6 w-6 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[0.65rem] font-normal opacity-90">
                    Get it on
                  </span>
                  <span className="text-base">Google Play</span>
                </span>
              </a>
            </div>

            <p className="text-black/70 font-rubik text-sm text-center lg:text-left">
              Just in case you are not getting your OTP, kindly use{" "}
              <strong className="font-bold text-expoBlue">123456</strong> to
              access the app content.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default delegateRegistrationPage;
