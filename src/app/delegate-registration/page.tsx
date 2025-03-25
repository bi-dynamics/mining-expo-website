import PageBanner from "@/components/PageBanner";

function delegateRegistrationPage() {
  return (
    <main>
      <PageBanner title="Delegate Registration" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className=" text-5xl font-poppins font-bold text-black text-center">
          Exhibitor Registration
        </h2>
        <iframe
          src="https://www.cognitoforms.com/f/2QVll_rxDEOR3mB1yLnroQ/5"
          className="w-[80%] h-[150vh] sm:h[100vh]"
        ></iframe>
        <script src="https://www.cognitoforms.com/f/iframe.js" async />
        {/* <p>
          Exhibitor registrations for the Mining Expo & Conference 2025 will
          begin 1 April 2025.
        </p> */}
      </section>
    </main>
  );
}

export default delegateRegistrationPage;
