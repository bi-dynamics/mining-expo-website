import PageBanner from "@/components/PageBanner";

function delegateRegistrationPage() {
  return (
    <main>
      <PageBanner title="Conference Registration" />
      <section className="flex flex-col gap-16 items-center justify-center w-[90%] xl:w-[80%] h-fit mx-auto py-16">
        <h2 className=" text-5xl font-poppins font-bold text-black text-center">
          Conference Registration
        </h2>
        <iframe
          src="https://www.cognitoforms.com/f/2QVll_rxDEOR3mB1yLnroQ/8"
          className="w-[80%] h-[150vh] sm:h[100vh]"
        ></iframe>
        <script src="https://www.cognitoforms.com/f/iframe.js" async />
      </section>
    </main>
  );
}

export default delegateRegistrationPage;
