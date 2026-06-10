"use client";

import PageBanner from "@/components/PageBanner";
import Script from "next/script";

function DelegateRegistrationPage() {
  return (
    <main>
      <PageBanner title="Delegate Registration" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className="text-5xl font-poppins font-bold text-black text-center">
          Exhibitor Registration
        </h2>

        {/* Cognito Forms recommended embed: div + iframe.js auto-sizes the height */}
        <div className="w-full">
          <iframe
            src="https://www.cognitoforms.com/f/2QVll_rxDEOR3mB1yLnroQ/9"
            style={{ border: 0, width: "100%", minHeight: "400px" }}
            scrolling="no"
            className="block"
          />
        </div>

        <Script
          src="https://www.cognitoforms.com/f/iframe.js"
          strategy="afterInteractive"
        />
      </section>
    </main>
  );
}

export default DelegateRegistrationPage;